import express from 'express';
import { userLogin, userSignup } from './controller.js';
import router from './route.js';

const app = express();

const port = 3000;

app.use((req, res, next) => {
    console.log('Start')

    res.on('finish', () => {
        console.log("End")
    })

    next()
})

app.get('/', (req, res) => {
    console.log('Middle')
    res.send("App is working!")
})

app.get('/error', (req, res) => {
    throw new Error('This is an test error')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.send('Internal server error')
})

app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`)
})