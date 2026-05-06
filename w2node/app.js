import express from "express";
import db from "./db.js";
import z from "zod";
import snippetsRouter from "./api/src/routers/snippets.js";
import tagsRouter from "./api/src/routers/tags.js";
import usersRouter from "./api/src/routers/users.js";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = YAML.load(
  path.join(__dirname, "api", "swagger", "openapi.yml"),
);

const snippetCreateSchema = z.object({
  title: z.string().min(2),
  content: z.string().min(6),
  user_id: z.number().min(1),
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Routers
app.use("/api/snippets", snippetsRouter);
app.use("/api/tags", tagsRouter);
app.use("/api/users", usersRouter);
app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
