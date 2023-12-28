import express from "express";
import { Barn } from "../schema/schema";

const router = express.Router();

router.delete("/barn/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBarn = await Barn.findByIdAndDelete(id);

    if (!deletedBarn) {
      res.status(404).send("No kid was found with that ID.");
    } else {
      res.status(200).json(deletedBarn);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default router;
