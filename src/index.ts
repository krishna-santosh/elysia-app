import { Elysia } from "elysia";
import { randomUUIDv7 } from "bun";

const app = new Elysia()
  .get("/", () => ({
    id: randomUUIDv7(),
  }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
