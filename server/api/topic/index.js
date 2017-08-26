'use strict';

var express = require('express');
var controller = require('./topic.controller');
var search = require('./search/topic.search');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/name/:name', search.findByName);
router.get('/favorites/:isFavorite', search.findFavorites);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
