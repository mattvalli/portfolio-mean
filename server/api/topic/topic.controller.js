/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/topics              ->  index
 * POST    /api/topics              ->  create
 * GET     /api/topics/:id          ->  show
 * PUT     /api/topics/:id          ->  upsert
 * PATCH   /api/topics/:id          ->  patch
 * DELETE  /api/topics/:id          ->  destroy
 */

'use strict';

const handler = require('../handlers');
import Topic from './topic.model';

// Gets a list of Topics
export function index(req, res) {
  return Topic.find().exec()
    .then(handler.respondWithResult(res))
    .catch(handler.handleError(res));
}

// Gets a single Topic from the DB
export function show(req, res) {
  return Topic.findById(req.params.id).exec()
    .then(handler.handleEntityNotFound(res))
    .then(handler.respondWithResult(res))
    .catch(handler.handleError(res));
}

// Creates a new Topic in the DB
export function create(req, res) {
  return Topic.create(req.body)
    .then(handler.respondWithResult(res, 201))
    .catch(handler.handleError(res));
}

// Upserts the given Topic in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Topic.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()
    .then(handler.respondWithResult(res))
    .catch(handler.handleError(res));
}

// Updates an existing Topic in the DB
export function patch(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Topic.findById(req.params.id).exec()
    .then(handler.handleEntityNotFound(res))
    .then(handler.patchUpdates(req.body))
    .then(handler.respondWithResult(res))
    .catch(handler.handleError(res));
}

// Deletes a Topic from the DB
export function destroy(req, res) {
  return Topic.findById(req.params.id).exec()
    .then(handler.handleEntityNotFound(res))
    .then(handler.removeEntity(res))
    .catch(handler.handleError(res));
}
