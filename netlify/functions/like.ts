import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    const requestURL = new URL(req.url);
    const slug = requestURL.searchParams.get("slug");

    if (!slug) {
        return new Response("No slug provided", { status: 400 });
    }

    const key = "SLUG:" + slug;

    try {
        const likes = getStore("likes", {deployID: "likes.seanmcp.com", name: "likes"});
        console.log('🪲 DBG: a', likes);
        
        const data = await likes.get(key);
        console.log('🪲 DBG: b', data);
        let count = 0;
        if (data) {
            count = parseInt(data);
        }
        count++;
        console.log('🪲 DBG: c', count);
        // await likes.set(key, count.toString(), { metadata: { lastModified: new Date().toISOString() }});
        await likes.set(key, count.toString());
    } catch (error) {
        return new Response(error, { status: 500 });
    }

    return new Response("Like recorded", { status: 200 });
};

export const config: Config = {
    path: "/fn/like",
};
