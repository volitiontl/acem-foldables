import Ember from 'ember';

export default Ember.Controller.extend({

products:[],
init:function(){

return Ember.$.getJSON('/products.json')
.then((a)=>{
	this.set('products',a)
})

}


});
