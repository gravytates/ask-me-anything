import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var full_date = new Date($.now());
      var dayDate = (full_date.getMonth() + 1) + "/" + full_date.getDate() + "/" + full_date.getFullYear();
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        notes: this.get('notes') ? this.get('notes') : "",
        date: dayDate,
        image: this.get('image') ? this.get('image') : "",
      }
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
