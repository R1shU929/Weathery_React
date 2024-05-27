import CityCard from "./components/CityCard";
import styled from "styled-components";

function MainPage(){
    
    return(
        <Wrapper>
            <Title>
                Weathery
            </Title>
            <Array>
          <CityCard /> 
          
            </Array>

        

        </Wrapper>
    )
}
export default MainPage;

const Wrapper = styled.div`
    width:100vw;
    height:100vh;

`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: lightskyblue;
    padding-top: 20px;
`
const Array = styled.div`
    display: flex;
    justify-content: center;
    gap: 45px;
`