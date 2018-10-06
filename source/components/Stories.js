import React from 'react';
import stories from '../theme/assets/stories';
import Story from './Story';

export default class Stories extends React.Component {
    render () {
        const storiJSX = stories.map((stori) => {
            return <Story
                key = { stori.id }
                src = { stori.src }
                message = { stori.message} 
            />
        })
        return ( 
            <div className='stories'>
                { storiJSX }
            </div>
            
        );
    }
}
