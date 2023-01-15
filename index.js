import express, { json } from "express"
import { Data } from "./data.js"

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        data : "this is an api using express js"
    })
})

app.get('/person', (req, res) => {
    res.json(Data)
})

app.get('/person/:id', (req, res) => {
    const i = req.params.id
    const id = parseInt(i)
    if (id > 10) return res.status(404).json({message : `data with id ${id} not found`})
    const data = Data.find(c => c.id === id)
    console.log(Data)
    res.json({data})
})

app.post('/person', (req, res) => {
    res.status(201).json(req.body)
})

app.delete('/person/:id', (req, res) => {
    const id = req.params.id
    res.json({message : `data with id = ${id} deleted successfully`})
})

app.put('/person/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    data["id"] = id
    res.json(req.body)
})

app.patch('/person/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if (id > 10) return res.sendStatus(404).json({message : `data with id ${id} not found`})
    const dat = req.body
    const DataCopy = JSON.parse(JSON.stringify(Data))
    const data = DataCopy.find(c => c.id === id)
    Object.assign(data, dat)
    res.json(data)
})

app.listen(2000, () => console.log("running on http://localhost:2000"))