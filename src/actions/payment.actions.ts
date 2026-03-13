"use server";

import { db } from "@/lib/db";
import { verifyPayment } from "@/lib/payments";

export async function verifyAndUpdatePayment(reference: string) {
  const result = await verifyPayment(reference);

  if (result.data?.code === "SUCCESS") {
    return db.payment.update({
      where: { reference },
      data: { status: "SUCCESS" },
    });
  }

  return db.payment.update({
    where: { reference },
    data: { status: "FAILED" },
  });
}
