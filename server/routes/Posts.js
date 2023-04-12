const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll(); //select all element from table Posts and set it equal to listOfPosts
  res.json(listOfPosts);       //return listOfPosts
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
