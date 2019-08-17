import React from "react";
import scrollToComponent from "react-scroll-to-component";
import home from "./img/homeDark.png"
import github from "./img/githubDark.png"
import codepen from "./img/codepenDark.png"
import twitter from "./img/twitterDark.png"
import linkedin from "./img/linkedinDark.png"
import Footer from './Components/footer';
import Header from './Components/Header'
import Resume from "./Components/Resume";
import './App.css'

const projects = [
  {
    title: "CS Study Guide",
    description: "A computer science study guide created using Reactjs and redux on the front end, and Nodejs, Express, and MongoDb on the backend. This is a redesign of the page teachyourselfcs.com",
    codeLink: "https://github.com/kkannen/cs-study-guide",
    liveLink: "https://cs-study-guide.herokuapp.com/"
  },
  {
    title: "Authentication",
    description: "A simple MERN stack authentication system.",
    codeLink: "https://github.com/kkannen/authentication-starter",
    liveLink: "https://auth-starter-code.herokuapp.com/"

  },
  {
    title: "Calculator",
    description: "A small calculator monster made using HTML, CSS and vanilla Javascript",
    codeLink: "https://github.com/kkannen/calculator/",
    liveLink: "https://kkannen.github.io/calculator/"

  },
  {
    title: "The Office Game",
    description: "This is a clicker game inspired by the tv show The Office and the game mechanic of idle clicker games like Cookie Clicker. This was created using React.js",
    codeLink: "https://github.com/kkannen/the-office-game",
    liveLink: "https://kkannen.github.io/the-office-game/"
  },
  {
    title: "To Do List",
    description: "A MERN stack to do list app made with GraphQl and Apollo.",
    codeLink: "https://github.com/kkannen/mern-to-do-list",
    liveLink: "https://kkannen.github.io/mern-to-do-list/"

  },
  {
    title: "Games",
    description: "A collection of games written with Reactjs",
    codeLink: "https://github.com/kkannen/JS-Final",
    liveLink: "https://kkannen.github.io/JS-Final/"

  },
  {
    title: "Driftwood",
    description: "This is a redesign of the Driftwood Estate Winery website. This page was created using Reactjs, React Router, and Redux",
    codeLink: "https://github.com/kkannen/driftwood-redesign",
    liveLink: "https://kkannen.github.io/driftwood-redesign/"
  }
];

const footerIconsList = [
  {icon: home, link: '/'},
  {icon: github, link: 'https://github.com/kkannen'},
  {icon: codepen, link: 'https://codepen.io/kkannen/'},
  {icon: twitter, link: 'https://twitter.com/kkannencoding/'},
  {icon: linkedin, link: 'https://www.linkedin.com/in/krista-kannen-6b1a4498/'}
];
export default class App extends React.Component {

  state = {
    arrowClicked: false,
    homeClicked: true,
    resumeOpened: false
  };


  componentDidMount = () => {
    this.scrollToTop()
  };

  scrollToTop = () => {
    scrollToComponent(this.header, { offset: 0, align: 'top', duration: 400})
  };

  renderTiles = () => {
    return projects.map((project, index) => {
      return(
          <div className={`tile tile${index + 1}`} key={project.title}>
            <div className='overlay'>
              <p className='title'>{project.title}</p>
              <p className='description'>{project.description}</p>
              <div className='buttons'>
                <a href={project.codeLink} ><button>Code</button></a>
                <a href={project.liveLink} ><button>View App</button></a>
              </div>
            </div>
          </div>
      )})
  };

  renderFooter = () => {
    return footerIconsList.map((obj, key) => {
      if(obj.icon === home) {
        return(
            <div className="footerIcon" key={key}>
              <div className='iconContainer' onClick={this.scrollToTop}>
                <div className='lilDot'/>
                <div className='footIcon' style={{backgroundImage: `url(${obj.icon})`}}/>
              </div>
            </div>
        )
      }
      return(
          <Footer
              key = {key}
              icon = {obj.icon}
              link = {obj.link}/>)})
  };

  whereToScroll = () => {
    if(this.state.arrowClicked) {
      scrollToComponent(this.Portfolio, { offset: 0, align: 'top', duration: 400})
      //this.setState({homeClicked:false})
    }
  };

  toggleClicked = () => {
    this.setState({arrowClicked: !this.state.arrowClicked})
  };

  handleToggleResume = () => {
    this.setState({resumeOpened: !this.state.resumeOpened})
  };

  renderResume = () => {
    return this.state.resumeOpened ?
      <Resume toggleClose={this.handleToggleResume}/> :
        null;
  };

  render() {
    this.whereToScroll();
    return (
        <div className="PortPage">
          <Header
              clickEvent={this.toggleClicked}
              ref={(section) => { this.header = section; }}/>
          <h1 ref={(section) => { this.Portfolio = section; }}>Portfolio</h1>
          <p className={'click-for-res'} onClick={this.handleToggleResume}> Click Here to view my Resume </p>
          <div className={'resume-container'}>{this.renderResume()}</div>
          <div className='gridWrapper'>

            {this.renderTiles()}
          </div>
          <div className="footer">
            {this.renderFooter()}
          </div>
        </div>
    )
  }
}