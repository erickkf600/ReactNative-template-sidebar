import React, { Component } from 'react'
import { Text, Container } from 'native-base'
import { Toolbar } from 'react-native-material-ui'

export default class Pag2 extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Title"
                />
                <Text>PAGINA 2</Text>
            </Container>
        )
    }
}
