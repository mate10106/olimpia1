import mongoose, { Schema, model, models } from "mongoose";

const sportagakSchema = new Schema(
  {
    helyezesID: {
      type: String,
    },
    helyezes: String,
    orszag: {
      type: String,
    },
    arany: {
      type: String,
    },
    ezust: {
      type: String,
    },
    bronz: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Sportag = models.Sportag || model("Sportag", sportagakSchema);
