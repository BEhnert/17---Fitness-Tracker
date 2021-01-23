
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  
date: {
    type: Date,
    default: Date.now
  },
exercises: {
  type: Array
}
// exercises: [
//   {
//     type: String, name: String, duration: Number, weight: Number, reps: Number, sets: Number, distance: Number
//   }
// ]
  // type: {
  //   type: String,
  // },
  // name: {
  //   type: String,
  // },
  //       duration: {
  //         type: Number,
  //       },
  //       weight: {
  //         type: Number,
  //       },
  //       reps: {
  //         type: Number,
  //       },
  //       sets: {
  //         type: Number,
  //       },
  //       distance:  {
  //         type: Number,
  //       }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

