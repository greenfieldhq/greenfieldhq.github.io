exports.list = function(db) {
  return function(req, res) {
    var collection = db.get('todocollection');
    collection.find({},{},function(e,docs){
      //res.json(docs);
      res.write('{"todos":');
      res.write(JSON.stringify(docs));
      res.end('}');
    });
  };
};

exports.update = function(db) {
  return function(req, res) {
    var i = 0;
    debugger;
  };
};

exports.create = function(db) {
  return function(req, res) {
    var title = req.body.todo.title;
    var isCompleted = req.body.todo.isCompleted;
    var collection = db.get('todocollection');
    // Submit to the DB
    collection.insert({
      "title" : title,
      "isCompleted" : isCompleted
    }, function (err, doc) {
      if (err) {
        res.send("There was a problem adding the information to the database.");
      }
      else {
        res.json(doc);
      }
    });
  };
};

exports.delete = function(db) {
  return function(req, res) {
    var i = 0;
    debugger;
  };
};
