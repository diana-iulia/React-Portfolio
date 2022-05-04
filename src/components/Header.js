import * as React from 'react';
import Contact from './Contact';

export default function Header() {
    return (
        <header id='topbar'>
            <div id='name'>Diana Iulia</div>
         
            <div id='contact'> 
                <Contact />
            </div>
        </header>
    );
}