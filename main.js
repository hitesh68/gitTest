const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({
    secret : 'test'
}))

const port = 5000
app.listen(port,() => {
    console.log("Server is up at "+port)
})
// console.log(express)