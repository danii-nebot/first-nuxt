export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // const queryParams = getQuery(event);

  console.log(body, "!!");
  event.node.req.headers.authorization; // get token
  // process token
  event.node.res.statusCode = 201;
  event.node.res.statusMessage = "";
  return { data: body };
});
