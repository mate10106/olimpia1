import { mongooseConnect } from "@lib/mongoose";
import { Helyszin } from "@models/helyszin";

export default async function Handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Helyszin.findOne({ _id: req.query?.id }));
    } else {
      res.json(await Helyszin.find().sort({ varos: 1 }));
    }
  }
}
