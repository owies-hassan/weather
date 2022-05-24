import React, {Fragment, useEffect, useState} from 'react';

import './Error.css'
import {useSelector} from "react-redux";
const Error = ({status,Error,loading}) => {
    const{name}=useSelector(state=>state);


    return (
        <Fragment>
           <p> {name?Error&&<span>{'Error we cant find this country...'}</span>:status&&<span>{status}</span>}</p>
        </Fragment>
    );
};

export default Error;