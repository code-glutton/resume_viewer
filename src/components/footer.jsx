import React , {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer class="s-footer">
            <div class="row">
                <div class="column large-4 medium-6 w-1000-stack s-footer__social-block">
                    <ul class="s-footer__social">
                        <li><a href="#0"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li><a href="#0"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#0"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#0"><i class="fab fa-dribbble" aria-hidden="true"></i></a></li>
                        <li><a href="#0"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
    
                <div class="column large-7 medium-6 w-1000-stack ss-copyright">
                    <span>© Copyright Ceevee 2021</span> 
                    <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                </div>
            </div>
    
            <div class="ss-go-top">
                <a class="smoothscroll" title="Back to Top" href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/></svg>
                 </a>
            </div>
        </footer>
        )
    }
}

export default Footer;