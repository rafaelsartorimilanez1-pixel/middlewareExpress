import express from 'express';
import { userLogin, userSignup } from './controller.js';
import router from './route.js';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("App is working!")
})

app.use('/user', router)

app.post('/users', express.json(), (req, res) => {
    const { name, email } = req.body

    res.json({
        message: `User ${name} email ${email}`
    })
})

app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`)
})