import React , {Component} from 'react';
import img from '../img/img.svg';
import './general.css';

class Header extends Component{
    render(){
        if(this.props.data){
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var socials = this.props.data.social.map(function(network){
                return <a href={network.url} key={network.name}><i className={network.className} aria-hidden="true"></i></a>
            })
        }
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

                    <h1>I'm {name}</h1>

                    <h3>
                    I'm a {city} based <span>{occupation}</span> {description}
                    </h3>

                    <div className="s-hero__content-social">
                        {socials}
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