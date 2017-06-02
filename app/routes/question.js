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
      var answerDeletions = question.get('answers').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answerDeletions).then(function(){
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newA = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newA);
      newA.save().then(function() {
        return question.save();
      })
      this.transitionTo('question');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    },
    updateAnswer(answer, params) {
      answer.save();
      this.transitionTo('question');
    }
  }
});
