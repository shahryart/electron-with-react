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
      input: {taskName: undefined, taskDue: undefined},
      errorMessage: "New Task",
    };
  }

  handleChange(e) {
    this.state.input.taskName = (e.target.value === "") ? undefined : e.target.value;
  }

  handleButtonClick() {
    if (this.state.input.taskName !== undefined 
      && this.state.input.taskDue !== undefined) {
      let newTasks = this.state.tasks.slice();
      const entry = this.state.input;
      newTasks.push(entry);
      this.setState({tasks: newTasks, input: ""});
    } else {
      this.setState({errorMessage: "Input is wrong"});
    }
  }
   
  handleDueChange(e) {
    if (e.target.value.match(/[0-9]+\/[0-9]+\/[0-9]+/)) {
      this.state.input.taskDue = (e.target.value === "") ? undefined : e.target.value;
      this.setState({errorMessage: "Add Task"})
    } else {
      this.setState({errorMessage: "Wrong input format for date dd/mm/yyyy"})
    }
  }
  
 
  render() {
    return (

    <ListView background="#f1f2f4" width="240" height="200">
        <ListViewHeader>
          <Text size="11" color="#696969">Tasks</Text>
        </ListViewHeader>
      <ListViewSection>

        {this.state.tasks.map(value => renderTask(`${value.taskName} is due on ${untilDue(value.taskDue)}`))}
        <TextInput
          label={this.state.errorMessage}
          placeholder="title"
          defaultValue=""
          onChange={this.handleChange.bind(this)} /> 
        <TextInput
          placeholder="Time Left"
          defaultValue=""
          onChange={this.handleDueChange.bind(this)} />
        <Button color="blue" onClick={this.handleButtonClick.bind(this)}>
          Add
        </Button>

      </ListViewSection>
 
      </ListView>
    );

  }
}
function untilDue(dueAt) {
  let [day, month, year] = dueAt.split('\/').map(value => parseInt(value))
  let currTime = new Date()
  return '..'

  


 
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




