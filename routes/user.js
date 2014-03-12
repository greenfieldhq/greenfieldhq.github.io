exports.list = function(db) {
  return function(req, res) {
    db.collection('usercollection').find().toArray(function(err, items) {
      res.write('{"users":');
      res.write(JSON.stringify(items));
      res.end('}');
    });
  };
};
