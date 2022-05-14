import {BG_IMAGE, NAME} from "./Types";


export const handleSearch=(data)=>{
    return{
        type:NAME,
        data
    }
}

export const handleBgImage=(data)=>{
    return{
        type:BG_IMAGE,
        data
    }
}