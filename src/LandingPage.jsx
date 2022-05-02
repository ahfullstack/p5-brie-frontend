import dr from './img/brie_dr.png'
import {Link } from 'react-router-dom'
export const LandingPage = () =>{
    return (
        <section className="landing-page">
            <div className="landing-mobile">

            </div>
            <div className="landing-lgr">
                <img src={dr} alt="Doctor with coat" />

            </div>
        </section>
    )
}