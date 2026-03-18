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

// Enviei um request usando o Postman
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id

    res.json({
        message: `User with id: ${userId} is deleted successfuly`
    })
})

// Rota com multiplos parametros

app.get('/things/:name/:id', (req, res) => {
    const { name, id } = req.params
    //id([0-9]{5} o id deve conter exatemente 5 digitos)
    if (!/^\d{5}$/.test(id)) {
        return res.status(400).json({ error: 'ID must be exactly 5 digits' });
    }
    res.json({
        id, name
    })
})


app.get('/*any', (req, res) => {
    res.send('sorry, this is an invalur URL.')
})


app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`)
})