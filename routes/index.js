const routes = require('express').Router();
const event = require('../controllers/event');

//get event
// routes.get('/events', (req, res) => {
//   res.send('events/index',{error:"",success:""});
// })

routes.get('/events', event.getAll);

routes.post('/events', event.addEvent);

routes.put('/events/:id', event.eventEdit);

routes.delete('/events/:id', event.deleteEvent);

module.exports = routes;
