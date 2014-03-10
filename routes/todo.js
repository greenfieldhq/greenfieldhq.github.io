exports.list = function(db) {
  return function(req, res) {
    db.collection('todocollection').find().toArray(function(err, items) {
      res.write('{"todos":');
      res.write(JSON.stringify(items));
      res.end('}');
    });
  };
};

exports.update = function(db) {
  return function(req, res) {
    var id = req.params.id;
    db.collection('todocollection').updateById(id, req.body.todo, function(err, result) {
      res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
  };
};

exports.create = function(db) {
  return function(req, res) {
    db.collection('todocollection').insert(req.body.todo, function (err, result) {
      if (err) {
        res.send({msg: err});
      } else {
        res.json(result);
      }
    });
  };
};

exports.del = function(db) {
  return function(req, res) {
    var id = req.params.id;
    db.collection('todocollection').removeById(id, function(err, result) {
      res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
  };
};
