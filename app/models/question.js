import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  notes: DS.attr(),
  image: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
