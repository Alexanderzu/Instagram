import React from 'react';
import links from '../theme/assets/links';
import Footer from './Footer';

export default class Footers extends React.Component {
    render () {
        const footersJSX = links.map((footer) => {
            return <Footer
                key = { footer.id }
                message = { footer.message} 
            />
        })
        return ( 
            <div className='footer'>
                <ul>
                    { footersJSX }
                </ul>
            </div>
        );
    }
}
