import React from 'react';
import {
  Window,
  TitleBar,
  ListView,
  ListViewHeader,
  ListViewSection,
  Text,
  ListViewRow,
  TextInput,
  Button
} from 'react-desktop/macOs';


class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: undefined,
    };
  }

  handleChange(e) {
    this.state.input = (e.target.value == "") ? undefined : e.target.value;
  }

  handleButtonClick() {
    if (this.state.input !== undefined) {
      let newTasks = this.state.tasks.slice();
      const entry = this.state.input;
      newTasks.push(entry);
      this.setState({tasks: newTasks, input: ""});
    }
  }
   
  
 
  render() {
    return (

    <ListView background="#f1f2f4" width="240" height="200">
        <ListViewHeader>
          <Text size="11" color="#696969">Tasks</Text>
        </ListViewHeader>
      <ListViewSection>

        {this.state.tasks.map(value => renderTask(value))}
        <TextInput
          label="New Task"
          placeholder="title"
          defaultValue=""
          onChange={this.handleChange.bind(this)} /> 
        <Button color="blue" onClick={this.handleButtonClick.bind(this)}>
          Add
        </Button>

      </ListViewSection>
 
      </ListView>
    );

  }
}

function renderTask(info) {
  return (
    <ListViewRow>
    <Text color="#414141" size="13">{info}</Text>
    </ListViewRow>
  );

}


export default class App extends React.Component {
  render() {
    return (
      <Window
      chrome
      height="300px"
      padding="10px"
    >
      <TitleBar title="untitled text 5" controls/>
      <Schedule />
    </Window>
      
    );
  }
}




