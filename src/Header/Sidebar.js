import React, { Component } from 'react'
import { Text, Container, Header, Content, List, ListItem, Left, Right, Icon } from 'native-base'
import { Footer, Sidebar, styles, Li } from '../Styles'

export default class CustomDrawer extends Component {
    navLink(nav, text) {
        return (
            <ListItem noBorder onPress={() => this.props.navigation.navigate(nav)} style={styles.item}>
                <Left>
                    <Li>{text}</Li>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        )
    }
    render() {
        return (
            <Container>
                <Sidebar>
                    <Header style={{ backgroundColor: '#1b63d6', height: 90, }} androidStatusBarColor="#1b63d6">
                    </Header>
                    <Content style={styles.sidelinks}>
                        <List>
                            {this.navLink('Home', 'Home')}
                            {this.navLink('Pagina1', 'Pag1')}
                            {this.navLink('Pagina2', 'Pag2')}
                        </List>
                    </Content>
                </Sidebar>
                <Footer>
                    <Left>
                        <Text style={styles.creditos}>Template by Erick Ferreira</Text>
                    </Left>
                    <Right>
                        <Text style={styles.versao}>v1.0</Text>
                    </Right>
                </Footer>
            </Container>
        )
    }
}

