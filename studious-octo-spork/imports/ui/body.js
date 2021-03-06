import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';


import './contact.js';
import './dashboard.js';
import './users.js';
import './body.html';

Template.App_body.events({
  'click .signout': function () {
    // logout
    Meteor.logout();
    FlowRouter.go('/');
  }
});
