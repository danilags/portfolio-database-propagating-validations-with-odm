const monggo = require('mongoose');
const Schema = monggo.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Event title can not empty'],
    unique: true
  },
  date: {
    type: Date,
    required: [true, 'date can not empty']
  },
  email: {
    type: String,
    validate: {
      validator: function(params) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(params);
      },
      message: 'Email is not valid !'
    },
    required: [true, 'Email can not empty']

  }
})

const Event = monggo.model('Event', eventSchema);

module.exports = Event;
