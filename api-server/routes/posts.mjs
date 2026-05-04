import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get all perfumes
router.get("/", async (req, res) => {
  try {
    let collection = db.collection("perfume");
    let results = await collection.find({}).toArray();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new perfume
router.post("/", async (req, res) => {
  try {
    let collection = db.collection("perfume");
    let result = await collection.insertOne(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Add a review to a perfume
router.post("/review/:id", async (req, res) => {
  try {
    let collection = db.collection("perfume");

    const review = {
      _id: new ObjectId().toString(),
      rating: req.body.rating,
      comment: req.body.comment
    };

    await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $push: { reviews: review } }
    );

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Edit a review
//.prams i tried with a help of a friend whos developer and i learned from 
//https://angular.io/api/router/ActivatedRoute
//https://angular.io/guide/router
//https://www.w3schools.com/angular/angular_routing.asp
router.put("/review/:perfumeId/:reviewId", async (req, res) => {
  try {
    let collection = db.collection("perfume");

   let result = await collection.updateOne(
  {
    _id: new ObjectId(req.params.perfumeId),
    "reviews._id": req.params.reviewId
  },
  {
    $set: {
      "reviews.$.rating": req.body.rating,
      "reviews.$.comment": req.body.comment
    }
  }
);

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single perfume
router.get("/:id", async (req, res) => {
  try {
    let collection = db.collection("perfume");

    let perfume = await collection.findOne({
      _id: new ObjectId(req.params.id)
    });

    if (!perfume) {
      return res.status(404).json({ message: "Perfume not found" });
    }

    res.json(perfume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a perfume
router.delete("/:id", async (req, res) => {
  try {
    let collection = db.collection("perfume");

    let result = await collection.deleteOne({
      _id: new ObjectId(req.params.id)
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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

