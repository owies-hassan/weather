import React from 'react';
import {createTheme, styled, TextField, ThemeProvider} from "@mui/material";



import {useDispatch, useSelector} from "react-redux";
import {handleSearch} from "../../Redux/Actions";
import './SearchWeather.css'
const SearchWeather = () => {
    const{name}=useSelector(state=>state);
    const dispatch=useDispatch();

    const theme = createTheme({
        palette: {
            white: {
                main:'#fafafa',
            },
        },

    });



    return (
        <div className='content-search'>
<ThemeProvider theme={theme}>

    <input
        placeholder=' search here'
        value={name}
        onChange={(e)=>dispatch(handleSearch(e.target.value))}
    />
</ThemeProvider>

        </div>
    );
};

export default SearchWeather;