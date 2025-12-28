import { NextResponse } from "next/server";
import { wixClient } from "@/app/utils/wix";

export async function POST(req: Request) {
  const handlers = wixClient.shippingRates.provideHandlers({
    async getShippingRates(payload, metadata) {
      // 🔍 AGORA SIM: payload REAL do Wix
      console.log("WIX PAYLOAD REAL:", JSON.stringify(payload, null, 2));
      console.log("WIX METADATA:", JSON.stringify(metadata, null, 2));

      const currency = metadata?.currency || "BRL";

      return {
        shippingRates: [
          {
            code: "ME_STANDARD",
            title: "Entrega Padrão",
            cost: {
              value: 29.9,
              currency,
            },
            deliveryTime: {
              minDays: 3,
              maxDays: 7,
            },
          },
        ],
      };
    },
  });

  const result = await handlers.handleRequest(req);

  return NextResponse.json(result.body, {
    status: result.status,
  });
}



