'use strict';

var mongoose = require('mongoose');
var chapter = mongoose.model('chapter');

exports.add = function(req,res){
	  var new_chapter = new chapter(req.body);
  new_chapter.save(function(err, chap) {
    if (err)
      res.json({error: 'true', message: err });
    res.json({error: 'false', message: 'ok', data:chap._id});
  });
};


exports.delete = function(req,res){
	 chapter.remove({
    _id: req.query.chapterid
  }, function(err, chap) {
    if (err)
      res.send(err);
    res.json({ isDeleted : req.query.chapterid ,message: 'Task successfully deleted' });
  });
};

exports.update = function(req,res){
  chapter.findOneAndUpdate({_id: req.query.chapterid}, req.body, {new: true}, function(err, chap) {
    if (err)
      res.send(err);
    res.json(chap);
  });
};

exports.all = function(req,res){
	chapter.find(function(err,chap){
    if(err)
    	res.send(err);
    res.json(chap);
	});
};