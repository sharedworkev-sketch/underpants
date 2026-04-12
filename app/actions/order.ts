"use server";

import { appendOrderToSheet } from "@/lib/googleSheets";

export type OrderFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitOrder(
  _previousState: OrderFormState,
  formData: FormData,
): Promise<OrderFormState> {
  const name = getFieldValue(formData, "name");
  const phone = getFieldValue(formData, "phone");
  const source = getFieldValue(formData, "source") || "OrderSection";

  if (name.length < 2) {
    return {
      status: "error",
      message: "Укажите имя, чтобы мы могли оформить заявку.",
    };
  }

  if (phone.length < 7) {
    return {
      status: "error",
      message: "Укажите корректный номер телефона для связи.",
    };
  }

  try {
    await appendOrderToSheet({
      name,
      phone,
      source,
    });

    return {
      status: "success",
      message: "Заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    };
  } catch (error) {
    console.error("Failed to submit order to Google Sheets", error);

    return {
      status: "error",
      message: "Не удалось отправить заявку. Попробуйте еще раз через минуту.",
    };
  }
}
