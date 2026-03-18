import express from 'express';
import { userLogin, userSignup } from './controller.js';
import router from './route.js';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("App is working!")
})

app.use('/user', router)

app.use(express.json())

// Enviei um request usando o Postman
app.post('/users', (req, res) => {
    const { name, email } = req.body

    res.json({
        message: `User ${name} email ${email}`
    })
})

// Enviei um request usando o Postman
app.put('/users/:id', (req, res) => {
    const userId = req.params.id

    const { name, email } = req.body

    res.json({
        message: `User ${userId}, updated to ${name}, ${email}`
    })
})

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id

    res.json({
        message: `User with id: ${userId} is deleted successfuly`
    })
})

app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`)
})