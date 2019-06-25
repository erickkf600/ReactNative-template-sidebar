import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Container } from 'native-base'
import { Toolbar } from 'react-native-material-ui'


export default class Navbar extends Component {
    /* logo = () => {
       return (
           <View style={{ flexDirection: 'row', alignItems: 'center', }}>
               <Image 
                   source={require('../img/logo.png')}
                   style={{ width: 24, height: 24, marginHorizontal: 5 }}
                   resizeMode="contain" />
           </View>
       )
    } */
    render() {
        return (
            <View>
                <Toolbar
                    leftElement="menu"
                    onLeftElementPress={() => this.props.navigation.openDrawer()}
                    centerElement= 'LOGO' //PARA ADICIONAR LOGO USE junto com o comentario acima {this.logo()}
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Pesquisar...',
                    }}
                />
            </View>
        );
    }
}

