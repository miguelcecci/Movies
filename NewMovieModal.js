import React from 'react';
import { TextInput, StyleSheet, Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

class NewMovieModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    setVisible(visible) {
        this.setState({ modalVisible: visible });
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
                        marginTop: 42
                    }}>
                        <View style={{
                            flex: 1,
                            marginTop: 42,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 26,
                                flex: 0.4
                            }}>
                                New Movie
                            </Text>
                            <TextInput
                                style={{ height: 40, width: 200 }}
                                placeholder="Title..."
                            // onChangeText={(text) => this.setState({ text })}
                            />
                            <TextInput
                                style={{ height: 40, width: 200 }}
                                placeholder="Year..."
                            // onChangeText={(text) => this.setState({ text })}
                            />
                        </View>
                        <View style={{
                            flex: .5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableHighlight
                                style={{
                                    padding: 20
                                }}
                                onPress={() => {
                                    this.setVisible(!this.state.modalVisible);
                                }}>
                                <Text>Confirm</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{
                                    padding:20
                                }}
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


export default NewMovieModal;