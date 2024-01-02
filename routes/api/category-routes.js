const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
     // find all categories with their associated products
     const categories = await Category.findAll({
       include: [
         {
           model: Product,
           required: true
         }
       ]
     });
 
     // send the categories and their associated products as a JSON response
     res.status(200).json(categories);
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
 });

 router.get('/:id', async (req, res) => {
  try {
     // find one category by its `id` value
     // be sure to include its associated Products
     const category = await Category.findByPk(req.params.id, {
       include: [Product]
     });
 
     if (!category) {
       res.status(404).json({ message: 'No category found with this id!' });
       return;
     }
 
     res.status(200).json(category);
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
 });

router.post('/', (req, res) => {
  // create a new category
  router.post('/', async (req, res) => {
    try {
       // create a new category
       const category = await Category.create(req.body);
       res.status(201).json(category);
    } catch (error) {
       res.status(500).json({ error: error.message });
    }
   });
});

router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!category) {
      res.status(404).json({ error: 'No category found with this id.' });
    } else {
      res.status(200).json(category);
    }
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
});

router.delete('/:id', async (req, res) => {
  try {
     // delete a category by its `id` value
     const category = await Category.destroy({
       where: {
         id: req.params.id,
       },
     });
 
     if (!category) {
       res.status(404).json({ error: 'No category found with this id.' });
     } else {
       res.status(200).json(category);
     }
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
 });

module.exports = router;
