import React , {Component} from 'react';
import img from '../img/img.svg';
import './general.css';

class Header extends Component{
    render(){
        return(
            <header className="s-header">
                <div className="row s-header__nav-wrap">
                    <nav className="s-header__nav">
                        <ul>
                            <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
                        </ul>
                    </nav>
                </div>
                <section id="hero" className="s-hero target-section">

        <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>

        <div className="row s-hero__content">
            <div className="column">

                <div className="s-hero__content-about">

                    <h1>I'm Jonathan Doe.</h1>

                    <h3>
                    I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
                    effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
                    and learn more <a className="smoothscroll" href="#about">about me</a>.
                    </h3>

                    <div className="s-hero__content-social">
                        <a href="#0"><i className="fab fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                        <a href="#0"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                        <a href="#0"><i className="fab fa-dribbble" aria-hidden="true"></i></a>
                        <a href="#0"><i className="fab fa-behance" aria-hidden="true"></i></a>
                        <a href="#0"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                    </div>

                </div>

            </div>
        </div>

        <div className="s-hero__scroll">
            <a href="#about" className="s-hero__scroll-link smoothscroll">
                <span className="scroll-arrow">
                <img src={img} alt="React Logo" />
                </span>
                <span className="scroll-text">Scroll Down</span>
            </a>
        </div>
    </section>

                <a className="s-header__menu-toggle" href="#0" title="Menu">
                    <span className="s-header__menu-icon"></span>
                </a>
            </header>
        )
    }
}

export default Header;