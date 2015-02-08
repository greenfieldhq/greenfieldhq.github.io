exports.create = function(postmark){
  return function(req, res){
    postmark.send({
      "From": "info@greenfieldhq.com", 
      "To": "info@greenfieldhq.com", 
      "Subject": "Contact Us", 
      "TextBody": JSON.stringify(req.body)
    }, function(error, success) {
      if(error) {
        console.error("Unable to send via postmark: " + error.message);
        return;
      }
      console.info("Sent to postmark for delivery")
    });
    res.write('{"contacts":');
     res.write(JSON.stringify(req.body));
    res.end('}');
  }
};
