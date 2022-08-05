import * as React from 'react';
import {TextField, Container, Grid} from '@mui/material'
import Card from '../Components/Card'
import { categories } from '../data';
import styled from 'styled-components'
import {InputAdornment} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import burna from '../Assets/burna.png'
import ResultCard from '../Components/ResultCard'
import { useDispatch, useSelector } from 'react-redux';
import {search} from '../redux/searchRedux'

export interface HomeProps {
}

const ContentDiv = styled.div`
    margin-top: 50px;
`;

const TextFieldDiv = styled.div`
    margin-top: 50px
`;

export default function Home (props: HomeProps) {

    const [search, setSearch] = React.useState();
    const { searchResults, isFetching, error} = useSelector((state) => state.search)
    const dispatch = useDispatch();


    const handleChange = (e: any) => {
        setSearch(e.target.value);
        if (search) {
            dispatch(search(search))
        }
    }


    
  return (
    <div>
      <Container>
        <TextFieldDiv>
            <TextField fullWidth label="Search..." value={search} onChange={handleChange} InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>,
                }}
            />
        </TextFieldDiv>
        <ContentDiv>
            {search ?
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
             <ResultCard wrapperType='collection' artistName='Burna Boy' artworkUrl={burna} collectionName='Love, Damini' />
            </div>
             

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
