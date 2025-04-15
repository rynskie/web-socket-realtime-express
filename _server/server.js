const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const port = 3000
const hostName = "127.0.0.1"

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    database: 'pi_medsos',
    username: 'root',
    password: 'JanganLupa321!',
    host: 'localhost',
    dialect: 'mysql'
})

app.get('/', async (req, res) => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    res.send({
        message: 'Home Page'
    })
})

app.get('/student', (req, res) => {
    res.send({
        message: 'this end point for fetching student data'
    })
})

app.post('/student', (req, res) => {
    res.send({
        message: 'this end point for store student data'
    })
})

app.delete('/student/:id', (req, res) => {
    res.send({
        message: 'this end point for delete student data'
    })
})

app.get('/student/:id', (req, res) => {
    res.send({
        message: 'this end point for fetch detail student data'
    })
})

app.put('/student/:id', (req, res) => {
    res.send({
        message: 'this end point for update student data'
    })
})

app.listen(port, () => console.log(`Server running at http://${hostName}:${port}`))

// app.use('/', () => {
//     routes.get('/student', (req, res) => {
//         res.status(200).json({
//             message: 'Student founded'
//         })
//     })
// })



// const { createServer } = require('http')

// const hostName = '127.0.0.1'
// const port = 3000

// const server = createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plan')
//     res.end("Hello Dunia!!")
// })

// server.listen(port, hostName, () => {
//     console.log(`Server running at http://${hostName}:${port}`)
// })