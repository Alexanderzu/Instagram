import React from 'react';
import Profile from './Profile';
import Images from './Images';
import Footers from './Footers';
import Stories from './Stories';

export default class Content extends React.Component {
    render () {
        return ( 
            <div className='content'>
                <Profile />
                <Stories />
                <Images />
                <Footers />
            </div>
        );
    }
}
