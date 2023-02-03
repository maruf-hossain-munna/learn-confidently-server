const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const allCourses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send(' Learn confidently server  is running');
})

app.get('/courses', (req, res) =>{
    res.send(allCourses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courses = allCourses.find(course => course.id == id);
    res.send(courses)
})


app.listen(port, () => {
    console.log('This server running on port', port);
})