/**
 * Beer selection display
 * @author Joey Litalien <joey.litalien@gmail.com>
 * @version 1.0.0
 */

 Template.selectedBeer.helpers({
   /**
    * Displays selected beers database
    * @returns {Beers}, the database sorted in alphabetical order
    */
    selectedBeer: function() {
      return Beers.find({checked: true});
    }
});

Template.registerHelper('inc', function (index) {
    index++;
    return index;
});
