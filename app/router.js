import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('demo');
  this.route('bom');
  this.route('activity');
  this.route('statedebug');
  this.route('steps');
  this.route('products');
});

export default Router;
