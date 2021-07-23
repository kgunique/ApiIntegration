import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../Header'
const Addproduct = () => {
    const history = useHistory('/add');
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            history.push('/')
        }
    }, [])
    return (
        <div>
            <Header />
            <h1>Add Productsa</h1>
        </div>
    )
}

export default Addproduct
