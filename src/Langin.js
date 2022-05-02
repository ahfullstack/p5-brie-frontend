import dr from './img/brie_dr.png'
import logo from './img/brie_main_logo.png'
import {Link } from 'react-router-dom'
import mobile from './img/brie_mobile.png'
export const Landing = () =>{
    return <section className="landing-page">
            <div className="landing-lgr">
                <img src={dr} className="img-doctor img" alt="Doctor with coat" />
                <img src={logo} className="img"alt="brie logo" />
            </div>
            <p className="hero-text">How are you feeling? <br/>
Keep track of your feelings with BRIE</p>

            <Link id="hero-btn" to="/status">Start Here</Link>
        </section>
    
}