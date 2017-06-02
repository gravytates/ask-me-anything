import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        image: this.get('image') ? this.get('image') : "",
      }
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
