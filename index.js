const express           = require('express'),
cors                    = require('cors'),
bodyParser              = require('body-parser'),
response                = require('./restapi'),
app                     = express(),
baseUrl                 = '/'

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.disable('etag')

app.use(baseUrl + 'email', require('./routes/email'))

app.use('/', (req, res) => {
    return response.notFound([], res)
})

app.listen(4000, () => console.log('Server is running'))