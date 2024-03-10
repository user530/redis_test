const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Test endpoints to get some photos to test caching
router.get('/photos', async (req,res) => {
  const albumId = req.query.albumId;
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/photos',
    {params: {albumId}}
  );

  res.json(data);
});

router.get('/photos/:id', async (req,res) => {
  const { id } = req.params;

  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/photos/' + id
  );

  res.json(data);
})

module.exports = router;
