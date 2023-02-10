const express = require('express');
const mongodatabase = require('mongodb').MongoClient;
const port = 4000;
const app = express();
const axios = require('axios');
const path = require('path');
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'static')))
app.get('/', (req, res) => {
    res.send('Hello you are welcome to my app')
})

app.get('/pages', async (req, res) => {

    try {
        await axios.get('https://jsonplaceholder.typicode.com/todos/1').then(todos => {
            res.json(todos.data)
        })
    }
    catch (error) {
        console.log(error, error)
    }
})

// mongodatabase.connect('').then(data => {
//     console.log('you have successfully connected to the database')
// }).catch(error => {
//     console.log('error connecting to the database', error)
// })

app.post('/information', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`port running on port ${port}`)
})