import React from 'react'
import { createDrawerNavigator, createAppContainer } from "react-navigation"
import Home from './Paginas/Home'
import Pag1 from './Paginas/Pagina_1'
import Pag2 from './Paginas/Pagina_2'
import CustomDrawer from './Header/Sidebar'

const AppConteudo = createDrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        Pagina1: {
            screen: Pag1,
        },
        Pagina2: {
            screen: Pag2,
        },
    },
    {
        initialRouteName: "Home",
        contentComponent: ({ navigation }) => {
            return (<CustomDrawer navigation={navigation} />)
        }
        /*drawerPosition: 'left',
        contentComponent: CustomDrawer,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',*/
    },
);

export default createAppContainer(AppConteudo);