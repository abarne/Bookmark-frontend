import React, { useState, useEffect } from 'react';
import axios from 'axios';

const mainCat = (props) => {
	console.log('we are in main cat');
	console.log('data,', props.data);
	return <h1>Category 1: {props.data.title}</h1>;
};

export default mainCat;
