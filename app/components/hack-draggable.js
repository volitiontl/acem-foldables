import Ember from 'ember';

export default Ember.Component.extend({

didInsertElement:function(){


var self=this.$()
self.css("left",this.x||0)
self.css("top",this.y||0)
self.css('position',"absolute")
self.draggable({
containment:Ember.$('#container11')[0],
drag: ()=> {

	this.set('x',self.position().left)
	this.set('y',self.position().top)
      }

})

}

});
