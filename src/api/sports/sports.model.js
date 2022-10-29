const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sportsShema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    players: { type: Number, required: true, trim: true },
    matchTime: { type: Number },
    type: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Sport = mongoose.model("sports", sportsShema);

module.exports = Sport;
