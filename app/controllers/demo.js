import Ember from 'ember';

export default Ember.Controller.extend({

list:[],

products:Ember.inject.controller('products'),

actions:{
   add:function(){
	this.get('list').pushObject({name:1,x:0,y:0})

   }
}


});
