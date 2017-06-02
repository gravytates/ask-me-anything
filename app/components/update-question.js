import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    questionFormShow() {
      this.set('editQuestion', true);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        image: this.get('image') ? this.get('image') : "",
      }
      this.set('editQuestion', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
