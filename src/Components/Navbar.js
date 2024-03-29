import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';



export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm  navbar-light px-sm-5">
               {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}

                    <Link to='/'>
                        <img src={logo}  style={{width: "100px"}} alt="store" className='navbar-brand'/>
                    </Link>
                    <ul className="navbar-nav align-items-center" >
                        <li className="nav-item ml-5" >
                        <Link to='/' className="nav-link " >
                        products
                    </Link>
                        </li>
                    </ul>

                    <Link to='/cart' className="ml-auto" >
                        <ButtonContainer>
                            <span className='mr-2'> 
                            <i className="fas fa-cart-plus"/>
                            </span>
                             my cart
                        </ButtonContainer>
                    </Link>
           </NavWrapper>

        )
    }
}

const NavWrapper = styled.nav `
background: white;
.nav-link{
    color: black !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}

.navbar{
    padding: 0rem 0rem !important;
}

`
