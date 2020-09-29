
// Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')

// Configurando nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server.use(express.static("public")) // Tudo que for .use é configuração do servidor // Servidor, use a constante express para deixar a pasta public estática 

.get("/", pageLanding) // Dando a rota do index no servidor
.get("/study", pageStudy) // Dando a rota do study no servidor
.get("/give-classes", pageGiveClasses)// Dando a rota do give-classes no servidor


.listen(5005) // Porta do servidor