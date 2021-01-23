const router = require("express").Router();
const Workout = require("../Develop/models/workouts.js");

router.post("/api/workouts", ({ body }, res) => {
  console.log("post working");
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.put("/:id/update", (req, res) => {
//   let updates = req.body //we set a variable equal to the entire req.body
//   Puppy.findOneAndUpdate({ _id: req.params.id }, updates, { new: true })
//     .then(updatedPuppy => res.json(updatedPuppy))
//     .catch(err => res.status(400).json("Error: " + err))
// })
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body}})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
// router.put("/api/workouts/:id", ({ body }, res) => {
//   console.log(body);
//   Workout.update(body)
//     .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workouts", (req, res) => {
  console.log("get working");
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  console.log("range working");
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
