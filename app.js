const express = require("express")
const config = require("config")
const userRouter = require("./routes/user.routes")
const postRouter = require("./routes/post.routes")



const PORT = config.get("port") || 5000

const app = express()

app.use(express.json())
app.use("/api", userRouter)
app.use("/api", postRouter)

app.listen(PORT, () => console.log("started successfully on port", PORT))