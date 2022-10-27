const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());

const Port = process.env.Port || 5000;

const courses = require('./Data/Course.json')

app.get('/', (req, res) => {
    res.send('sever paia gechi,yeeesss')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const singleItem = courses?.find(c => c.id == id)
    if (!singleItem) {
        res.send('No Data Found')
    }
    res.send(singleItem)
})




app.listen(Port, () => {
    console.log('port running completely', Port);
})