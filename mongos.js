const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('please provide the password as an argument:mongo.js <pasword>')
//   process.exit(1)
// }

// const password = process.env.password;
// const url = process.env.MONGODB_URI

const url = 'mongodb+srv://Mansur:mansur@cluster0.ugm04.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
module.exports = mongoose.model('Person', personSchema)