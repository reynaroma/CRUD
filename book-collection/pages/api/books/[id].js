import dbConnect from "../../../lib/dbConnect";
import Book from "../../../models/Book";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "PUT":
      try {
        const book = await Book.findByIdAndUpdate(req.query.id, req.body, {
          new: true,
          runValidators: true,
        })
        // condition if the book with this id doesn't exist
        if (!book) {
          return res.status(400).json({ success: false })
        }
        // condition if the book with this id exist, return the data in json format
        res.status(200).json({ success: true, data: book });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "DELETE":
      try {
        const deleteBook = await Book.deleteOne({ _id: req.query.id });
        // condition if the book with this id doesn't exist
        if (!deleteBook) {
          return res.status(400).json({ success: false });
        }
        // condition if the book with this id exist, return the data in json format
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false }); // condition if the method is not supported
  }
}