import About from './components/about';
import Header from './components/header.js';
import Contact from './components/contact';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Testimonials from './components/testimonials';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
