import React from "react";

export default class Header extends React.Component {


    render() {
        const {clickEvent} = this.props;
        return(
            <div className='Header'>
                <div id='stars'/>
                <div id='stars2'/>
                <div id='stars3'/>
                <div className='headerStrip'>
                    <div className='nameContainer'>
                        <hr/>
                        <h1>Krista Kannen</h1>
                        <hr/>
                    </div>
                    <h3>Front End developer from Austin, TX</h3>
                </div>
                <div className={'view-portfolio'} onClick={clickEvent}>
                    <i
                        className='fa fa-chevron-down arrow'
                        aria-hidden='true'/>
                    <div className={'arrow'}>Portfolio</div>
                </div>
            </div>
            
        )
    }
}


