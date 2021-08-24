// const express = require("express");
// const server = express();
// const notes = [
//   "I want to sleep",
//   "I want to eat",
//   "I want to make money",
//   "I want to rest",
//   "I want to buy ferarri",
//   "I want to buy shawarma and dash a beggaar",
//   "I want to read"
// ];
// server.get("/", (request, response) => {
//   response.send("<h1>Hello Villagers</h1>");
// });
// server.get("/api/notes", (request, response) => {
//   response.send({
//     notes,
//     total: notes.length,
//   });
// });
// server.get("/api/notes/:index", (request, response) => {
//   const index = parseInt(request.params.index);
//   response.send(notes[index]);
// });
// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require("express");
const server = express();
const persons = [
  "laja code",
  "muzzamil",
  "mujib"
];

server.get("/", (req, res) => {
  res.send("<h1>People</h1>");
});

server.get("/api/person", (req, res) => {
  res.send({
    persons,
    total: persons.length,
  })
})

server.get("/api/persons/index", (req, res) => {
  const index = parseInt(req.params.index);
  res.send(note[index]);
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
}
);