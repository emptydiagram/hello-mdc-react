import React from 'react';
import Button from '@material/react-button';
import TextField, {HelperText, Input} from '@material/react-text-field';

import './App.css';
import '@material/react-button/dist/button.css';
import '@material/react-text-field/dist/text-field.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: '', email: ''};
  }

  render() {
    return (
      <div className="App">
        <main className="App-main">
          <h2>:P testing form components</h2>
          <Button
            raised
            className='button-alternate'
            onClick={() => console.log("clicked! name:" + this.state.name + ", email: " + this.state.email)}
          >
            Click Me!
          </Button>
          <p>
            <TextField label='Name'>
              <Input
                value={this.state.name}
                onChange={(e) => this.setState({name: e.currentTarget.value})} />
            </TextField>
          </p>
          <p>
            <TextField label='Email Address'>
              <Input
                value={this.state.email}
                onChange={(e) => this.setState({email: e.currentTarget.value})} />
            </TextField>
          </p>
        </main>
      </div>
    );
  }
}

export default App;
