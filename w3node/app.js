import express from "express";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import { fileURLToPath } from "url";

import { authMiddleware } from "./api/src/middleware/auth.js";
import { authRouter } from "./api/src/routes/auth.js";
import snippetsRouter from "./api/src/routes/snippets.js";
import tagsRouter from "./api/src/routes/tags.js";
import usersRouter from "./api/src/routes/users.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = YAML.load(
  path.join(__dirname, "api", "swagger", "openapi.yml"),
);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//public routes
app.use("/api/auth", authRouter);
// Protected routers
app.use("/api/snippets", authMiddleware, snippetsRouter);
app.use("/api/tags", authMiddleware, tagsRouter);
app.use("/api/users", authMiddleware, usersRouter);

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
