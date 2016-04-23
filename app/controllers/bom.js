import Ember from 'ember';

export default Ember.Controller.extend({

items:[
{name:"panel",count:100,total:100},
{name:"connectors",count:400,total:400},
{name:"ductable roles",count:40,total:200}


],

total:Ember.computed('items',function(){
	var list=this.items
	var total=0;
	for(var i=0;i<list.length;i++){
		total+=list[i].total
	}
	return total
}),


});
