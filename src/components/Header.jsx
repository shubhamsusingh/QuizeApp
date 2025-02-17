import React from 'react'
import logoImg from '../assets/quiz-logo.png'
const Header = () => {
    return (
        <header>
            <img src={logoImg} alt="Quize logo" />
            <h2>react Quize</h2>
        </header>
    )
}

export default Header
