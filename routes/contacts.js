const express = require('express');
const postmark = require('postmark');

const postmarkClient = new postmark.Client(process.env.POSTMARK);
const router = express.Router();

router.post('/', function(req, res, next) {
  postmarkClient.sendEmail({
    'From': 'info@greenfieldhq.com',
    'To': 'info@greenfieldhq.com',
    'Subject': 'Contact Us',
    'TextBody': JSON.stringify(req.body)
  }, (error, success) => {
    if (error) {
      console.error(`Unable to send via postmark: ${error.message}`);
      return;
    }

    console.info('Sent to postmark for delivery')
  });
});

module.exports = router;
