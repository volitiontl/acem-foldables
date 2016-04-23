import Ember from 'ember';

export default Ember.Route.extend({


actions:{
    yell:function(abc){
	Ember.$("#"+abc)[0].scrollIntoView()
}

}

});
