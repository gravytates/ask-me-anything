import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(params) {
      var newQ = this.store.createRecord('question', params);
      newQ.save();
      this.transitionTo('index');
    }
  }
});
