import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 500;
  ${mobile({fontsize:"10px"})}

`



const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping On Orders Over $50
        </Container>
    )
}

export default Announcement
