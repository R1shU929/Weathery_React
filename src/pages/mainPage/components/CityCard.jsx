import styled from "styled-components";

function  CityCard(){

    return(
        <Wrapper>
            <Img src='NewYork.jpeg' alt="NewYork" />
            
        </Wrapper>
    )
}
export default CityCard;

const Wrapper = styled.div`

margin-top:40px;
`
const Img = styled.img`
    width:400px;
    height:600px;
    &:hover{
        scale: 1.03;
        transition: 0.5s;
    }

    transition: 0.5s;
`