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
    });

    useEffect(()=>{
        const vantaEffect=NET({
            el: vantaRef.current,
            THREE,
            color: 0xff0000,
            backgroundColor: 0x001f3f,
            points: 12.0,
            maxDistance: 20.0,
            spacing: 18.0,
        });
        return ()=>{
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

};
