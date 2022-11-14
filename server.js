const express = require('express');
const jsonServer = require('json-server');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api', jsonServer.router('db.json'));

app.use(express.static(__dirname+'/dist/meu-projeto'));

app.get('/*',(req,res) => {
    res.sendFile(__dirname+'/dist/meu-projeto/index.html')
});

app.listen(PORT, () => {
    console.log("Servidor iniciado na porta:" = PORT);
})
