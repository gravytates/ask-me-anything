import Ember from 'ember';

export default Ember.Component.extend({
  updateNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('updateNewAnswer', true);
    },
    updateAnswer(answer) {
      var params = {
         author: this.get('author') ? this.get('author') : "",
         content: this.get('content') ? this.get('content') : "",
         question: this.get('question')
      };
      this.set('updateNewAnswer', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
