const express = require("express");
const router = express.Router();
const allexercises = require("../apiData/allexercises.json");
const bodyParts = require("../apiData/bodyParts.json");
const targetMuscles = require("../apiData/targetMuscles.json");
const arms = require("../apiData/arms.json");
const back = require("../apiData/back.json");
const cardio = require("../apiData/cardio.json");
const chest = require("../apiData/chest.json");
const legs = require("../apiData/legs.json");
const shoulders = require("../apiData/shoulders.json");
const abs = require("../apiData/abs.json");
const adductors = require("../apiData/adductors.json");
const biceps = require("../apiData/biceps.json");
const calves = require("../apiData/calves.json");
const forearms = require("../apiData/forearms.json");
const glutes = require("../apiData/glutes.json");
const traps = require("../apiData/traps.json");
const triceps = require("../apiData/triceps.json");
const upperback = require("../apiData/upperback.json");

router.get("/", async (req, res) => {
  try {
    res.status(200).send(allexercises);
  } catch (err) {
    res
      .status(500)
      .send("Sorry for the inconvinience, We are under maintainance");
  }
});

router.get("/bodyParts", async (req, res) => {
  try {
    res.status(200).send(bodyParts);
  } catch (err) {
    res
      .status(500)
      .send("Sorry for the inconvinience, We are under maintainance");
  }
});

router.get("/targetMuscles", async (req, res) => {
  try {
    res.status(200).send(targetMuscles);
  } catch (err) {
    res
      .status(500)
      .send("Sorry for the inconvinience, We are under maintainance");
  }
});

router.get("/bodyParts/:bodyPart", async (req, res) => {
  const bodyPart = req.params.bodyPart;
  try {
    if (bodyPart === "arms") {
      res.status(200).send(arms);
    } else if (bodyPart === "back") {
      res.status(200).send(back);
    } else if (bodyPart === "cardio") {
      res.status(200).send(cardio);
    } else if (bodyPart === "chest") {
      res.status(200).send(chest);
    } else if (bodyPart === "legs") {
      res.status(200).send(legs);
    } else if (bodyPart === "shoulders") {
      res.status(200).send(shoulders);
    } else {
      res.status(500).json({ message: "Invalid User Request Params" });
    }
  } catch (err) {
    res
      .status(500)
      .send("Sorry for the inconvinience, We are under maintainance");
  }
});

router.get("/targetMuscles/:targetMuscle", async (req, res) => {
  const targetMuscle = req.params.targetMuscle;
  try {
    if (targetMuscle === "abs") {
      res.status(200).send(abs);
    } else if (targetMuscle === "adductors") {
      res.status(200).send(adductors);
    } else if (targetMuscle === "biceps") {
      res.status(200).send(biceps);
    } else if (targetMuscle === "calves") {
      res.status(200).send(calves);
    } else if (targetMuscle === "forearms") {
      res.status(200).send(forearms);
    } else if (targetMuscle === "glutes") {
      res.status(200).send(glutes);
    } else if (targetMuscle === "quads") {
      res.status(200).send(quads);
    } else if (targetMuscle === "traps") {
      res.status(200).send(traps);
    } else if (targetMuscle === "triceps") {
      res.status(200).send(triceps);
    } else if (targetMuscle === "upper back") {
      res.status(200).send(upperback);
    } else {
      res.status(500).json({ message: "Invalid User Request Params" });
    }
  } catch (err) {
    res
      .status(500)
      .send("Sorry for the inconvinience, We are under maintainance")
      .json({ Error: err });
  }
});

module.exports = router;
