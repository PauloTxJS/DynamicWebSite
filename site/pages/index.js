import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Container, Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Home = data => (
    <div>
        <Head>
            <title>Home - Paulo Teixeira</title>
            <meta name="Description" content="Analista de Sistema e Técnico em informática" />
            <meta name="author" content="Paulo Teixeira" />
        </Head>
        <Menu />
        <Jumbotron fluid className="descr-top">
            <style>{`.descr-top{
                background-color: #000;
                color: #fff;
                padding-top: 150px;
                padding-bottom: 100px;
                margin-bottom: 0rem !important;
                position: relative;
            }.inicio-link{
                position: absolute;
                top: 0px;
            }`}</style>
            <Container className="text-center">
                <a name="inicio" className="inicio-link"/>
                <h1 className="display-4 mb-4">{data.response.home.topTitulo}</h1>
                <p className="lead mb-4">{data.response.home.topSubTitulo}</p>
                <p className="lead">
                    <a href={data.response.home.topLinkBtn} className="btn btn-outline-warning btn-lg">
                        <a>{data.response.home.topTextoBtn}</a>
                    </a>
                </p>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="servicos">
            <style>{`.servicos{
                background-color: #fff;
                padding-top: 80px;
                padding-bottom: 80px;
                margin-bottom: 0rem !important;
                position: relative;
            }.servico-link{
                position: absolute;
                top: 0px;
            }.circulo{
                width: 140px;
                height: 140px;
                background-color: #fed136;
                font-size: 52px;
                padding-top: 30px;
                color: #fff;
            }.centralizar{
                margin: 0 auto !important;
                float: none !important;
            }`}</style>
            <Container className="text-center">
                <a name="servico" className="servico-link"/>
                <div>
                    <h2 className="display-4">{data.response.home.servTitulo}</h2>
                    <p className="lead pb-4">{data.response.home.topSubTitulo}</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.response.home.servUmIcone}/>
                        </div>
                        <h2 className="mt-4 mb-4">{data.response.home.servUmTitulo}</h2>
                        <p>{data.response.home.servUmDesc}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.response.home.servDoisIcone}/>
                        </div>
                        <h2 className="mt-4 mb-4">{data.response.home.servDoisTitulo}</h2>
                        <p>{data.response.home.servDoisDesc}</p>   
                    </div>
                    <div className="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.response.home.servTresIcone}/>
                        </div>
                        <h2 className="mt-4 mb-4">{data.response.home.servTresTitulo}</h2>
                        <p>{data.response.home.servTresDesc}</p>
                    </div>
                </div>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="portfolio">
            <style>{`.portfolio{
                background-color: #f8f9fa;
                padding-top: 80px;
                padding-bottom: 80px;
                margin-bottom: 0rem !important;
                position: relative;
            }.portfolio-link{
                position: absolute;
                top: 0px;
            }`}</style>
            <Container className="text-center">
                <a name="portfolio" className="portfolio-link"/>
                <div>
                    <h2 className="display-4">{data.response.home.portTitulo}</h2>
                    <p className="lead pb-4">{data.response.home.portSubTitulo}</p>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portUmFileName} className="card-img-top" alt="Imagem_1"/>
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portUmTitulo}</h5>
                                <p className="card-text">{data.response.home.portUmSubTitulo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portDoisFileName} className="card-img-top" alt="Linux"/>
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portDoisTitulo}</h5>
                                <p className="card-text">{data.response.home.portDoisSubTitulo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portTresFileName} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portTresTitulo}</h5>
                                <p className="card-text">{data.response.home.portTresSubTitulo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portQuatroFileName} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portQuatroTitulo}</h5>
                                <p className="card-text">{data.response.home.portQuatroSubTitulo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portCincoFileName} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portCincoTitulo}</h5>
                                <p className="card-text">{data.response.home.portCincoSubTitulo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src={data.response.portSeisFileName} className="card-img-top" alt="Músico"/>
                            <div className="card-body">
                                <h5 className="card-title">{data.response.home.portSeisTitulo}</h5>
                                <p className="card-text">{data.response.home.portSeisSubTitulo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="exemplo">
            <style>{`.exemplo{
                position: relative;
            }.exemplo-link{
                position: absolute;
                top: 0px;
            }`}</style>
            <Container className="container text-center">
                <a name="exemplo" className="exemplo-link"/>
                <div className="texto">
                    <h2 className="display-4">{data.response.home.exTitulo}</h2>
                    <hr />
                </div>
                <div className="row featurette">
                    <div className="col-md-7 personalizar">
                        <style>{`.personalizar{
                            margin-top:15%;
                        }`}</style>
                        <h2 className="featurette-heading">{data.response.home.exSubTitulo}<span className="text-muted">{data.response.home.exSubTituloDois}</span></h2>
                        <p className="lead">{data.response.home.exDesc}</p>
                    </div>
                    <div className="col-md-5">
                        <img src={data.response.exFileName} className="card-img-top" alt="Unhas"/>
                    </div>
                </div>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="rodape">
            <style>{`.rodape{
                background-color: #000;
                color: #fff;
                padding-top: 0px;
                padding-bottom: 0px;
                margin-bottom: 0rem !important;
            }`}</style>			
            <Container className="text-center">
                <footer className="footer mt-auto py-3">
                    <div className="container">
                        <span className="text-muted">{data.response.home.footer}</span>
                    </div>
                </footer>				
            </Container>					
        </Jumbotron>
    </div>   
);

Home.getInitialProps = async () => {
    var response = await axios.get('http://localhost:8080/home');
    return {response: response.data};
}
  
export default Home;  