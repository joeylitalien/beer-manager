/**
 * Main JS File
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.0
 */

Meteor.publish('beers', function() {
  /**
   * Makes beer database available to client
   * @return database
   */
  return Beers.find({});
});

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'admin',
      password: 'admin'
    });
  }
});
