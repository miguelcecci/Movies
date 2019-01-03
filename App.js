import React from 'react';
import { ActivityIndicator, StyleSheet, Button, Text, View } from 'react-native';
import TestList from './TestList';
import ModalExibicao from './ModalExibicao';
import NewMovieModal from './NewMovieModal'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.modalExibicao = React.createRef();
    this.newMovieModal = React.createRef();
    this.state = { 
      isLoading: true,
      selected: ""
    }
  }

  onPressButton = (a) => {
    this.modalExibicao.current.setData(a.title, a.releaseYear);
    this.modalExibicao.current.setVisible(true);
  };

  refreshData(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.refreshData()
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View className="App" style={ styles.container }>
        <View style={ styles.header }>
          <Text style={{fontSize: 26}}>
            Header 
          </Text>
          <View>
            <Button
              onPress={
                () =>
                this.newMovieModal.current.setVisible(true)
              }
              title="Novo"
              color="lightgrey"
            />
          </View>
        </View>
        <NewMovieModal ref={this.newMovieModal}/>
        <ModalExibicao ref={this.modalExibicao} />
        <TestList 
        data={this.state.dataSource}
        onPress={this.onPressButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 22
  }
})
