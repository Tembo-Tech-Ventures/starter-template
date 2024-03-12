const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.post("/trigger-event", (req, res) => {
  const { message } = req.body;

  if (message.includes("important")) {
    console.log("Important message received:", message);
  } else {
    // Handle other types of messages
    console.log("Regular message received:", message);
  }

  res.status(200).json({ message: "Event triggered successfully" });
});

app.listen(PORT, function () {
  console.log("Server is running on port", this.address().port);
});
