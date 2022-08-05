import React from 'react'
import styled from 'styled-components'

type Props = {
    wrapperType: string,
    artistName: string,
    trackName?: string,
    artworkUrl: string,
    collectionName?: string,
}

const Card = styled.div`
    background-color: #e5e5e5;
    border-radius: 10px;
    padding: 20px 20px;
`;

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Info = styled.div`
   & p:first-child {
    font-size: 30px;
    font-weight: 600;
   }

   & p:last-child {
    margin-top: -20px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5)
   }
`;

//track || artist || collection
const ResultCard = (props: Props) => {
  return (
    <Card>
        <CardContainer>
            <img src={props.artworkUrl} alt='preview' />
            <Info>
                <p>{props.wrapperType === 'track' ? props.trackName : props.wrapperType === 'artist' ? props.artistName : props.wrapperType === 'collection' ? props.collectionName : null}</p>
                <p>{props.wrapperType === 'track' ? 'Song' : props.wrapperType === 'artist' ? 'Artist' : props.wrapperType === 'collection' ? 'Album' : null} {props.wrapperType === 'track' || 'collection' ? `. ${props.artistName}` : null}</p>
            </Info>
        </CardContainer>
    </Card>
  )
}

export default ResultCard