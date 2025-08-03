import { Request, Response } from "express";

export function getAllUser(request: Request, response: Response){
      response.status(200).send({ "message": "Hello Wold" });
}