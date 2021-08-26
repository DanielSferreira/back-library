const express = require('express')
const app = express()
const port = 3000

app.use('/', require('./routes/user'))
app.use('/books', require('./routes/books'))

app.listen(port,
  () => console.log('Vamos nessa parceiro, Go Go Go!')
)
