import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  dashboard: belongsTo(),
  bookmarks: hasMany()
});
