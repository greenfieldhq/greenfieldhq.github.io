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
  };
};

exports.create = function(db) {
  return function(req, res) {
    var collection = db.get('todocollection');
    // Submit to the DB
    collection.insert(req.body.todo, function (err, doc) {
      if (err) {
        res.send("There was a problem adding the information to the database.");
      }
      else {
        res.json(doc);
      }
    });
  };
};

exports.del = function(db) {
  return function(req, res) {
    var i = 0;
  };
};
