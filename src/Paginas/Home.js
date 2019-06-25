import React, { Component } from 'react'
import { ScrollView, Keyboard } from 'react-native'
import { Container, Text } from 'native-base'
import Navbar from '../Header/Navbar'


export default class Home extends Component {
    state = {
        searchBarFocus: false
    }
    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide)
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow = () => {
        this.setState({ searchBarFocus: true })
    }
    _keyboardWillShow = () => {
        this.setState({ searchBarFocus: true })
    }
    _keyboardWillHide = () => {
        this.setState({ searchBarFocus: false })
    }
    _keyboardDidHide = () => {
        this.setState({ searchBarFocus: false })
    }
    render() {
        return (
            <Container>
                <Navbar navigation={this.props.navigation}/>
                <ScrollView keyboardShouldPersistTaps={'handled'}>
                    <Text style={{ backgroundColor: this.state.searchBarFocus ? 'rgba(0,0,0,0.3)' : '#fff' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </ScrollView>
            </Container>
        );
    }
}

