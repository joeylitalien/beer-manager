/**
 * Main JS file to manage client side
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.2
 */

/**
 * Subscribes client to beer database so they have access
 */
Meteor.subscribe('beers');

/**
 * Sets session variables
 */
Session.set('sortBy', 'name');
Session.set('signInInvalid', false);
Session.set('addBeerInvalid', false);
