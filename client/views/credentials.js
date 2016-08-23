/**
 * Credentials templates (sign in, sign out, etc.)
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.1.0
 */

 Template.signIn.onRendered(function() {
   /**
    * Resets sign in alerts on render
    */
   Session.set('signInInvalid', false);
 });

 Template.signIn.events({
   /**
    * Signs user in
    */
   'submit form': function(e) {
      e.preventDefault();

      // Retrieves user info
      var usr = $('[name=username]').val(),
          pwd = $('[name=password]').val();

      // Attempts login
      Meteor.loginWithPassword(usr, pwd, function(err) {
        if (err) {
          Session.set('signInInvalid', true);
        }
        else {
          Router.go('/selection');
        }
      });
    }
 });

 Template.signInAlert.helpers({
   /**
    * Checks for sign in alerts
    */
   invalidCredits: function() {
     return Session.get('signInInvalid');
   }
 })

 Template.signOut.events({
   /**
    * Signs user out
    */
   'click .signOut': function(e) {
      e.preventDefault();

      // Signs out and go back home
      Meteor.logout();
      Router.go('/');
   }
 })
