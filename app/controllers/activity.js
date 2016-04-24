import Ember from 'ember';

export default Ember.Controller.extend({

name:"default",
activities:[
{name:"sleeping"},
{name:"eating"},
{name:"space hiking"},
{name:"space painting"},
{name:"space experiments"}

],

actions:{
	add:function(){
	this.get('activities').pushObject({
		name:this.name
	})
	
	}

}

});
