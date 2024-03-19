const INSTANCE = "indieweb.social";
const USERNAME = "seanmcp";

/**
 * This endpoint adds a webfinger JSON file to your site so that you can use
 * your domain as a reference to your Mastodon account.
 */
export async function GET() {
  const response = await fetch(
    `https://${INSTANCE}/.well-known/webfinger?resource=acct:${USERNAME}@${INSTANCE}`
  );
  const data = await response.json();
  return new Response(JSON.stringify(data, null, 2));
}
