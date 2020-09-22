import Model, { belongsTo, hasMany, attr } from '@ember-data/model';

export default class CategoryModel extends Model {
  @belongsTo('dashboard') dashboard;
  @attr name;
  @attr color;
  @attr('boolean', { defaultValue: false }) collapsed;
  @attr('number') position;
  @hasMany('bookmark') bookmarks;
}
