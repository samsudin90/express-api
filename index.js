import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.json({
        data : "this is an api using express js"
    })
})

app.listen(2000, () => console.log("running on http://localhost:2000"))