import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      if (confirm("You're about to delete this question")) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
