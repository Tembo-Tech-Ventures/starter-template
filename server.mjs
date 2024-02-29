import express from "express";
import Pusher from "pusher";

const app = express();
const port = process.env.PORT || 3001;

const pusher = new Pusher({
  appId: "1761467",
  key: "2a86acfd94038e2062dc",
  secret: "4c268ab3399f2e6700be",
  cluster: "eu",
  useTLS: true,
});

app.post("/message", (req, res) => {
  const message = req.body.message;
  pusher.trigger("chat", "message", { message });
  res.status(200).send("Message sent");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
