/**
 * Main JS File
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.2
 */

Meteor.publish('beers', function() {
/**
 * Makes beer database available to client
 * @return database
 */
 return Beers.find({});
});
