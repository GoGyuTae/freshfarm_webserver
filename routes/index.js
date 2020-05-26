var express = require('express');
var router = express.Router();
var models = require('../models');
var sequelize = require('sequelize');

router.get('/ANgetRecentData/:id', function(req, res, next) {
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

router.get('/ARgetRecentData/:id', function(req, res, next) {
  models.freshsettable.findOne(
    {
      where: {
        machine_num : req.params.id
      },
      order: [
        ['id', 'DESC']
      ]
    })
    .then((freshsettable) => {
      res.json(
        {
        illuminatation : freshsettable.illuminatation,
        temperature: freshsettable.temperature,
        humidity: freshsettable.humidity,
        g_humidity: freshsettable.g_humidity,});
    });
});


router.post('/ARuploadData', function(req, res) {
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
      g_humidity: freshtable.g_humidity,
      machine_num: freshtable.machine_num,});
  });
});

router.post('/ANuploadData', function(req, res) {
  models.freshsettable.create({
    illuminatation : req.body.illuminatation,
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    g_humidity: req.body.g_humidity,
    machine_num: req.body.machine_num,
  })
  .then((freshsettable) => {
    res.json(
      {
      illuminatation : freshsettable.illuminatation,
      temperature: freshsettable.temperature,
      humidity: freshsettable.humidity,
      g_humidity: freshsettable.g_humidity,
      machine_num: freshsettable.machine_num,});
  });
});

module.exports = router;