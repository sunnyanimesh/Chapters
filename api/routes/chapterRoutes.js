'use strict';
module.exports = function(app){

var controller = require('../controllers/chapterController');


app.get('/api/chapters',controller.all);
app.post('/api/chapter/add',controller.add);
app.get('/api/chapter/delete',controller.delete);
app.post('/api/chapter/update',controller.update);
};