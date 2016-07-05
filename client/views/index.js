/**
 * Main JS file to manage client and server sides
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.1
 */

// Creates new beer database
Beers = new Mongo.Collection('beers');

if (Meteor.isClient) {
  Session.set('sortBy', 'name');
  Session.set('signInInvalid', false);
  Session.set('addBeerInvalid', false);
}

if (Meteor.isServer) {
}
