import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const todos = require("./routes/todo.routes");

dotenv.config();

const app: Application = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send("<h1>Server Running Successfully</h1>");
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as any)?.message}`);
}

app.use("/todo", todos);
