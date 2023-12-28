import express from "express";
import { Barn } from "../schema/schema";

const router = express.Router();

router.post("/addkid", async (req, res) => {
  try {
    const newStudent = new Barn(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default router;

// import express from "express";
// import { Barn } from "../schema/schema";

// const router = express.Router();

// // DELETE route
// router.delete("/barn/:id", async (req, res) => {
//   try {
//     const id = req.params.id;  // Hämta ID från request URL.
//     const deletedBarn = await Barn.findByIdAndDelete(id);  // Använd Mongoose-metod för att ta bort dokumentet.

//     if (!deletedBarn) {
//       res.status(404).send("Inget barn hittades med det angivna ID:t.");
//     } else {
//       res.status(200).json(deletedBarn);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// });

// export default router;

