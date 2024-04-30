// implement your API here
const express = require('express')

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.send('Hello World!')
})

const doggies = [
    {
        id: 1,
        name: 'Bitsy',
    },
    {
        id: 2,
        name: 'Miska',
    }
]

const getId = () => ++id

server.get('/doggies', (req, res) => {
    res.status(200).json(doggies)
})
server.get('/doggies/:id', (req, res) => {
    res.status(200).json(doggies.find(dog => dog.id == req.params.id))
})
server.post('/doggies', (req, res) => {
    doggies.push({id: getId, name: req.body.name })
    res.status(201).json(doggies)
})
server.put('/doggies/:id', (req, res) => {
    doggies = doggies.map(dog => dog.id === req.params.id ? {...dog, name: req.body.name} : dog)
    res.status(200).json(doggies)
})
server.delete('/doggies/:id', (req, res) => {
    doggies = doggies.filter(dog => dog.id === req.params.id)
    res.status(200).json(doggies)
})

server.listen(8000, () => console.log('API running on port 8000'))