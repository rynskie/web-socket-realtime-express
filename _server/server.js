const express = require('express')
const bodyParser = require('body-parser')
const http = require('http');
const WebSocket = require('ws');
const path = require('path')
const clients = new Set();

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
const server = http.createServer(app)
const wss = new WebSocket.Server({server});
const port = 3000
const hostName = "127.0.0.1"



app.get('/', (req, res) => {
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


// Initialize WebSocket server


// WebSocket event handling
wss.on('connection', (ws) => {
    clients.add(ws);
    console.log('Klien terhubung');
    ws.send(JSON.stringify({
        type: 'connection',
        message: 'Terhubung ke server WebSocket'
    }));
    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            console.log('Diterima:', parsedMessage);
            clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'broadcast',
                        data: parsedMessage
                    }));
                }
            });
        } catch (error) {
            console.error('Error parsing pesan:', error);
        }
    });
    ws.on('close', () => {
        clients.delete(ws);
        console.log('Klien terputus');
    });
});

app.post('/send-notification', (req, res) => {
    const notification = req.body;
    
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
            type: 'notification',
            data: notification
            }));
        }
    });
    res.status(200).json({ message: 'Notifikasi berhasil dikirim' });
});



server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}`)
});



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