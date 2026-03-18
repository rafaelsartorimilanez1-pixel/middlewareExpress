import express from 'express';
import { userLogin, userSignup } from './controller.js';
import router from './route.js';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("App is working!")
})

app.use('/user', router)

app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`)
})