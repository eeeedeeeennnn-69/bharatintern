const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit' };


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function TempZones(props) {
  if (props.celsius >= 100) {
    return /*#__PURE__*/React.createElement("h5", { className: "hot" }, "It's getting Hot in here!");
  } else
  if (props.celsius >= 36.5 && props.celsius <= 37.5) {
    return /*#__PURE__*/React.createElement("h5", { className: "normal" }, "This is the normal temperature of the human body!");
  } else
  if (props.celsius <= 0) {
    return /*#__PURE__*/React.createElement("h5", { className: "cold" }, "Brr...Freezing!");
  }
  return null;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    const scale = this.props.scale;
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("div", { className: "form-group" }, /*#__PURE__*/
      React.createElement("lable", null, /*#__PURE__*/React.createElement("h3", null, "Enter Temperature in ", scaleNames[scale], ": ")), /*#__PURE__*/
      React.createElement("input", { className: "form-control container text-center", id: "focusedInputed", type: "text", value: value,
        onChange: this.handleChange })))));





  }}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { value: '', scale: 'c' };
  }

  handleCelsiusChange(value) {
    this.setState({ scale: 'c', value });
  }

  handleFahrenheitChange(value) {
    this.setState({ scale: 'f', value });
  }

  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

    return /*#__PURE__*/(
      React.createElement("div", { className: "text-center container-fluid" }, /*#__PURE__*/
      React.createElement(TemperatureInput, {
        scale: "c",
        value: celsius,
        onChange: this.handleCelsiusChange }), /*#__PURE__*/
      React.createElement(TemperatureInput, {
        scale: "f",
        value: fahrenheit,
        onChange: this.handleFahrenheitChange }), /*#__PURE__*/
      React.createElement(TempZones, {
        celsius: parseFloat(celsius) })));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Calculator, null),
document.getElementById('root'));