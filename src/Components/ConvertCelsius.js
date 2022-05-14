import React from 'react';

const ConvertCelsius = (degree,mark) => {

    return (degree-273.15).toFixed() +' ° '+ mark;

};

export default ConvertCelsius;