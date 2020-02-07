const express = require('express')

const app = express(),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	cors = require('cors')

//setting up env
require('dotenv').config()

const port = process.env.PORT

//connect to db
mongoose
	.connect(process.env.MONGO_DB, {
		useNewUrlParser: true,
	})
	.then(() => console.log('mongodb connected'))
	.catch(err => console.log(err))

//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static('public'))


//importing routes
const lotsRoute = require('./routes/lots')

//setting routes
app.use('/api', lotsRoute)


//handling 404 page
app.use((req, res) => {
	res.sendFile(__dirname + '/public/error.html')
})

app.listen(port, () =>
	console.log(`server is running at http://localhost:${port}`)
)
