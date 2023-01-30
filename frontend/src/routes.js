import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from 'react-router-dom';


function Home () {
    return (
        <div>
            <Menu />
            <h2>Dashboard</h2>
        </div>
    )
}

function Contatos () {
    let {path, url} = useParams
    return (
        <div>
            <Menu />
            <h2>Lista de Contatos</h2>
        
            <ul>
                <li>
                    <Link to={`${url}/111`} >Contato A</Link>
                </li>
                <li>
                    <Link to="/contacts" >Contato B</Link>
                </li>
                <li>
                    <Link to="/contacts" >Contato C</Link>
                </li>
            </ul>
            <Routes>
                <Route path={path} />
                <Route path={`${path}/contactId`}>
                    <Contact />
                </Route>
            </Routes>
        
        </div>
    )
}

function Contact () {
    let {contactId} = useParams

    return (
        <div>
            <h3>Contato: {contactId}</h3>
        </div>
    )
}


function SignIn () {
    return (
        <div>
            <h2>Sign IN</h2>
        </div>
    )
}


function Signout () {
    return (
        <div>
            <h2>Sign Out</h2>
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
                        <Link to="/messages">Login</Link>
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
                    <Route path='/signout' element={<Signout />}/>    
                </Routes>
                <Routes>
                    <Route path='/messages' element={<Messages />}/>    
                </Routes>
            </div>
        </Router>
    )
}