/**
 * Meteor Iron Router settings
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.3
 */

/**
 * Beer collection
 */
Beers = new Meteor.Collection('beers');

/**
  * Ensures the user is signed in, redirects consequently
  */
mustBeSignedIn = function() {
  if (!Meteor.user()) {
    Router.go('/');
  } else {
    this.next();
  }
};

/**
 * Assigns templates to paths
 */
Router.route('/', {
  template: 'landing'
});
Router.route('/selection', {
  template: 'dashboard',
  onBeforeAction: mustBeSignedIn
});
Router.route('/menu', {
  template: 'menu',
  onBeforeAction: mustBeSignedIn
})
