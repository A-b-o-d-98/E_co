//import { Input } from '@material-ui/core'
import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { mobile } from "../responsive";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from 'styled-components'


const Container =styled.div`
 height: 60px;
 ${mobile({ height: "50px", width:"77%" })}

`
const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 ${mobile({ padding: "10px 0px" ,width:"77%" })}

`
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language= styled.span`
 font-size: 14px;
 cursor: pointer;
 ${mobile({ display: "none" })}
 
`
const SearchContainer = styled.div`
 border:0.5px solid lightgray ;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
 ${mobile({ width:"60px"})}

`

const Input = styled.input`
  border:none ;
  ${mobile({ width: "30px" })}

`

const Center=styled.div`
flex: 1;
text-align: center;

`
const Logo=styled.h1`
 font-weight: bold;
 ${mobile({ fontSize: "24px" })}
 //align-items: center;

`

const Right=styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
${mobile({ flex: 2, justifyContent: "center" })}

`

const MenuItem = styled.div`
 font-size:14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}

`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontSize:"16px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>ALJIDY</Logo>
            </Center>
            <Right>
                <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link to="/login">
                <MenuItem>LOGIN</MenuItem>
                </Link>
                <Link to="/cart">

                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
                 </Badge>
                </MenuItem>
                </Link>

            </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
