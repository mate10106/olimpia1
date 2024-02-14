import mongoose, { Schema, model, models } from "mongoose";

const helyszinSchema = new Schema(
  {
    sportagID: {
      type: String,
    },
    sportagneve: String,
    versenyszamok: {
      type: String,
    },
    varos: {
      type: String,
    },
    Helyszin: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Helyszin = models.Helyszin || model("Helyszin", helyszinSchema);
