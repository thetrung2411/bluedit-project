import React, {Component} from "react";
import  {slideInUp, lightSpeedIn, rotateInUpLeft, slideInDown,} from 'react-animations'
import styled , {keyframes} from 'styled-components'
import './default.css'
import picture from '../../assets/BlueDit.png'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import {styled as muiStyled } from '@material-ui/core/styles'
const LightSpeedIn = styled.div`animation: 2s ${keyframes`${lightSpeedIn}`} from: `;
const SlideIn = styled.div`animation: 2s ${keyframes`${slideInDown}`}`;
const Rotate = styled.div`animation: 2s ${keyframes`${rotateInUpLeft}`}`;
const LoginButton = muiStyled(Button)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '0 0 0 40px'
});
const RegisterButton = muiStyled(Button)({
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: '0 20px'
});
export class DefaultPage extends Component{
    render(){
    return (
   <div>
     <img class="runPic" src={picture}></img>
    <p class="classP"><span class="runB"><SlideIn>B</SlideIn></span><span class="runL"><Rotate>L</Rotate></span>
    <span class="runU">U</span><span class="runE">E</span><span class="runD">D</span><span class="runI">I</span><span class="runT">T</span>
   </p>
   <div className="loginPage-buttonWrapper">
     <Link to="/login" className="noDecor">
   <LoginButton className ="button">Login</LoginButton></Link>
    <Link to="/register" className ="noDecor">
    <RegisterButton className ="button">Register</RegisterButton>
    </Link>
    </div>
    <div className="loginPage-buttonWrapper">
    <Link to="/home"  className="decor">
        <Button className="button"> Visit Page</Button>
    </Link>
    </div>
    </div>
   
    );
} 
}
export default DefaultPage