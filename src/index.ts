import { Elysia } from "elysia";
import { randomUUIDv7 } from "bun";

const app = new Elysia();

app.get("/", () => ({
  id: randomUUIDv7(),
}));

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
