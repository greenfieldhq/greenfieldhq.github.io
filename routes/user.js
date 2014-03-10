/*
 * GET users listing.
 */
exports.list = function(db) {
  return function(req, res) {
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
      res.json(docs);
      //res.render('userlist', {
      //  "userlist" : docs
      //});
    });
  };
};
