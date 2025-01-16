import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import '.SzallasList.css';

export const SzallasCreate=()=>{
    const navigate=useNavigate();
    const vantaRef=useRef();
    const [data, setData]=useState({
        "name":'',
        "hostname": '',
        "location":'',
        "price": 0,
        "minimum_nights":'',
    })
}