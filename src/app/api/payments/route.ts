import { NextRequest, NextResponse } from "next/server";
import { initiatePayment } from "@/lib/payments";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { studentId, amount, currency, email, fullName } = body;

  const reference = `SCH-${Date.now()}-${studentId}`;

  const payment = await db.payment.create({
    data: { studentId, amount, currency, reference },
  });

  const result = await initiatePayment({
    amount, currency, email, fullName, reference,
    callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/student/payments?ref=${reference}`,
  });

  return NextResponse.json({ payment, paymentUrl: result.data?.payments?.redirectLink });
}
