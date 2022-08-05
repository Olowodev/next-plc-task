import * as React from 'react';
import {TextField, Container, Grid} from '@mui/material'
import Card from '../Components/Card'
import { categories } from '../data';
import styled from 'styled-components'
import {InputAdornment} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ResultCard from '../Components/ResultCard'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {search} from '../redux/apiCalls'

export interface HomeProps {
}


const ContentDiv = styled.div`
    margin-top: 50px;
`;

const TextFieldDiv = styled.div`
    margin-top: 50px
`;

const Loading = styled.p`
    font-size: 50px
`;

const StyledButton = styled.button`
    background-color: blue; 
    padding: 0 40px; 
    color: white; 
    border-radius: 20px; 
    border: none;
    cursor: pointer;
`;

export default function Home (props: HomeProps) {

    const [searchTerm, setSearchTerm] = React.useState('');
    const { searchResults, isFetching} = useAppSelector((state) => state.search)
    const dispatch = useAppDispatch();


    const handleChange = (e: any) => {
        setSearchTerm(e.target.value);
    }

    const enterClicked = (e: any) => {
        if (e && e.keyCode === 13) {
            if(searchTerm) {
                search(dispatch, searchTerm)
            }
        }
    }

    const onClick = (e: any) => {
        if(searchTerm) {
            search(dispatch, searchTerm)
        }
    }



    
  return (
    <div>
      <Container>
        <TextFieldDiv>
            <TextField onKeyDown={(e)=>enterClicked(e)} fullWidth label="Search..." value={searchTerm} onChange={handleChange} InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>,
                }}
            />
        </TextFieldDiv>
        <p>CLICK ENTER TO SEARCH</p>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <StyledButton onClick={onClick}>
                <p>SEARCH</p>
            </StyledButton>
        </div>
        <ContentDiv>
            {searchTerm && isFetching === false ?
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {searchResults ? searchResults.map((searchResult: any, index: React.Key) => (
                    <ResultCard key={index} trackName={searchResult.trackName} wrapperType={searchResult.wrapperType} artistName={searchResult.artistName} artworkUrl={searchResult.artworkUrl100} collectionName={searchResult.collectionName} />
                )): 
                <Loading>No Artists, Albums or Songs found</Loading>}
             {/*<ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
                <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />*/}
            </div>
             

            : searchTerm && isFetching === true ? <Loading>LoAdInG</Loading>
                :
            <Grid container spacing={4}>
                {categories.map((category, index) => (
                    <Grid item xs={12} md={6}>
                        <Card {...category} key={category.id} />
                    </Grid>
                ))}
            </Grid>}
        </ContentDiv>

      </Container>
    </div>
  );
}
