import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    useMatch
} from 'react-router-dom';

import SignIn from './pages/public/SignIn';
import SignUp from './pages/public/SignUp';


function Home () {
    return (
        <div>
            <Menu />
            <h2>Dashboard</h2>
        </div>
    )
}

function Contatos () {
    let match = useMatch('/contacts/:id')
    return (
        <div>
            <Menu />
            <h2>Lista de Contatos</h2>
        
            <ul>
                <li>
                    <Link to={`${match}`} >Contato A</Link>
                </li>
                <li>
                    <Link to="/contacts" >Contato B</Link>
                </li>
                <li>
                    <Link to="/contacts" >Contato C</Link>
                </li>
            </ul>
            <Routes>
                <Route path={match} />
                <Route path={`${match}/:contactId`}>
                    <Contact />
                </Route>
            </Routes>
        
        </div>
    )
}

function Contact () {
    let {contactId} = useParams();

    return (
        <div>
            <h3>Contato: {contactId}</h3>
        </div>
    )
}


function Messages () {
    <div>
        <Menu />
        <h2>Lista de Mensagens</h2>
    </div>
}

function Menu () {
   return ( <div>
         <ul>
             <li>
                    <Link to="/contacts">Contatos</Link>
                    </li>
                    <li>
                        <Link to="/signin">Login</Link>
                    </li>
                    <li>
                        <Link to="/signout">Sair</Link>
                    </li>
                </ul>
    </div>
    )
}

export default function Rotas () {
    return (
        <Router>
            <div>
               
               <Routes>
                    <Route path='/' element={<Home />}/>    
                </Routes>
                <Routes>
                    <Route path='/contacts' element={<Contatos />}/>    
                </Routes>
                <Routes>
                    <Route path='/signin' element={<SignIn />}/>    
                </Routes>
                <Routes>
                    <Route path='/signout' element={<SignUp />}/>    
                </Routes>
                <Routes>
                    <Route path='/messages' element={<Messages />}/>    
                </Routes>
            </div>
        </Router>
    )
}