import * as React from 'react';
import styled from 'styled-components';
import {Container} from "../App";

// @ts-ignore
import Logo from '../../assets/logo.png'



const Header = () => {
    return (
        <HeaderStyle>
            <Container className='c'>
                <div className='l'>
                    <img src={Logo} alt="logotype"/>
                    <p>Agency</p>
                </div>
                <nav><ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul></nav>
                <button>contact</button>
            </Container>
        </HeaderStyle>


    );
};

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-around;
  background: #28293E;
  color: white;
  .c {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
  }
  .l {
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
      font-size: 20px;
    }
  }
  nav{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      li {
        list-style: none;
      }
    }
  }
  button {
    width: 10%;
    background: none;
    border: 1px solid grey;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1040px){
    background: red;
  }
`

export default Header;