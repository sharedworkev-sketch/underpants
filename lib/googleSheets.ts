import { google } from "googleapis";

type OrderRow = {
  name: string;
  phone: string;
  source: string;
};

const GOOGLE_SHEETS_SCOPE = ["https://www.googleapis.com/auth/spreadsheets"];

function getRequiredEnv(name: "GOOGLE_CLIENT_EMAIL" | "GOOGLE_PRIVATE_KEY" | "GOOGLE_SHEET_ID") {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function createGoogleSheetsClient() {
  const auth = new google.auth.JWT({
    email: getRequiredEnv("GOOGLE_CLIENT_EMAIL"),
    key: getRequiredEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n"),
    scopes: GOOGLE_SHEETS_SCOPE,
  });

  return google.sheets({ version: "v4", auth });
}

async function getFirstSheetTitle(spreadsheetId: string) {
  const sheets = createGoogleSheetsClient();
  const response = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets(properties(title))",
  });

  const title = response.data.sheets?.[0]?.properties?.title;

  if (!title) {
    throw new Error("Google Sheet does not contain any tabs");
  }

  return title;
}

export async function appendOrderToSheet(order: OrderRow) {
  const spreadsheetId = getRequiredEnv("GOOGLE_SHEET_ID");
  const sheetTitle = await getFirstSheetTitle(spreadsheetId);
  const sheets = createGoogleSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetTitle}!A:E`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[new Date().toISOString(), order.name, order.phone]],
    },
  });
}
