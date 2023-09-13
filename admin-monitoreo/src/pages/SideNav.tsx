import { useState } from "react";
import { Link, Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Home from "../component/Home";
import AdminMonitoreo from "../component/AdminMonitoreo";
import AgregarApp from "../component/AgregrarApp";
import Usuario from "../component/Usuario";

function SideNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-warning" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/">
              <Link to="/usuario" onClick={handleClose} >Usuario</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/monitoreo" onClick={handleClose}>Monitoreo</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/agregarApp" onClick={handleClose}>Agregar App</Link>
            </Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              copyright
            </Nav.Link>
          </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideNav;
