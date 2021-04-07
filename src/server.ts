require('dotenv-safe').config();
const PORT = process.env.PORT;
const { app } = require("./app");

app.listen(PORT, ()=>{
    console.log(`app listening at port ${PORT}`)
})