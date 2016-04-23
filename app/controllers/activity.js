import Ember from 'ember';

export default Ember.Controller.extend({

name:"default",
activities:[],

actions:{
	add:function(){
	this.get('activities').pushObject({
		name:this.name
	})
	
	}

}

});
