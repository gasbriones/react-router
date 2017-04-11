//https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#browserhistory
//https://github.com/ReactTraining/react-router/tree/master/packages/react-router

import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

//layout
import Root from '../../../layout/jsx/Root';
import Header from '../../../layout/jsx/Header';
import Main from '../../../layout/jsx/Main';
import Sidebar from '../../../layout/jsx/Sidebar';

//sections
import About from '../../../pages/jsx/About';
import Contact from '../../../pages/jsx/Contact';

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
        const users = this.state.users;
        return (
            <Router history={true}>
                <Root>
                    <Header/>
                    <Sidebar>
                        <ul>
                            {users ? (users.map(user => {
                                return <li  key={user.id}>
                                    <Link to={`/g/${user.id}`}>
                                        {user.name}
                                    </Link>;
                                </li>
                            })):(<li>Cargando...</li>)}
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact"> Comtact</Link>
                            </li>
                        </ul>

                    </Sidebar>
                    <Main>
                        <Route exact={true} path="/" render={() => {
                            return <h1>Bienvenido</h1>;
                        }}/>
                        {/* 1 <Route path="/g/:userId" component={MainContent} /> */}

                        {
                            /*

                             match es un objeto que contiene información acerca de cómo una <ruta de ruta> coincide
                             con la URL. Los objetos de coincidencia contienen las siguientes propiedades:
                             */
                        }
                        <Route path="/g/:userId" render={({match}) => {
                            return <MainContent user={ users.find(u => u.id == match.params.userId)}/>
                        }} />
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </Main>
                </Root>
            </Router>
        );
    }
}

/* 1
const MainContent = ({match}) => (
    <div>
        {match.params.userId}
    </div>
)
*/

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