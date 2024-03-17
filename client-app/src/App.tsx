import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, HeaderContent, Icon, List, ListItem } from 'semantic-ui-react';

class App extends Component {
  state = {
    values : []
  }

  componentDidMount() {
    axios.get('http://localhost:5283/api/values/')
    .then((response) => {      
      this.setState({
        values : response.data
      })
    })    
  }
  render(): React.ReactNode {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <HeaderContent>Reactivities</HeaderContent>
        </Header>
        <List>
          {this.state.values.map((value :any ) =>
            <ListItem key={value.id}>{value.name}</ListItem>              
          )}
        </List>        
      </div>
    ); 
  }  
}

export default App;
