

import { Link, Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import logo from './logo.svg';
import SideNav from './pages/SideNav';
import './App.css';
import Registro from "./component/Registro";
import Login from "./component/Login";
import { Button } from "react-bootstrap";
import Home from "./component/Home";
import Usuario from "./component/Usuario";
import AdminMonitoreo from "./component/AdminMonitoreo";
import AgregarApp from "./component/AgregrarApp";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
          <SideNav />

            <Navbar.Brand href="/" >EMCALI </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link">
                  <Link to="/login">Login
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/registrarse">Registrarse
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/registrarse" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usuario" element={<Usuario />} />
              <Route path="/monitoreo" element={<AdminMonitoreo />} />
              <Route path="/agregarApp" element={<AgregarApp />} />
          </Routes>
        </div>
      </BrowserRouter>
        
    </>
  );
}

export default App;
