import dbConnect from "../../../lib/dbConnect";
import Book from "../../../models/Book";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "PUT":
      break;
    case "DELETE":
      break;
    default:
  }
}