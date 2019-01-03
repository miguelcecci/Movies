import React from 'react';
import {StyleSheet, Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

class ModalExibicao extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            name: "0",
            year: "0"
        };
    }

    setVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    setData(n, y){
        this.setState({
            name:n,
            year:y
        });
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        marginTop: 42}}>
                        <View style={{
                            flex:1,
                            marginTop: 42 ,
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            <Text style={{ fontSize:30 }}>{this.state.name}</Text>
                            <Text style={{ color:'darkgrey' }}>{this.state.year}</Text>
                        </View>
                        <View style={{
                            flex: .5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setVisible(!this.state.modalVisible);
                                }}>
                                <Text>Voltar</Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                </Modal>
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


export default ModalExibicao;