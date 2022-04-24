import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import routes from "./routes";
import AppError from "./errors/AppError";

import "./database";

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.use(
  (err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    console.log(err);

    return response.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
);

const PORT = 3333;

server.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
