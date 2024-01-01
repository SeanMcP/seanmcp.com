// @ts-expect-error
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Netlify.env.get("SUPABASE_LIKES_URL"),
  Netlify.env.get("SUPABASE_LIKES_KEY")
);

const IS_DEV = Netlify.env.get("NETLIFY_DEV");

export default async (req: Request, context) => {
  const referer = req.headers.get("referer");
  const isInvalidReferer =
    referer && new URL(referer).origin !== context.site.url;

  if (!IS_DEV && isInvalidReferer) {
    return Response.json(
      {
        error: "Not authorized",
        metadata: {
          referer,
          url: context.site.url,
        },
      },
      { status: 401 }
    );
  }

  const requestURL = new URL(req.url);
  let slug = requestURL.searchParams.get("slug");
  slug = normalizeSlug(slug);

  try {
    if (slug) {
      // Return count for a specific slug
      const exists = await supabase
        .from("likes")
        .select("slug,count")
        .eq("slug", slug)
        .single();

      if (exists.data) {
        return Response.json({ count: exists.data.count }, { status: 200 });
      } else {
        return Response.json({ count: 0 }, { status: 200 });
      }
    }
    // Return all slugs and counts
    const ordered = await supabase
      .from("likes")
      .select("slug,count,last_updated")
      .order("count", { ascending: false });

    if (ordered.error) {
      throw ordered.error;
    }

    return Response.json({ data: ordered.data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};

export const config = {
  path: "/fn/likes",
};

// Shared with netlify/edge-functions/like.ts
function normalizeSlug(slug: string): string {
  if (!slug) return slug;

  // Force trailing slash
  return slug.slice(-1) === "/" ? slug : `${slug}/`;
}
