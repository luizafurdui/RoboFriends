import React, {Component} from 'react';
import CardList from './CardList'; 
import Scroll from './Scroll'; 
import SearchBox from './SearchBox'; 

class App extends Component { //defines a new class which extends React.Component.
    //App inherits functionality from the React Component class
    
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
        // this.OnSearchChange = this.OnSearchChange.bind(this); // Add this line
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users => this.setState({robots: users}));
            
    }
    OnSearchChange = (event)=>{ //use the arrows 
        this.setState({searchField: event.target.value})
    }
    render(){
         
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            //returns a new array containing only the robots whose names match the search criteria. 
        })

        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className="Container">
                    <h1>Robots</h1>
                    <SearchBox searchChange={this.OnSearchChange}/>   
                   <Scroll>
                   <CardList robots={filteredRobots}/>
                    </Scroll>
                    
                </div>
        
            );

        }
       

    }


}
export default App; 