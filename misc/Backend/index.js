const express = require('express');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`Standard Get request. Welcome User: ${user}, Password: ${password}`);
});

app.post("/register", (req, res) => {
    let {user, password} = req.body;
    res.send(`Standard Post request. Welcome User: ${user}, Password: ${password}`);
});







app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});