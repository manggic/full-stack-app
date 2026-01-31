import express from "express"
import cors from "cors"
const app = express()


app.use(express.json())
app.use(cors())

app.get('/api/message', (req, res) => {
    res.status(200).json({message:"Running this full stack app with docker compose"})
})

const PORT = 4000
app.listen(PORT, () => {
  console.log('APP is running at PORT ', PORT)
})
