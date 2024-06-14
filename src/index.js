const express = require('express')
const app = express()
const port = 3000

const DBconeccao =  require('./database/conect')
DBconeccao()
app.use(express.json())




app.listen(port, () =>{
    console.log(`tudo rodando na porta ${port}`)
})