//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

//SIDEBAR
export const Footer = styled.View`
  height: 40px;
  flex-direction: row;
  background-color: #f2f2f2;
  border-top-width: 1;
  border-color: lightgray;
`
export const Sidebar = styled.View`
  display: flex;
  flex: 1;
`
export const Li = styled.Text`
  font-size: 20px;
  color: #000;
`
export const styles = StyleSheet.create({
    //SIDEBAR
    item: {
        borderBottomWidth: .8,
        borderColor: 'lightgray',
    },
    creditos: {
        marginLeft: 10,
        fontSize: 12,
    },
    versao: {
        textAlign: 'right',
        marginRight: 20,
        color: 'gray',
        fontSize: 9,
    },
});