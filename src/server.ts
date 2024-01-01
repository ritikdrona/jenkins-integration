import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.json({ status: "UP" })
})

const port = process.env.PORT ?? 4000
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
