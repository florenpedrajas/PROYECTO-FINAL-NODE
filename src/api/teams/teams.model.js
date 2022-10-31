const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamsShema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    img: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("teams", teamsShema);

module.exports = Team;
