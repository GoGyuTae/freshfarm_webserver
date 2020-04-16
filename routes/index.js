var express = require('express');
var router = express.Router();
var models = require('../models');
var sequelize = require('sequelize');

router.get('/AG1/:id', function(req, res, next) {
  models.freshtable.findOne(
    {
      where: {
        machine_num : req.params.id
      },
      order: [
        ['id', 'DESC']
      ]
    })
    .then((freshtable) => {
      res.json(
        {
        temperature: freshtable.temperature,
        humidity: freshtable.humidity,
        g_humidity: freshtable.g_humidity,});
    });
});

/*router.get('/AG2', function(req, res, next) {
  models.freshtable.findOne(
    {
      order: [
        ['id', 'DESC'] // MN = 2
      ]
    })
    .then((freshtable) => {
      res.json(
        {
        temperature: freshtable.temperature,
        humidity: freshtable.humidity,
        g_humidity: freshtable.g_humidity,});
    });
});*/

router.post('/upload', function(req, res) {
  models.freshtable.create({
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    g_humidity: req.body.g_humidity,
    machine_num: req.body.machine_num,
  })
  .then((freshtable) => {
    res.json(
      {
      temperature: freshtable.temperature,
      humidity: freshtable.humidity,
      g_humidity: freshtable.g_humidity,});
  });
});
module.exports = router;