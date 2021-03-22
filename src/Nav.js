import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'

function Nav() {

    {/**create a show variable as usestate to change */}
    const [show, handleShow] = useState(false);

    const history = useHistory();

    {/*a fucntion to make transition on Y direction when scroll */}
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
     {/**make a listener to active transition when scroll */}
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return() => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}> {/*only add the nav__black class when show is true*/}
            <div className="nav__contents">
                <img 
                    onClick={() => history.push('/')}
                    className="nav__logo" 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <img 
                    onClick={()=> history.push('/profile')}
                    className="nav__avatar" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKs6Nmxfy7zKOQJhztIsVT3VHNcnQL9kIJkg&usqp=CAU" alt=""/>
            </div>
        

        </div>
    )
}

export default Nav
