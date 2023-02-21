const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')

// Getting all
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.json(recipes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
} catch (error) {
    res.status(404).json({message: error.message});
}
})

// Creating one
router.post('/', async (req, res) => {
  const recipe = new Recipe(req.body);
  try {
    const newRecipe = await recipe.save()
    res.status(201).json(newRecipe)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecipe = await Recipe.deleteOne({_id:req.params.id});
    res.status(200).json(deletedRecipe);
} catch (error) {
    res.status(400).json({message: error.message});
}
})


module.exports = router