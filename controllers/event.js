const Event = require('../models/event')
const validate = require('../helpers/emailValidasi');

let addEvent = (req ,res) => {
    let newEvent = new Event({
      title: req.body.title,
      date: new Date(req.body.date),
      email: req.body.email
    })
    newEvent.save((err) => {
      if(err) {
        if(err.errors) {
          res.send({error: err, success: false});
        } else {
          res.send({error:"Event is already exist, coy!", success:""})
        }
      } else {
        res.send({error:"", success: 'Input data success'})
      }
    })
}

let getAll = (req, res) => {
  Event.find({}, (err,results) => {
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

let eventEdit = (req ,res) => {
  Event.findOneAndUpdate({_id:req.params.id},{
      title: req.body.title,
      email: req.body.email,
      date: req.body.date
    },(err, result) => {
    if(err) {
      res.send(err)
    } else {
      res.send(result);
    }
  })
}

let deleteEvent = (req, res) => {
  Event.findOneAndRemove({_id:req.params.id},(err) => {
    if(err) {
      res.send(err.message);
    } else {
      res.send({msg: "Data success deleted !"})
    }
  })
}



module.exports = {
  addEvent,
  getAll,
  eventEdit,
  deleteEvent
}
