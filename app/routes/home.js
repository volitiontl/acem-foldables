import Ember from 'ember';

export default Ember.Route.extend({

activate: function() {
    this._super();
    window.scrollTo(0,0);
  },

actions:{
    yell:function(abc){
	Ember.$("#"+abc)[0].scrollIntoView()
}

}

});
