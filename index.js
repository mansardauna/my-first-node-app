const express = require("express");
const server = express();
server.use(express.json());
server.use(express.static('build'))
const morgan = require('morgan');

morgan.token('custom', (req) => {
  return JSON.stringify(req.body)
})
server.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :custom'
  )
)

const cors = require('cors');
server.use(cors());

const persons =
  [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    },
    {
      "id": 5,
      "name": "Mary Poppe",
      "number": "39-6423122"
    }
  ]

server.get("/api/persons", (req, res) => {
  res.json(persons)
})

server.get("/api/persons/index", (req, res) => {
  const index = parseInt(req.params.index);
  res.send(note[index]);
});

server.delete("./api/person/id", (req, res) => {
  const id = Number(req.params.id)
  person = persons.filter(person.id !== id)

  res.status(204).end()
});



const PORT = process.env.PORT || 3030
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
