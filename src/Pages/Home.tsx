import * as React from 'react';
import {TextField, Container, Grid} from '@mui/material'
import Card from '../Components/Card'
import { categories } from '../data';
import styled from 'styled-components'
import {InputAdornment} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import burna from '../Assets/burna.png'
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

export default function Home (props: HomeProps) {

    const [searchTerm, setSearchTerm] = React.useState('');
    const { searchResults, isFetching, error} = useAppSelector((state) => state.search)
    const dispatch = useAppDispatch();


    const handleChange = (e: any) => {
        setSearchTerm(e.target.value);
    }

    React.useEffect(() => {
        if(searchTerm) {
            search(dispatch, searchTerm)
        }
    }, [searchTerm, dispatch])


    
  return (
    <div>
      <Container>
        <TextFieldDiv>
            <TextField fullWidth label="Search..." value={searchTerm} onChange={handleChange} InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>,
                }}
            />
        </TextFieldDiv>
        
        <ContentDiv>
            {searchTerm && isFetching === false ?
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {searchResults ? searchResults.map((searchResult: any, index: React.Key) => (
                    <ResultCard key={index} trackName={searchResult.trackName} wrapperType={searchResult.wrapperType} artistName={searchResult.artistName} artworkUrl={searchResult.artworkUrl100} collectionName={searchResult.collectionName} />
                )): null}
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
             

            : searchTerm && isFetching === true ? <p>LOading</p>
                :
            <Grid container spacing={4}>
                {categories.map((category, index) => (
                    <Grid item md={6}>
                        <Card {...category} key={category.id} />
                    </Grid>
                ))}
            </Grid>}
        </ContentDiv>

      </Container>
    </div>
  );
}
