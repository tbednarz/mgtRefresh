const http = require('http');
const path = require('path')
const express = require('express')

const app = express();
const host = '127.0.0.1';
const port = process.env.PORT || 3000;

const publicDir = path.join(__dirname, "../public")

app.set("view engine", "hbs")
app.use(express.static(publicDir))

app.get("", (req, res) => {
    res.render("index", {
        title: "MTG REFRESH",

    })
})



app.listen(port, () => {
    console.log(`server running at port: ${port}`)
})

