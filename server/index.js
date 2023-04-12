const express = require("express")
const app = express()

const db = require('./models')

app.use(express.json());

//Routers
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);



db.sequelize.sync().then(()=>{
    app.listen(4000, ()=> {
        console.log('server running on 4000');
    })
})
