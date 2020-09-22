import Model, { attr, hasMany } from '@ember-data/model';

export default class DashboardModel extends Model {
  @attr name;
  @hasMany('category') categories;
}
