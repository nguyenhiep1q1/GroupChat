import React from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import firebase from 'firebase';
class JoinRoom extends React.Component {
    static navigationOptions = {
        title: 'Welcome to Chat Group',
    };
    state = {
        name: ''
    };
    componentWillMount() {
    var config = {
        apiKey: "AIzaSyA0BRUPVIzaZicTTBSTmN9VdsjAWn-gSFA",
        authDomain: "groupchat-7fa57.firebaseapp.com",
        databaseURL: "https://groupchat-7fa57.firebaseio.com",
        projectId: "groupchat-7fa57",
        storageBucket: "groupchat-7fa57.appspot.com",
        messagingSenderId: "76088016336 ",
        appId : " 1: 76088016336: web: 9d711b299cf3cc7156cdd5 " ,
        measurementId : " G-L2H65H8N6P "
    };
    firebase.initializeApp(config);
};
_onChangeName = (text) => {
    this.setState({
        name: text
    });
};
_toChatRoom = () => {
    firebase.auth().signInAnonymously().then((user) => {
        AsyncStorage.setItem('name', this.state.name);
        this.props.navigation.navigate('ChatRoom');
    }).catch((err) => alert(err));
}
render() {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, paddingBottom: 15 }} >
            <Text style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}>
                ENTER YOUR NAME :
                </Text>
            <TextInput placeholder="" style={{
                borderColor: "#A5A5A5",
                borderWidth: 0.5, padding: 8, width: '100%', marginBottom: 15, marginTop: 15
            }}
                onChangeText={(text) => this._onChangeName(text)}
            />
            <TouchableOpacity onPress={() => this._toChatRoom()} >
                <Text style={{ fontWeight: 'bold',borderColor: 'gray',padding: 5,borderWidth: 1 }} >
                    Join Now
                    </Text>
            </TouchableOpacity>
        </View>
    );
};
};
export default JoinRoom;