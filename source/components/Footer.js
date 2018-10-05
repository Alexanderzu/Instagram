import React from 'react';

export default class Footer extends React.Component {
    render () {
        return ( 
            <li>
                { this.props.message }
            </li>
        );
    }
}
