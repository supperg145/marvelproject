import React from 'react'

export default function Navbar(props) {
    

    return (
        <>
            <header>
                <nav className='navbar' role="navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        {/* <li><a href="about">About</a></li> */}
                    </ul>
                </nav>
            </header>
        </>
    )
}
