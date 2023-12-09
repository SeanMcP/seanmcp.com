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
  const slug = requestURL.searchParams.get("slug");

  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }

  try {
    const exists = await supabase
      .from("likes")
      .select("slug,count")
      .eq("slug", slug)
      .single();

    if (exists.data) {
      const next = exists.data.count + 1;
      const update = await supabase
        .from("likes")
        .update({ count: next, last_updated: new Date().toISOString() })
        .eq("slug", slug);

      if (update.error) {
        throw update.error;
      }

      return Response.json({ count: next }, { status: 200 });
    } else {
      const create = await supabase.from("likes").insert({ slug });

      if (create.error) {
        throw create.error;
      }

      return Response.json({ count: 1 }, { status: 200 });
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};

export const config = {
  path: "/fn/like",
};
