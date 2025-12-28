import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const currency = body?.currency || "BRL";

  return NextResponse.json({
    shippingRates: [
      {
        code: "ME_STANDARD",
        title: "Entrega Padrão",
        cost: {
          value: 29.9,
          currency
        },
        deliveryTime: {
          minDays: 3,
          maxDays: 7
        },
        logistics: {
          deliveryType: "DELIVERY"
        }
      }
    ]
  });
}


