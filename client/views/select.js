/**
 * Beer selection templates
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.2
 */

Template.selectionPage.helpers({
  /**
    * Computes the amount of beer selected
    * @returns total number of beers
    */
  beerAmount: function() {
    return Beers.find({checked: true}).count();
  },

  /**
    * Computes the amount of beers in the database
    * @returns total number of beers
    */
  beerTotal: function() {
    return Beers.find({}).count();
  }
 });

Template.beers.helpers({
  /**
   * Displays beer database
   * @returns {Beers}, the database filtered by {filter}
   */
  beers: function() {
    var filter = Session.get('sortBy');
    return Beers.find({}, {sort: {name: 1}});
    //return Beers.find({}, {sort: {filter: 1}});
  }
});

Template.addBeer.onRendered(function() {
  /**
   * Resets sign in alerts on render
   */
  Session.set('addBeerInvalid', false);
})

Template.addBeer.events({
  /**
   * Adds beer to the database
   */
  'submit form': function(e) {
    e.preventDefault();

    // Retrieves info by name
    var name    = $('[name="name"]').val(),
        brewery = $('[name="brewery"]').val(),
        type    = $('[name="type"]').val(),
        alcohol = $('[name="alcohol"]').val(),
        ibu     = $('[name="ibu"]').val(),
        priceSm = $('[name="priceSm"]').val(),
        priceMd = $('[name="priceMd"]').val(),
        priceLg = $('[name="priceLg"]').val();

    if (name && brewery && type && alcohol && priceSm && priceMd) {
      // Securely inserts them into the database
      Meteor.call('insertBeer', {
        name: name,
        brewery: brewery,
        type: type,
        alcohol: alcohol,
        ibu: ibu,
        priceSm: priceSm,
        priceMd: priceMd,
        priceLg: priceLg,
        checked: false,
        createdAt: new Date()
      });
      // Resets form fields for next entry
      e.target.reset();
      // Gets rid of alerts (if any)
      Session.set('addBeerInvalid', false);
    }
     else {
       Session.set('addBeerInvalid', true);
    }
  }
});

Template.addBeerAlert.helpers({
  /**
   * Checks for sign in alerts
   */
  invalidBeer: function() {
    return Session.get('addBeerInvalid');
  }
})

Template.beerItem.events({
  /**
   * Removes beer from database by ID
   */
  'click .delete-beer': function(event) {
    Meteor.call('removeBeer', this._id);
  },

  /**
   * Selects beer and marks it as selected in database
   */
  'click .toggle-beer': function(e) {
    var isChecked = e.target.checked;
    Meteor.call('toggleBeer', this._id, isChecked);
  }
})

Template.beerItem.helpers({
  /**
   * Verifies if beer is selected
   * @returns selection value (true or false)
   */
  isChecked: function() {
    return this.checked;
  }
});

Template.sortBeers.events({
  /**
   * Sorts beers according to user's choice
   */
  'click .sort-tag': function(e) {
    var filter = e.target.id.replace('sort-', '');
    Session.set('sortBy', filter);
  }
});
