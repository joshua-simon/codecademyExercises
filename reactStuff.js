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