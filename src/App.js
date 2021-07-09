import About from './components/about';
import Header from './components/header.js';
import Contact from './components/contact';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import { Component } from 'react';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo:"bar",
      resumeData:{}
    }
  }

getResumeData = () => {
  $.ajax({
    url:'http://localhost:3000/js/resumeData.json',
    dataType:'json',
    cache:false,
    success: function(data){
      this.setState({
        resumeData:data
      })
    }.bind(this),
    error: function(xhr, status, error){
      console.log(error);
      alert(error);
    }.bind(this)
  })
}

  componentDidMount(){
    this.getResumeData();
  }

  render(){
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
