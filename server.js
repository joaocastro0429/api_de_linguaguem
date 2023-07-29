
import express from 'express'

const app = express()
app.use(express.json())
const linguaguem = [
    {
        id: 1,
        name: "php",
        tipo: "back-end"
    },
    {
        id: 2,
        name: "java",
        tipo: "backend",

    },
    {
        id: 3,
        name: "javascript",
        tipo: "front-end"
    }
]

app.get("/users", (req, res) => {
    res.statusCode = 200
    return res.json(linguaguem)

})


app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const index = linguaguem.find(index => index.id == id)

    if (!index) {
        res.status(400).json({ message: "usuario invalido" })
    }

    res.json(index)


})

app.post("/users", (req, res) => {
    let { id, nome, tipo } = req.body




    linguaguem.push({
        id: 4,
        nome,
        tipo


    })

    res.status(201).send()

})

app.delete("/users/:id", (req, res) => {

    const id = parseInt(req.params.id)
    const idIndex = linguaguem.findIndex(index => index.id == id)

    if (idIndex > -1) {
        linguaguem.splice(idIndex, 1)
    }

    res.json({ message: "deletado com sucesso" })


})

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const { name, tipo } = req.body




    const idIndex = linguaguem.findIndex(index => index.id == id)

    if (idIndex > -1) {
        linguaguem[idIndex].name = name
        linguaguem[idIndex].tipo = tipo

    }
    res.send("atualizado com sucesso")


})



app.listen(3333, () => console.log("running is server"))

