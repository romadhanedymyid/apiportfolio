const express           = require('express'),
cors                    = require('cors'),
bodyParser              = require('body-parser'),
response                = require('./restapi'),
app                     = express(),
PORT                    = process.env.PORT || 5000,
baseUrl                 = '/'

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.disable('etag')

app.use(baseUrl + 'email', require('./routes/email'))

app.use('/', (req, res) => {
    return response.notFound([], res)
})

app.listen(PORT, () => console.log('Server is running'))