const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const home = new Schema({
   topTitulo: {
      type: String
   },
   topSubTitulo: {
      type: String
   },
   topTextoBtn: {
      type: String
   },
   topLinkBtn: {
      type: String
   },

   servTitulo: {
      type: String
   },
   servSubTitulo: {
      type: String
   },

   servUmIcone: {
      type: String
   },
   servUmTitulo: {
      type: String
   },
   servUmDesc: {
      type: String
   },

   servDoisIcone: {
      type: String
   },
   servDoisTitulo: {
      type: String
   },
   servDoisDesc: {
      type: String
   },

   servTresIcone: {
      type: String
   },
   servTresTitulo: {
      type: String
   },
   servTresDesc: {
      type: String
   },

   portTitulo: {
      type: String
   },
   portSubTitulo: {
      type: String
   },

   portUmOriginalName: {
      type: String
   },
   portUmFileName: {
      type: String
   },
   portUmTitulo: {
      type: String
   },
   portUmSubTitulo: {
      type: String
   },

   portDoisOriginalName: {
      type: String
   },
   portDoisFileName: {
      type: String
   },
   portDoisTitulo: {
      type: String
   },
   portDoisSubTitulo: {
      type: String
   },

   portTresOriginalName: {
      type: String
   },
   portTresFileName: {
      type: String
   },
   portTresTitulo: {
      type: String
   },
   portTresSubTitulo: {
      type: String
   },

   portQuatroOriginalName: {
      type: String
   },
   portQuatroFileName: {
      type: String
   },
   portQuatroTitulo: {
      type: String
   },
   portQuatroSubTitulo: {
      type: String
   },

   portCincoOriginalName: {
      type: String
   },
   portCincoFileName: {
      type: String
   },
   portCincoTitulo: {
      type: String
   },
   portCincoSubTitulo: {
      type: String
   },

   portSeisOriginalName: {
      type: String
   },
   portSeisFileName: {
      type: String
   },
   portSeisTitulo: {
      type: String
   },
   portSeisSubTitulo: {
      type: String
   },
   exTitulo: {
      type: String
   },
   exSubTitulo: {
      type: String
   },
   exSubTituloDois: {
      type: String
   },
   exDesc: {
      type: String
   },
   exFileName:{
      type: String
   },
   footer: {
      type: String
   }
},
   {
      timestamps: true
   }
);

mongoose.model('Home', home);