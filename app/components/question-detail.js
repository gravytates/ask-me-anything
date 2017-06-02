import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
    deleteQuestion(question) {
      if (confirm("You're about to delete this question")) {
        this.sendAction('destroyQuestion', question);
      }
    },
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    },
    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
