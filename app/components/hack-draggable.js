import Ember from 'ember';

export default Ember.Component.extend({

didInsertElement:function(){

var self=this.$()
self.draggable({
drag: ()=> {

	this.set('x',self.position().left)
	this.set('y',self.position().top)
      }

})

}

});
