const files: string[] = [];

for await (const dirEntry of Deno.readDir("./dist/articles")) {
  files.push(dirEntry.name);
}

export default (request: Request) => {
  const [base] = request.url.split("/fn");
  const randomArticle = files[Math.floor(Math.random() * files.length)];
  return Response.redirect(new URL(`/articles/${randomArticle}`, base));
};
