import {BG_IMAGE, NAME} from "./Types";


const state={
    name:'',
    bgImage:''
}


const Reducers=(initialState=state,action)=>{
    switch (action.type){
        case NAME:
            return{
                ...state,
                name:action.data
            }

        case BG_IMAGE:
            return{
                ...state,
                bgImage:action.data
            }



    }
    return state;
}

export default Reducers