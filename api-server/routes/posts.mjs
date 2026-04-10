import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get all perfumes
router.get("/", async (req, res) => {
  let collection =  db.collection("perfume");
  let results = await collection.find({})
    .toArray();
  res.json(results);
});

// Get a single perfume
router.get("/:id", async (req, res) => {
  let collection =  db.collection("perfume");
  let result = await collection.findOne({ 
    _id: new ObjectId(req.params.id) });
    res.json(result);
});

// Add a new perfum to the collection
router.post("/", async (req, res) => {
  let collection =  db.collection("perfume");
  let result = await collection.insertOne(req.body);
  res.json(result);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  let collection =  db.collection("perfume");
  let result = await collection.deleteOne({ 
    _id: new ObjectId(req.params.id) });
    res.json(result);


});

export default router;

/*



// Fetches the latest posts
router.get("/latest", async (req, res) => {
  let collection = await db.collection("posts");
  let results = await collection.aggregate([
    {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
    {"$sort": {"date": -1}},
    {"$limit": 3}
  ]).toArray();
  res.send(results).status(200);
});

// Update the post with a new comment
router.patch("/comment/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  const updates = {
    $push: { comments: req.body }
  };

  let collection = await db.collection("posts");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

*/

