import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("App is working!")
})

app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`)
})