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