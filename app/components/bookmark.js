import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookmarkComponent extends Component {
  @tracked editButtonsActive = false;
  @tracked displayDeleteModal = false;

  @action
  toggleEditButtons(){
    this.editButtonsActive = !this.editButtonsActive;
  }

  @action
  delete(){
    this.args.bookmark.destroyRecord();
  }
}
