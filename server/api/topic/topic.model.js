'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './topic.events';

var TopicSchema = new mongoose.Schema({
  ui_id: String,
  name: String,
  info: String,
  description: String,
  version: String,
  iconURL: String,
  active: Boolean,
  isFavorite: Boolean
});

registerEvents(TopicSchema);
export default mongoose.model('Topic', TopicSchema);
