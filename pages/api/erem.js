import { mongooseConnect } from "@lib/mongoose";
import { Sportag } from "@models/Sportag";

export default async function Handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Sportag.findOne({ _id: req.query?.id }));
    } else {
      res.json(await Sportag.find());
    }
  }
}
