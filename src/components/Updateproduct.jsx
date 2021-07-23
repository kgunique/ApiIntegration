import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../Header'

const Updateproduct = () => {
    const history = useHistory('/update');
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            history.push('./')
        }
    }, [])
    return (
        <>
        <Header />
            <h1>Update Products</h1>
        </>
    )
}

export default Updateproduct
