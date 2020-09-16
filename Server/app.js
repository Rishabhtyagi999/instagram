const express = require('express')
const mongoose = require('mongoose')
const app = express()
const { MONGOURI } = require('./key')



mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

mongoose.connection.on('connected', () => {
    console.log("connected to mongo Database");
})

mongoose.connection.on('error', (err) => {
    console.log("Error in connecting with DataBase", err);
})

require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen("3000", () => {
    console.log("Server is running on 3000");
})


// MongoDB password
// eOkD5ru6PqJcUghM