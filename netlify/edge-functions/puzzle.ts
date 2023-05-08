// @ts-ignore
import { parseFeed } from "https://deno.land/x/rss/mod.ts";

function getHTML(props: { error: string; label: string; url: string }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <title>Jigsaw Explorer - Recent puzzle</title>
            <style>
                :root { color-scheme: dark; }
                body { font-family: system-ui; margin: 2rem; text-align: center; }
                h1 { font-size: 1rem;}
            </style>
        </head>
        <body>
            <main>
                <h1><span>🧩</span> Jigsaw Explorer <span>🧩</span></h1>
                
                <a href="${props.url}">${props.label}</a>
            </main>
            ${props.error ? `<!-- ${props.error} -->` : ""}
        </body>
    </html>
    `;
}

export default async () => {
  let label = "";
  let url = "";
  let error = "";

  try {
    const response = await fetch("https://www.jigsawexplorer.com/feed/");
    const xml = await response.text();
    const { entries } = await parseFeed(xml);
    const { title: { value: title }, links: [{ href }] } = entries[0];

    let puzzleId = href.slice("https://www.jigsawexplorer.com/puzzles/".length);
    puzzleId = puzzleId.slice(0, puzzleId.indexOf("-jigsaw-puzzle/"));

    url = `https://www.jigsawexplorer.com/online-jigsaw-puzzle-player.html?puzzle_id=${puzzleId}`;
    label = `Play "${title}"`;
  } catch (e) {
    label = "Try one of the recent puzzles";
    url = "https://www.jigsawexplorer.com/recent-puzzles/";
    error = e.toString();
  }

  return new Response(getHTML({ error, label, url }), {
    headers: { "content-type": "text/html; charset=UTF-8" },
  });
};

export const config = {
  path: "/fn/puzzle",
};
