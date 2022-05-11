import './App.css';
import Demo from './components/Demo.jsx'
import Card from './components/Card.jsx'

var who = 'Arpit'
function App() {
  const fakedata = [
    {
      "color": "red",
      "value": "#f00"
    },
    {
      "color": "green",
      "value": "#0f0"
    },
    {
      "color": "blue",
      "value": "#00f"
    },
    {
      "color": "cyan",
      "value": "#0ff"
    },
    {
      "color": "magenta",
      "value": "#f0f"
    },
    {
      "color": "yellow",
      "value": "#ff0"
    },
    {
      "color": "black",
      "value": "#000"
    }
  ]
  

  return (
    <div className="App">
      <h1>Hello Everyone...!</h1>
      <Demo name = {who}
            age = '21'/>
      <Card data = {fakedata} />
    </div>
  );
}

export default App;
