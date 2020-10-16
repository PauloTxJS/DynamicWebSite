import React, { Component } from 'react';
import { Text, Image, ScrollView } from 'react-native';
import api from './services/api';


export default class Portfolio extends Component {

  state = {
    pgHome: "",
  }

  async componentDidMount() {
    const response = await api.get();
    this.setState({pgHome: response.data});
  }

  render() {

    const { 
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
    } = this.state.pgHome;
    
    return (
      <ScrollView>
        <Image 
          source={{ uri: portUmFileName }}
          style={{width: 400, height: 200}}
        />
        <Text >{portUmTitulo}</Text>
        <Text >{portUmSubTitulo}</Text>

        <Image 
          source={{ uri: portDoisFileName }}
          style={{width: 400, height: 200}}
        />
        <Text >{portDoisTitulo}</Text>
        <Text >{portDoisSubTitulo}</Text>

        <Image 
          source={{ uri: portTresFileName }}
          style={{width: 400, height: 200}}
        />
        <Text >{portTresTitulo}</Text>
        <Text >{portTresSubTitulo}</Text>

        <Image 
          source={{ uri: portQuatroFileName }}
          style={{width: 400, height: 200}}
        />
        <Text>{portQuatroTitulo}</Text>
        <Text>{portQuatroSubTitulo}</Text>

        <Image 
          source={{ uri: portCincoFileName }}
          style={{width: 400, height: 200}}
        />
        <Text>{portCincoTitulo}</Text>
        <Text>{portCincoSubTitulo}</Text>

        <Image 
          source={{ uri: portSeisFileName }}
          style={{width: 400, height: 200}}
        />
        <Text >{portSeisTitulo}</Text>
        <Text >{portSeisSubTitulo}</Text>
      </ScrollView>
    )
  };
}