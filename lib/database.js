/**
 * Secure Database Modification
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.1
 */

/**
 * Beer database
 */
Beers = new Meteor.Collection('beers');

Meteor.methods({
  /**
    * Inserts beer in database
    */
  insertBeer: function(beer) {
    Beers.insert(beer);
  },
  /**
    * Removes beer from database
    */
  removeBeer: function(id) {
    Beers.remove(id);
  },
  /**
    * Marks beer as checked inside database
    */
  toggleBeer: function(id, isChecked) {
    Beers.update(id, {$set: {checked: isChecked}});
  }
});
