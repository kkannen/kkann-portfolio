import React from "react";
import scrollToComponent from "react-scroll-to-component";

export default class Resume extends React.Component {
    componentDidMount = () => {
        scrollToComponent(this.topOfPage, { offset: 0, align: 'top', duration: 400})
    }

    render() {
        const {toggleClose} = this.props;
        return (
            <div className='resumeWrapper' ref={(section) => { this.topOfPage = section; }}>
                <div onClick={toggleClose} className={'close-resume'}>
                    <svg viewBox="0 0 10 10">
                        <path d="M0,0 L10,10 M10,0 L0,10"/>
                    </svg>
                </div>
            <div className="resume">
                <div className='resumeHeader'>
                    <div className='name'>
                        <h1>KRISTA KANNEN</h1>
                        <h2>Javascript Developer</h2>
                    </div>
                    <div className="contactInfo">
                        <p>kmkannen@gmail.com</p>
                    </div>
                </div>
                <hr/>
                <h3>A hard working and detail oriented front end developer and Trinity University alum with a passion for solving problems and creating elegant, user friendly applications.</h3>
                {/* SKILLS */}
                <div className="skillsAndEdu">
                    <div className='skillset'>
                    <div className='heading'>
                        <hr style={{width: "25%"}}/>
                        <h2 style={{width: "25%"}}>skill set</h2>
                        <hr style={{width: "25%"}}/>
                    </div>
                    <div className='skills'>
                        <h3>Front End Development</h3>
                        <p>React, Preact, Redux, React Router <br/>HTML5, CSS3, Sass, less<br/> Material UI, React-Bootstrap, Bootstrap</p>
                        <h3>Back End Development</h3>
                        <p>Mongodb, Express, Node</p>
                        <h3>Additional Skills</h3>
                        <p>Problem solving, version control (GIT),<br/> debugging (in Google chrome and VS Code)</p>
                        
                    </div>
                    </div>

                    {/* EDUCATION */}
                    <div className='education'>

                        <div className='heading'>
                            <hr style={{width: "25%"}}/>
                            <h2 style={{width: "25%"}}>Education</h2>
                            <hr style={{width: "25%"}}/>
                        </div>
                        <div className="edu">
                            <h3>Austin Coding Academy | Austin, Tx</h3>
                            <em> October, 2017 - July, 2018</em>
                            <p> Javascript Full Stack Certification</p>
                        </div> 
                        <div className="edu" >
                            <h3>Trinity University | San Antonio, Tx</h3>
                            <em> August, 2013 - May, 2017</em>
                            <p> Bachelor of Science: Biology</p>
                        </div> 
                    </div>        
                </div>
                {/* WORK EXPERIENCE */}

                <div className='heading'>
                    <hr/>
                    <h2>Experience</h2>
                    <hr/>
                </div>

                <div className='workExperience'>
                    <div className='job'>
                        <h3>Associate Software Engineer | January, 2019 - current</h3>
                        <em>OneSpot Inc. - Austin, TX</em>
                        <ul>
                            <li>Used Preact, vanilla JavaScript and CSS to seamlessly integrate third party software into customer sites</li>
                            <li>Onboarded customers and tailored SaaS platform to meet their needs.</li>
                            <li>Translated wireframes and mock-ups to interactive web elements.</li>
                        </ul>
                    </div>
                    <div className='job'>
                        <h3>Authenticity Analyst | September, 2017 - current</h3>
                        <em>Bazaarvoice - Austin, TX</em>
                        <ul>
                            <li>Use case management system to analyze fraudulent trends in consumer data.</li>
                            <li>Assisted with special project to improve fraud detection algorithm.</li>
                            <li>Ensure transparency between companies and consumers</li>
                        </ul>
                    </div>
                    <div className='job'>
                        <h3>Undergraduate Research Fellow | May, 2016 - May, 2017</h3>
                        <em>Trinity University, Department of Biology - San Antonio, TX</em>
                        <ul>
                            <li>Performed wet-lab assays and experiments including cell culture, cloning and confocal microscopy </li>
                            <li>Analyzed Data from from various experiments to be used in presentations and scientific research papers</li>
                            <li>Drafted and edited scientific protocol to meet the needs of the lab.</li>
                            <li>Co-authored Scientific papers about the role of ZO-1 -- a cytoplasmic scaffolding protein -- in the membrane of epithelial cells.</li>
                        </ul>
                    </div>
                </div>

                {/* PROJECTS */}

                <div className='heading'>
                    <hr/>
                    <h2>Projects</h2>
                    <hr/>
                </div>
                <div className='projects'>
                    <div className='project'>
                        <h3>Computer Science Study Guide</h3>
                        <em>MERN Stack</em>
                        <p>There are many valuable learning resources on the web, but at times, they can be difficult to navigate. This study guide was created to streamline the process of learning computer science by gathering those resources in one place, and allowing the user to save and track their progress as they learn. 
                        This is a MERN stack app that includes a basic authentication system that uses JWT and bcrypt.</p>
                        <a href="https://github.com/kkannen/cs-study-guide" target="blank"> CODE  </a>| 
                        <a href="https://cs-study-guide.herokuapp.com/" target="blank">  DEMO</a>
                    </div>
                    <div className='project'>
                        <h3>Authentication</h3>
                        <em>MERN Stack</em>
                        <p>An authentication system built with Mongodb, Express, React, Redux, and Node, JWT and bcrypt and styled using components from Material UI. This system is fairly simple and is meant to be easy to integrate into any application that calls for authentication.</p>
                        <a href="https://github.com/kkannen/authentication-starter" target="blank"> CODE  </a>| 
                        <a href="https://auth-starter-code.herokuapp.com/" target="blank">  DEMO</a>
                    </div>
                    <div className='project'>
                        <h3>Driftwood</h3>
                        <em>React</em>
                        <p>This application in a remodel of the Driftwood Estate Winery's web page. In this redesign, I have updated styling, embedded a map to the winery, and rearranged the user Interface to make the site easier to navigate. This application was built using React and styled using components from MaterialUI.</p>
                        <a href="https://github.com/kkannen/driftwood-redesign" target="blank"> CODE  </a>| 
                        <a href="https://kkannen.github.io/driftwood-redesign/" target="blank">  DEMO</a>
                    </div>               
                </div>
                </div>
            </div>
        )
    }
}

