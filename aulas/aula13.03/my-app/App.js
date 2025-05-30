import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"

export default function App() {
  return(
    <View>
      <Classe name="User"/>
    </View>
  )
}

class Classe extends React.PureComponent{
  state = {
    titleText: "Ninguem apertou el botón!"
  }
  onPressButton = (name) => {
    this.setState({titleText: `${name} apertou o boton!`})
  }
  render(){
    return (<View>
      <Text>
        {this.state.titleText}
      </Text>
      <Button
      title="Stop Capturing"
      onPress={() => this.onPressButton(this.props)}
      color="#FF0000"/>
    </View>)
  }
}