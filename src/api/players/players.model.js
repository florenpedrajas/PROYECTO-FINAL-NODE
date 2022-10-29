const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playersShema = new Schema( {

    name: {type: String, required: true, trim: true},  //trim quita estacios si lo ponemos por error con un espacio
    img:{type: String, required: true, trim: true},
    team:{type: String, required: true, trim: true},
    age:{type: Number, required: true, trim: true},
    dorsal:{type: Number,  trim: true},
    position:{type: String, trim: true},
    sports: {type:mongoose.Types.ObjectId, ref:"sports"},

},


{
    timestamps: true
}
);



const Player = mongoose.model ("players", playersShema);

module.exports = Player;
