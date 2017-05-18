import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Root from '../layout/Root';
import Main from '../layout/Main';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar'

//Pages
import About from '../pages/About';
import Contact from '../pages/Contact';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null
        }
    }

    componentWillMount (){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users =>{
                this.setState({users});
            })
    }

    render() {
        let users = this.state.users;
        return (
            <div>
                <Router history={true}>
                    <Root>
                        <Header>
                            Curso de React para Vates
                        </Header>
                        <Sidebar>
                            <ul>
                                {
                                    users ? (
                                        users.map(user => {
                                            return <li key={user.id}>
                                                <Link to={`/u/${user.id}`} >{user.name}</Link>
                                            </li>
                                        })
                                    ): (<li>Cargando ...</li>)
                                }
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </Sidebar>
                        <Main>
                            <Route path='/' exact={true} render={() => {
                                return (<h1>Bienvenidos al curso de react</h1>)
                            }}/>
                            <Route path="/u/:userId" render={({match}) => {
                                return <MainContent user={ users.find(u => u.id == match.params.userId)}/>
                            }} />

                            <Route path='/about' component={About}/>
                            <Route path='/contact' component={Contact}/>
                        </Main>
                    </Root>
                </Router>

            </div>


        );
    }
}


const MainContent = ({user}) => {
    return (
        <div>
            <h1>{user.name}</h1>

            <form>
                <h3>Personal data </h3>
                <label>User name: </label> <input type="text" value={user.username}/> <br />
                <label>Email: </label> <input type="text" value={user.email}/><br />
                <h3>Address</h3><br />
                <label>Street: </label> <input type="text" value={user.address.street}/> <br />
                <label>Suite: </label> <input type="text" value={user.address.suite}/> <br />
                <label>City: </label> <input type="text" value={user.address.city}/> <br />
                <label>Zipcode: </label> <input type="text" value={user.address.zipcode}/>
            </form>
        </div>
    )
}