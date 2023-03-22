import {Button,Navbar,Container,Nav} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react';
function HeaderNav({cart}){
    return(
        <>
            <Navbar bg="white" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + '/web_logo.svg'}/></Navbar.Brand>
                    <Nav className="me-auto menu_nav">
                        <Nav.Link href="#home" style={{color:'#111'}}>소파</Nav.Link>
                        <Nav.Link href="#features" style={{color:'#111'}}>바디필로우</Nav.Link>
                        <Nav.Link href="#pricing" style={{color:'#111'}}>리빙</Nav.Link>
                        <Nav.Link href="#pricing" style={{color:'#111'}}>캐릭터</Nav.Link>
                        <Nav.Link href="#pricing" style={{color:'#111'}}>스폐셜 에디션</Nav.Link>
                    </Nav>
                    <Link to="/cart" style={{color:'#111'}}>
                        <div>
                            <img src="/images/icon-shopping-cart.svg" alt="cart" />
                            <span></span>
                            {
                                //카트의 길이가 1보다 크면 html 띄어주고 아니면 0을표시
                                cart.length >=1 ? (
                                    <div style={{position:'absolute',top:'10px',marginLeft:'30px'}}>{cart.length}</div>
                                ):"0"
                            }
                        </div>
                    </Link>
            </Container>
            </Navbar> 
        </>
    )
}

export default HeaderNav;