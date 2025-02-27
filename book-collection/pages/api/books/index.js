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
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        const book = await Book.create(req.body);
        res.status(201).json({ success: true, data: book})
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
}
