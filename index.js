import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.get((req, res) => {
    res.send("dioporc")
})


app.listen(PORT)
