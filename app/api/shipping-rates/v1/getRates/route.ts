import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    shippingRates: [
      {
        code: "TEST_STD",
        title: "Frete Padrão (Teste)",
        cost: {
          value: 29.9,
          currency: "BRL"
        },
        deliveryTime: {
          minDays: 5,
          maxDays: 7
        }
      }
    ]
  });
}
