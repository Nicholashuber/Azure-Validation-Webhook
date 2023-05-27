const express = require('express');
const app = express();
//const port = 3000;

app.use(express.json());

// GET route
app.get('/', (req, res) => {
  res.sendStatus(200); // Return success status code (200)
});


app.post('/webhook', (req, res) => {
    const eventType = req.body[0].eventType;

    if (eventType === 'Microsoft.EventGrid.SubscriptionValidationEvent') {
      const validationCode = req.body[0].data.validationCode;
      const validationUrl = req.body[0].data.validationUrl;

      console.log('Received validation request. Validation code:', validationCode);

      // Echo back the validation code to the validation URL
      res.status(200).json({
        validationResponse: validationCode
      });
    } else {
      // Handle other events as needed
      // ...
      console.log('hit else statement /webhook');
      res.sendStatus(200); // Return success status code for other events
    }
  });




  app.post('/', (req, res) => {
    const eventType = req.body[0].eventType;

    if (eventType === 'Microsoft.EventGrid.SubscriptionValidationEvent') {
      const validationCode = req.body[0].data.validationCode;
      const validationUrl = req.body[0].data.validationUrl;

      console.log('Received validation request. Validation code:', validationCode);

      // Echo back the validation code to the validation URL
      res.status(200).json({
        validationResponse: validationCode
      });
    } else {
      // Handle other events as needed
      console.log('hit else statement / ');
      console.log(req);
      console.log(req.body);
      console.log(req.body[0]);
      res.sendStatus(200); // Return success status code for other events
    }
  });



// Start the server
app.listen(process.env.PORT || 8080, "0.0.0.0", () =>
  console.log("Listening on port 8080")
);
