import React, { Component } from 'react';

class Footer extends Component {
    
  render() {
    return (
      <div className="footerIcon">
        <a className = 'iconContainer' href = {this.props.link} >
          <div className='lilDot'/>
          <div className = 'footIcon' style = {{backgroundImage: `url(${this.props.icon})`}}/>
        </a>
      </div>
    );
  }
}

export default Footer;
