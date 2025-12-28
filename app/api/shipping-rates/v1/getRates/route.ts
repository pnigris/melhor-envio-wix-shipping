import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const currency = body?.currency || "BRL";

  return NextResponse.json({
    shippingRates: [
      {
        code: "TEST_STD",
        title: "Frete Padrão (Teste)",
        cost: {
          value: 29.9,
          currency
        },
        deliveryTime: {
          minDays: 5,
          maxDays: 7
        }
      }
    ]
  });
}

