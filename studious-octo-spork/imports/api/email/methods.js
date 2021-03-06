import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Email } from 'meteor/email';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidationError } from 'meteor/mdg:validation-error';


export const sendTestEmail = new ValidatedMethod({
  // DOES NOT WORK WITH WRONG EMAIL INFO
  name: 'email.sendTestEmail',

  validate: new SimpleSchema({
    name: { type: String },
    email: {
        type: String,
        regEx: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    comment: { type: String }
  }).validator(),

  run (data) {
    var bodytext = "Someone '" + data.name + "' with email: " + data.email + " sent you the comment: " + data.comment + " !";
    Email.send({
      from: "", // form web site email (website@gmail.com)
      to: "",   // to admin email (admin@something.com)
      subject: "Subject test",
      text: bodytext
    });
  },
});
