import { GraphQLClient } from "graphql-request";

const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`;

if (!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN) {
  throw new Error("Missing SHOPIFY_STOREFRONT_TOKEN in .env.local");
}

export const shopifyClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN,
    "Content-Type": "application/json",
  },
});
