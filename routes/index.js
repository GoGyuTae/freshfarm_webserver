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

router.get('/AG2', function(req, res, next) {
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
});

router.post('/AP1', function(req, res) {
  const user_message = req.body.message;
  res.status(200).json(
    {
      "message" : user_message
      // 데이터 베이스에 데이터를 보냄
    }
  );
});

router.post('/AP2', function(req, res) {
  const user_message = req.body.message;
  res.status(200).json(
    {
      "message" : user_message
    }
  );
});

module.exports = router;