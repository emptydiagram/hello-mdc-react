import React from 'react';
import Button from '@material/react-button';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import TextField, {HelperText, Input} from '@material/react-text-field';

import './App.css';
import '@material/react-button/dist/button.css';
import '@material/react-tab/dist/tab.css';
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';
import '@material/react-text-field/dist/text-field.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: '', email: '', activeIndex: 2};
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
          <TextField label='Name'>
            <Input
              value={this.state.name}
              onChange={(e) => this.setState({name: e.currentTarget.value})} />
          </TextField>
          <TextField label='Email Address'>
            <Input
              value={this.state.email}
              onChange={(e) => this.setState({email: e.currentTarget.value})} />
          </TextField>
          <div>
            <TabBar
              activeIndex={this.state.activeIndex}
              handleActiveIndexUpdate={this.handleActiveIndexUpdate}
            >
              <Tab>
                <span className='mdc-tab__text-label'>One</span>
              </Tab>
              <Tab>
                <span className='mdc-tab__text-label'>Two</span>
              </Tab>
              <Tab>
                <span className='mdc-tab__text-label'>Three</span>
              </Tab>
            </TabBar>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
