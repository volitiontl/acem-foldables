import Ember from 'ember';

export default Ember.Controller.extend({

activate:function(){
this._super.apply(this, arguments); // Call super at the beginning
window.scrollTo(0,0);
}


});
