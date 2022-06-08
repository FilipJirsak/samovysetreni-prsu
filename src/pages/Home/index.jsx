import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import gender from './../../img/gender-icon.png'
import icon1 from './img/Icons-flower.jpg'
import icon2 from './img/Icons-cancer.jpg'
import icon3 from './img/Icons-B.jpg'
import bellis from './img/Bellis-logo-transparent.png'

export const Switcher = () => {
    return (<div className="theme-switch-wrapper">
        <img className="gender" src={gender} />
        <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
        </label>
    </div>)
}


export const Home = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <Switcher />
                <div className="home-header__motto">
                    <h1 className="home-header__title">Samovyšetření prsu</h1>
                    <h4 className="home-header__subtitle">"TOUCH ME IF YOU CAN"</h4>
                </div>
            </header>
            <main>
                <div className="homepage-main">
                    <div className="homepage-main__body">
                        <div className="homepage-main__manual">
                            <label>Jak na to (.)(.)</label>
                            <Link
                                style={{ display: 'block', margin: '1rem 0' }}
                                to="/samovysetreni"
                            >
                                <img className="icon1" src={icon1} />
                            </Link>{' '}

                        </div>
                        <div className="homepage-main__calendar">
                            <label>Kalendář</label>
                            <Link
                                style={{ display: 'block', margin: '1rem 0' }}
                                to="/kalendar"
                            >
                                <img className="icon2" src={icon2} />
                            </Link>{' '}

                        </div>
                        <div className="homepage-main__questions">
                            <label>Co dělat, když...</label>
                            <Link
                                style={{ display: 'block', margin: '1rem 0' }}
                                to="/codelatkdyz"
                            >
                                <img className="icon3" src={icon3} />
                            </Link>{' '}

                        </div>
                    </div>
                   
                    <div className="bellis"> 
                        <div ><a className="bellis-facebook" href="https://www.facebook.com/mybellisky?locale=cs_CZ"><i class="lab la-facebook"></i></a></div>
                        <div><img className="Bellis" src={bellis} /></div>
                        <div className="bellis-info"><i class="las la-info-circle"></i></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

