import express, { Application, Request, Response } from "express";

const app: Application = express();
app.use(express.json());
const PORT: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, World!" });
});
app.post("/data", (req: Request, res: Response) => {
  res
    .status(200)
    .json({
      message: `Data successfully received: ${JSON.stringify(req.body)}`,
    });
});
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
