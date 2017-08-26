/**
 * Using Spring Data REST search approach
 * GET     /api/topics/search/findByName?name       ->  show
 */

'use strict';

import Topic from '../topic.model';
var handler = require('../../handlers');


// Gets a
export function findByName(req, res) {
  console.log('/api/topics/search/name/:name');
  Topic.find({ ui_id: req.params.name })
  .then(handler.handleEntityNotFound(res))
  .then(handler.respondWithResult(res))
  .catch(handler.handleError(res));
}

export function findFavorites(req, res) {
  console.log('/api/topics/search/favorites');
  Topic.find({isFavorite: req.params.isFavorite })
  .then(handler.handleEntityNotFound(res))
  .then(handler.respondWithResult(res))
  .catch(handler.handleError(res));
}
