/**
 * Secure Database Modifications
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.0
 */

/**
 * Beer database
 */
Beers = new Meteor.Collection('beers');

Meteor.methods({
  insertBeer: function(beer) {
    Beers.insert(beer);
  },
  removeBeer: function(id) {
    Beers.remove(id);
  },
  toggleBeer: function(id, val) {
    Beers.update(id, val);
  }
});
