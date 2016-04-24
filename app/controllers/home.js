import Ember from 'ember';

export default Ember.Controller.extend({

who:"ACME-Foldable",
what:"ACME-Foldable",
where:"Here",
when:"Now",
why:"Because",
how:"Magic",



activate:function(){
	this._super.apply(this, arguments); // Call super at the beginning
	window.scrollTo(0,0);
}


});
