import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
//middlewares
import notFoundMiddlware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
//routers
import authRouter from "./routes/auth.js";
import jobsRouter from "./routes/jobs.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});
app.use(express.json());

const baseURL = "/api/v1/";
app.use(`${baseURL}auth`, authRouter);
app.use(`${baseURL}jobs`, jobsRouter);

app.use(notFoundMiddlware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
