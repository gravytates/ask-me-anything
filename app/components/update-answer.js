import Ember from 'ember';

export default Ember.Component.extend({
  updateNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('updateNewAnswer', true);
    },
    updateAnswer(answer) {
      var full_date = new Date($.now());
      var dayDate = (full_date.getMonth() + 1) + "/" + full_date.getDate() + "/" + full_date.getFullYear();
      var params = {
         author: this.get('author') ? this.get('author') : "",
         content: this.get('content') ? this.get('content') : "",
         date: dayDate,
         question: this.get('question')
      };
      this.set('updateNewAnswer', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
