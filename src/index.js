//SEM USAR O EXPRESS

/*const http = require("http");

const hostname = "localhost";   //máscara para o IP

const port = 3333;

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain");
    res.end("Hello World!");
});

server.listen(port, hostname, () =>{
    console.log("SERVIDOR RODANDO...")
});*/

const express = require("express"); //Importando um módulo
const path = require("path");   //Importando um módulo para trabalhar com caminhos

const app = express();  //Trabalhando de fato com o módulo. Puxando um instância do express

const router = express.Router();

router.get("/", (req, res) => {

    res.sendFile(path.join(__dirname + "/pages/home.html"));

});

router.get("/contato", (req, res) => {

    res.sendFile(path.join(__dirname + "/pages/contato.html"));

});

app.use(router);

app.listen(process.env.PORT || 3333, () => {

    console.log("Servidor rodando...");

});


