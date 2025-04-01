const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { IP_SERVER,
     DB_PORT,
      DB_NAME,
       DB_USER,
       DB_PASSWORD
} = require('./Constantes');

const donasRoutes = require('./routes/Donas.routes')



const app = express();
const port = process.env.PORT || 6000

app.use(bodyParser.json());
app.use(cors());
app.use('/api', donasRoutes);

const uri= `mongodb://${IP_SERVER}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(uri)
.then(() => console.log('Conectado a la base de datos'))
.catch(err => console.log(err))

app.listen(port, ()=>{
    console.log(`Servidor ejecutado: https://${IP_SERVER}:${port}/api`)
})