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
