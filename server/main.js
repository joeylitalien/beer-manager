//import { Meteor } from 'meteor/meteor';

Meteor.publish('beers', function() {
  return Beers.find({});
});

Meteor.startup(() => {
});
