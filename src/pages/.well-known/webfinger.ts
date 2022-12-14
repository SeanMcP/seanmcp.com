const INSTANCE = "fosstodon.org";
const USERNAME = "seanmcp";

/**
 * This endpoint adds a webfinger JSON file to your site so that you can use
 * your domain as a reference to your Mastodon account.
 */
export async function get() {
  const response = await fetch(
    `https://${INSTANCE}/.well-known/webfinger?resource=acct:${USERNAME}@${INSTANCE}`
  );
  const data = await response.json();
  return { body: JSON.stringify(data, null, 2) };
}
