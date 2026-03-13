// SeerBit Payment Integration
// Docs: https://seerbit.com/developers

const SEERBIT_BASE_URL = "https://seerbitapi.com/api/v2";
const SEERBIT_SECRET_KEY = process.env.SEERBIT_SECRET_KEY;
const SEERBIT_PUBLIC_KEY = process.env.SEERBIT_PUBLIC_KEY;

export interface InitiatePaymentParams {
  amount: number;
  currency: string;
  email: string;
  fullName: string;
  reference: string;
  callbackUrl: string;
}

export async function initiatePayment(params: InitiatePaymentParams) {
  const response = await fetch(`${SEERBIT_BASE_URL}/payments/initiate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SEERBIT_SECRET_KEY}`,
    },
    body: JSON.stringify({
      publicKey: SEERBIT_PUBLIC_KEY,
      amount: params.amount.toString(),
      currency: params.currency,
      country: "NG",
      paymentReference: params.reference,
      email: params.email,
      fullName: params.fullName,
      callbackUrl: params.callbackUrl,
      productDescription: "Scholarvia Application Fee",
    }),
  });

  return response.json();
}

export async function verifyPayment(reference: string) {
  const response = await fetch(`${SEERBIT_BASE_URL}/payments/${reference}`, {
    headers: {
      Authorization: `Bearer ${SEERBIT_SECRET_KEY}`,
    },
  });

  return response.json();
}
