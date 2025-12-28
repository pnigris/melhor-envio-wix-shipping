import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    shippingRates: [
      {
        code: "ME_STANDARD",
        title: "Entrega Padrão",
        cost: {
          value: 29.9,
          currency: "BRL"
        },
        deliveryTime: {
          minDays: 3,
          maxDays: 7
        }
      }
    ]
  });
}




