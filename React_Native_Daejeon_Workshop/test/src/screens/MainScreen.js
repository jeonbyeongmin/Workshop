import React from "react";
import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import { newNote } from "../actions/actions";
import { TextInput } from "react-native-gesture-handler";

const mapStateToProps = state => {
    return{
        notes: state.app_reducer.notes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        makeNewNote: (note) => dispatch(newNote(note)),
    };
}

class MainScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    render(){
        return (
            <SafeAreaView>
                <Text>MainScreen</Text>
                <TouchableOpacity onPress={() => {this.props.makeNewNote(this.state.text)}}>
                    <TextInput value={this.state.text} onChangeText={(txt) => {this.setState({text: txt})}} />
                    <Text>노트 추가</Text>
                </TouchableOpacity>
                <Text>{this.props.notes}</Text>
            </SafeAreaView>
        );
    
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (MainScreen);