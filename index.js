const express = require("express");
const server = express();
const notes = [
  "I want to sleep",
  "I want to eat",
  "I want to make money",
  "I want to rest",
  "I want to buy ferarri",
  "I want to buy shawarma and dash a beggaar",
];
server.get("/", (request, response) => {
  response.send("<h1>Hello Villagers</h1>");
});
server.get("/api/notes", (request, response) => {
  response.send({
    notes,
    total: notes.length,
  });
});
server.get("/api/notes/:index", (request, response) => {
  const index = parseInt(request.params.index);
  response.send(notes[index]);
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});