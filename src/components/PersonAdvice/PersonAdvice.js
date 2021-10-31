import React, { useContext } from 'react';
import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import "./PersonAdvice.css"
import ThemeContext from '../../context/theme';

function PersonAdvice() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme==="light"?"person-advice":"person-advice-dark"}>
            <Avatar src="https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1q" />
            <div className={theme==="light"?"person-info":"person-info-dark"}>
                <h3>Mustafa Sarıoğlu</h3>
                <h4>@selamlar</h4>
            </div>
            <Button className={theme==="light"?"follow-btn":"follow-btn-dark"}>Takip et</Button>
        </div>
    )
}

export default PersonAdvice
