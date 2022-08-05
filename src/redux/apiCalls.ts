import { searchFailure, searchStart, searchSuccess} from "./searchRedux"
import axios from 'axios'



export const search = async (dispatch: any, searchTerm: any) => {
    dispatch(searchStart());
    try{
        const res = await axios.get(`https://next-backend.netlify.app/${searchTerm}`)
        dispatch(searchSuccess(res.data.results))
        console.log(res)
    }catch(err: any){
        dispatch(searchFailure(err.response))
        console.log(err)
    }
}

