import React from 'react';
import { StyleSheet, Button, FlatList, Text, View } from 'react-native';

class TestList extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <FlatList
                data={this.props.data}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 20}}>
                            <View style={{
                                backgroundColor: 'white',
                                justifyContent: 'center',
                                flex: 5,
                            }}>
                            <Text style={{color: 'darkgreen'}}>
                                {item.title}
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'white', flex: 1}}>
                                <Button
                                    onPress={
                                        () =>
                                        this.props.onPress(item)
                                    }
                                    title="+"
                                    color="lightgrey"
                                />
                            </View>
                        </View>
                    </View>
                }
                keyExtractor={({ id }, index) => id}
            />
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
});

export default TestList;


