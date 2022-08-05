import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

type Props = {
    category: string,
    backgroundImg: any,
    id: number
}

type StyledProp = {
    background: any
}

const CardDiv = styled.div`
    background-image: url(${(props: StyledProp) => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    height: 200px;
    width: 100%;
    border-radius: 20px;
`;

const CardContainer = styled.div`
    margin: 10px 20px;
    position: relative;
    height: 100%;
`;

const CardText = styled.p`
    position: absolute;
    bottom: 0;
    left: 0;
    text-decoration: none;
    font-size: 30px;
    line-height: 20px
`;

const Card = (props: Props) => {
  return (
    <Link to={`/category/${props.id}`}>
    <CardDiv background={props.backgroundImg}>
        <CardContainer>
            <CardText>{props.category}</CardText>
        </CardContainer>
    </CardDiv>
    </Link>
  )
}

export default Card