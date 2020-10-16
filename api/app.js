const mongoose = require('mongoose'); //Traduz os dados do banco pra objeto JavaScript
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

require('./models/home');
const Home = mongoose.model('Home')

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Qualquer site poderá fazer requisições
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
})

app.use(
    '/file', // Ocultando a rota das imagens
    express.static(path.resolve(__dirname, 'tmp', 'uploads'))
);

mongoose.connect('mongodb://localhost/celke', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão estabelecida com sucesso");
}).catch((err) => {
    console.log("Erro: Deu ruim -> " + err);
})
 
let portUmFileName;
let portDoisFileName;
let portTresFileName;
let portQuatroFileName;
let portCincoFileName;
let portSeisFileName;
let exFileName;

app.get('/home', (req, res) => {
    Home.findOne({}).then((home) => {
        
        if (home.portUmFileName) {
            portUmFileName = "http://localhost:8080/file/home/" + home.portUmFileName;
        } else {
            portUmFileName = "http://localhost:8080/file/home/foto.jpg";  
        }

        if (home.portDoisFileName) {
            portDoisFileName = "http://localhost:8080/file/home/" + home.portDoisFileName;
        } else {
            portDoisFileName = "http://localhost:8080/file/home/foto.jpg";  
        }

        if (home.portTresFileName) {
            portTresFileName = "http://localhost:8080/file/home/" + home.portTresFileName;
        } else {
            portTresFileName = "http://localhost:8080/file/home/foto.jpg";  
        }

        if (home.portQuatroFileName) {
            portQuatroFileName = "http://localhost:8080/file/home/" + home.portQuatroFileName;
        } else {
            portQuatroFileName = "http://localhost:8080/file/home/foto.jpg";  
        }

        if (home.portCincoFileName) {
            portCincoFileName = "http://localhost:8080/file/home/" + home.portCincoFileName;
        } else {
            portCincoFileName = "http://localhost:8080/file/home/foto.jpg";  
        }

        if (home.portSeisFileName) {
            portSeisFileName = "http://localhost:8080/file/home/" + home.portSeisFileName;
        } else {
            portSeisFileName = "http://localhost:8080/file/home/foto.jpg";  
        }
        
        if (home.exFileName) {
            exFileName = "http://localhost:8080/file/home/" + home.exFileName;
        } else {
            exFileName = "http://localhost:8080/file/home/foto.jpg";  
        }

        return res.json({
            home,
            portUmFileName,
            portDoisFileName,
            portTresFileName,
            portQuatroFileName,
            portCincoFileName,
            portSeisFileName,
            exFileName,
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado!"
        })
    })
})

app.get('/homeapp', (req, res) => {
    Home.findOne({}, `_id portUmFileName portUmTitulo portUmSubTitulo 
    portDoisFileName portDoisTitulo portDoisSubTitulo 
    portTresFileName portTresTitulo portTresSubTitulo 
    portQuatroFileName portQuatroTitulo portQuatroSubTitulo 
    portCincoFileName portCincoTitulo portCincoSubTitulo 
    portSeisFileName portSeisTitulo portSeisSubTitulo`).then((home) => {
        
        if (home.portUmFileName) {
            portUmFileName = "http://192.168.25.183:8080/file/home/" + home.portUmFileName;
        } else {
            portUmFileName = "http://192.168.25.183:8080/file/home/foto.jpg";  
        }

        if (home.portDoisFileName) {
            portDoisFileName = "http://192.168.25.183:8080/file/home/" + home.portDoisFileName;
        } else {
            portDoisFileName = "http://192.168.25.183:8080/file/home/foto.jpg";  
        }

        if (home.portTresFileName) {
            portTresFileName = "http://192.168.25.183:8080/file/home/" + home.portTresFileName;
        } else {
            portTresFileName = "http://192.168.25.183:8080/file/home/foto.jpg";  
        }

        if (home.portQuatroFileName) {
            portQuatroFileName = "http://192.168.25.183:8080/file/home/" + home.portQuatroFileName;
        } else {
            portQuatroFileName = "http://192.168.25.183:8080/file/home/foto.jpg";  
        }

        if (home.portCincoFileName) {
            portCincoFileName = "http://192.168.25.183:8080/file/home/" + home.portCincoFileName;
        } else {
            portCincoFileName = "http://192.168.25.183:8080/file/home/foto.jpg";  
        }

        if (home.portSeisFileName) {
            portSeisFileName = "http://192.168.25.183:8080/file/home/" + home.portSeisFileName;
        } else {
            portSeisFileName = "http://192.168.25.183:8080/file/home/foto.jpg";  
        }
        
        if (home.exFileName) {
            exFileName = "http://192.168.25.183:8080/file/home/" + home.exFileName;
        } else {
            exFileName = "http://192.168.25.183:8080/file/home/foto.jpg";  
        }

        const { portUmTitulo, portUmSubTitulo, 
            portDoisTitulo, portDoisSubTitulo, 
            portTresTitulo, portTresSubTitulo, 
            portQuatroTitulo, portQuatroSubTitulo, 
            portCincoTitulo, portCincoSubTitulo, 
            portSeisTitulo, portSeisSubTitulo, 
            exTitulo, exSubTitulo,
            exSubTituloDois, exDesc 
        } = home;

        return res.json({
            portUmTitulo, 
            portUmSubTitulo, 
            portDoisTitulo, 
            portDoisSubTitulo, 
            portTresTitulo, 
            portTresSubTitulo, 
            portQuatroTitulo, 
            portQuatroSubTitulo, 
            portCincoTitulo, 
            portCincoSubTitulo, 
            portSeisTitulo, 
            portSeisSubTitulo,
            portUmFileName,
            portDoisFileName,
            portTresFileName,
            portQuatroFileName,
            portCincoFileName,
            portSeisFileName,
            exFileName,
            exTitulo,
            exSubTitulo,
            exSubTituloDois,
            exDesc
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado!"
        })
    })
})
//Temos a solução que a sua empresa precisa
app.post('/home', async (req, res) => {

    const dados = {
        "topTitulo": "Paulo Teixeira",
        "topSubTitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "ENTRE EM CONTATO",
        "topLinkBtn": "http://localhost:3000/",
        
        "servTitulo": "Serviços",
        "servSubTitulo": "This is a simple hero unit, a simple Jumbotron-style ",

        "servUmIcone": "code",
        "servUmTitulo": "Serviço 1",
        "servUmDesc": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",

        "servDoisIcone": "laptop-code",
        "servDoisTitulo": "Serviço 2",
        "servDoisDesc": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",

        "servTresIcone": "mobile-alt",
        "servTresTitulo": "Serviço 3",
        "servTresDesc": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",

        "portTitulo": "Portfólio",
        "portSubTitulo": "featured content or information.",

        "portUmOriginalName": "1.jpg",
        "portUmFileName": "1.jpg",
        "portUmTitulo": "Card title",
        "portUmSubTitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portDoisOriginalName": "2.jpg",
        "portDoisFileName": "2.jpg",
        "portDoisTitulo": "Card title",
        "portDoisSubTitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portTresOriginalName": "3.jpg",
        "portTresFileName": "3.jpg",
        "portTresTitulo": "Card title",
        "portTresSubTitulo": "This is a longer card with supporting text below as a natural lead-in to additional content.",

        "portQuatroOriginalName": "1.jpg",
        "portQuatroFileName": "1.jpg",
        "portQuatroTitulo": "Card title",
        "portQuatroSubTitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portCincoOriginalName": "2.jpg",
        "portCincoFileName": "2.jpg",
        "portCincoTitulo": "Card title",
        "portCincoSubTitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portSeisOriginalName": "3.jpg",
        "portSeisFileName": "3.jpg",
        "portSeisTitulo": "Card title",
        "portSeisSubTitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "exTitulo": "Exemplo",
        "exSubTitulo": "First featurette heading.",
        "exSubTituloDois": "It’ll blow your mind.",
        "exDesc": "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.",
        "exFileName": "4.jpg",
        "footer": "Paulo Teixeira",    
    }

    const homeExiste = await Home.findOne({});

    if (homeExiste) {
        return res.status(400).json({
            error: true,
            message: "Erro: A página home já possui um registro"
        })
    }

    Home.create(dados, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo da página Home não foi cadastrado com sucesso"
        })
    })
    return res.json({
        error: false,
        message: "Erro: Conteúdo da página Home cadastrado com sucesso"
    })    
})
 
app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
})