import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    updateQuestion(question, params) {
      question.save();
      this.transitionTo('question');
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newA = this.store.createRecord('answer', params);
      var question = params.question;
      console.log(question);
      question.get('answers').addObject(newA);
      newA.save().then(function() {
        return question.save();
      })
      this.transitionTo('question');
    }
  }
});
