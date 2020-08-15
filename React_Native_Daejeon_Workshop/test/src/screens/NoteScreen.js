import React from "react";
import {SafeAreaView, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class NoteScreen extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <SafeAreaView>
                <Text>NoteScreen</Text>
                <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                    <Text>Back to Main</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    
    }
}


export default NoteScreen;