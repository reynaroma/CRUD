import dbConnect from "../../../lib/dbConnect";
import Book from "../../../models/Book";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const books = await Book.find();
        res.status(200).json({ success: true, data: books });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "POST":
    default:
  }
}