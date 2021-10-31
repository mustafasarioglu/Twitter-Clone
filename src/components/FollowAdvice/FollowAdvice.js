import ThemeContext from '../../context/theme'
import React,{useContext} from 'react'
import PersonAdvice from '../PersonAdvice/PersonAdvice'
import './FollowAdvice.css'

function FollowAdvice() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="follow-part">
            <div className={theme==="light"?"follow-header":"follow-header-dark"}>
                    <h3 className={theme==="light"?"follow-header-info":"follow-header-info-dark"}>Kimi takip etmeli</h3>
               </div>
                <PersonAdvice />
                <PersonAdvice />
                <PersonAdvice />
        </div>
    )
}

export default FollowAdvice
