import Model, { belongsTo, attr } from '@ember-data/model';

export default class BookmarkModel extends Model {
  @belongsTo('category') category;
  @attr url;
  @attr name;
  @attr icon;
  @attr description;
}
