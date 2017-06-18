import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import CalcButton from './components/CalcButton'
import Row from './components/Row'

const LightButton = props => <CalcButton {...props} backgroundColor="#909192" />
const OrangeButton = props =>
  <CalcButton {...props} backgroundColor="#FD8005" color="#fff" />

const DarkButton = props =>
  <CalcButton {...props} backgroundColor="#272829" color="#fff" />

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      display: '0',
      operation: '',
      slot: '',
      cursor: 0
    }
  }

  clear() {
    this.setState({ display: '0', cursor: 0 })
  }

  enterDigit(number) {
    if (this.state.cursor === 0 || this.state.display === '0') {
      this.state.display = ''
    }
    if (this.state.display.length < 7) {
      this.setState({ display: `${this.state.display}${number}`, cursor: 1 })
    }
  }

  enterDecimalPoint() {
    if (!this.state.display.includes('.')) {
      if (this.state.cursor == 0) {
        this.state.display = 0
      }
      this.setState({ display: `${this.state.display}.`, cursor: 1 })
    }
  }

  enterOperation(operation) {
    this.setState({ operation, slot: this.state.display, cursor: 0 })
  }

  negate() {
    this.setState({ display: `${-1 * parseFloat(this.state.display)}` })
  }

  percentage() {
    const current = parseFloat(this.state.display)
    this.setState({ display: `${current * 0.01}` })
  }

  calculate() {
    const num1 = parseFloat(this.state.slot)
    const num2 = parseFloat(this.state.display)

    const operations = {
      '+': () => this.setState({ display: `${num1 + num2}` }),
      '-': () => this.setState({ display: `${num1 - num2}` }),
      x: () => this.setState({ display: `${num1 * num2}` }),
      '/': () => this.setState({ display: `${num1 / num2}` })
    }

    this.setState({ cursor: 0 })
    operations[this.state.operation]()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>

        <View>
          <Row>
            <LightButton value="C" onPress={() => this.clear()} />
            <LightButton value="+/-" onPress={() => this.negate()} />
            <LightButton value="%" onPress={() => this.percentage()} />
            <OrangeButton value="/" onPress={() => this.enterOperation('/')} />
          </Row>

          <Row>
            <DarkButton value="7" onPress={() => this.enterDigit(7)} />
            <DarkButton value="8" onPress={() => this.enterDigit(8)} />
            <DarkButton value="9" onPress={() => this.enterDigit(9)} />
            <OrangeButton value="x" onPress={() => this.enterOperation('x')} />
          </Row>

          <Row>
            <DarkButton value="4" onPress={() => this.enterDigit(4)} />
            <DarkButton value="5" onPress={() => this.enterDigit(5)} />
            <DarkButton value="6" onPress={() => this.enterDigit(6)} />
            <OrangeButton value="-" onPress={() => this.enterOperation('-')} />
          </Row>
          <Row>
            <DarkButton value="1" onPress={() => this.enterDigit(1)} />
            <DarkButton value="2" onPress={() => this.enterDigit(2)} />
            <DarkButton value="3" onPress={() => this.enterDigit(3)} />
            <OrangeButton value="+" onPress={() => this.enterOperation('+')} />
          </Row>
          <Row>
            <DarkButton value="0" long onPress={() => this.enterDigit(0)} />
            <DarkButton value="." onPress={() => this.enterDecimalPoint()} />
            <OrangeButton value="=" onPress={() => this.calculate()} />
          </Row>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  display: {
    color: '#fff',
    fontSize: 80,
    textAlign: 'right',
    paddingHorizontal: 16
  },
  container: {
    paddingVertical: 30,
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
})
