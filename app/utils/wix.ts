import { createClient, OAuthStrategy } from "@wix/sdk";
import { shippingRates } from "@wix/ecom";

export const wixClient = createClient({
  modules: { shippingRates },
  auth: OAuthStrategy({
    clientId: process.env.WIX_APP_ID!,
  }),
});
