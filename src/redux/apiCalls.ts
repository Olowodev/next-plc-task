import { searchFailure, searchStart, searchSuccess} from "./searchRedux"
import axios from 'axios'



export const search = async (dispatch: any, searchTerm: any) => {
    dispatch(searchStart());
    try{
        const res = await axios.get(`http://localhost:8000/${searchTerm}`)
        dispatch(searchSuccess(res.data))
        console.log(res)
    }catch(err: any){
        dispatch(searchFailure(err.response))
        console.log(err)
    }
}

