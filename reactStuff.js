//simple conditional render

class App extends React.Component {
    constructor() {
        super()
        
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        let logged =''
        this.state.isLoggedIn ? logged = 'in' : logged ='out'
    return (
        <div>
            <h1>You are currently logged {logged}</h1>
        </div>
    )
    }
}

export default App

//login conditional render

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState =>{
          return {  isLoggedIn: !prevState.isLoggedIn
          }
        })
    }
    
    render() {
        let isLogged =''
        this.state.isLoggedIn ? isLogged = 'Log in' : isLogged = 'Log out'
    return (
        <div>
            <button onClick = {this.handleClick}>Log In/Out</button>
            <h2>{isLogged}</h2>
        </div>
    )
    }
}

export default App

//API call using fetch

import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                character: data
            })
        })
    }
    
    render() {
      let text = this.state.loading ? 'loading...' : this.state.character.name
        return(
            <div>
            {text}
            </div>
        )
    }
    
}

export default App

//simple react form


import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div>
            <input type = 'text' 
            name = 'firstName' 
            placeholder = 'first name' 
            onChange = {this.handleChange}
            />
            <input type = 'text'
             name = 'lastName' 
             placeholder = 'last name' 
             onChange = {this.handleChange}
             />
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            </div>
        )
    }  
}


export default App

// onChange sends an event object to handleEvent, with all the information about the input
//(ie, what is being inputed, properties such as name etc ). These properties can be accessed
//inside the handleChange function. For example, the 'name' property of the inputs. Or, the
//keystroke event, denoted by e.target.value.
//[e.target.name] is in sqaure brackets, because the name property is a string.

//input with checkbox and select menu

import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: true,
            favColor: 'blue'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div>
            <input type = 'text' 
            name = 'firstName' 
            placeholder = 'first name' 
            onChange = {this.handleChange}
            />
            <input type = 'text'
             name = 'lastName' 
             placeholder = 'last name' 
             onChange = {this.handleChange}
             />
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <input type = 'checkbox'
             checked = {this.state.isFriendly}
             onChange = {this.handleChange}
             name = 'isFriendly'
             />
             <br/>
             <label>Favourite color</label>
             <select
             value = {this.state.favColor}
             onChange = {this.handleChange}
             name = 'favColor'
             >
             <option value = 'blue'>Blue</option>
             <option value ='green'>Green</option>
             <option value = 'yellow'>Yellow</option>
             </select>
             <h2>Your favourite colour is {this.state.favColor}</h2>
            </div>
        )
    }  
}


export default App