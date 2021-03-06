/**
 * Meteor Iron Router settings
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.3
 */

/**
  * Ensures the user is signed in, redirects consequently
  */
mustBeSignedIn = function() {
  if (!Meteor.user() && !Meteor.loggingIn()) {
    Router.go('/');
  }
  else {
    this.next();
  }
};

/**
 * Assigns templates to paths
 */
Router.map(function() {
  this.route('signIn', {
    path: '/'
  });
  this.route('/selection', {
    template: 'selectionPage',
    onBeforeAction: mustBeSignedIn
  });
  this.route('/menu', {
    template: 'menuPage',
    onBeforeAction: mustBeSignedIn
  });
});
