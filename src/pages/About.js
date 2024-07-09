import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
    return (
    <div className='about'>
        <div className='aboutTop' 
        style={{ backgroundImage: `url(${MultiplePizzas})` }}>
        </div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nisl mauris. Ut a nisl at massa malesuada sagittis ac id sapien. Maecenas ac lobortis mi. Pellentesque lacinia egestas dui quis pulvinar. Vivamus ut tempor ipsum, quis tempor est. Nullam feugiat dui nec leo sollicitudin, sed congue lectus tempor. Suspendisse ac rhoncus justo, sit amet pretium massa. Etiam lobortis nisi ut augue dignissim molestie. Phasellus eu tempor lorem, sit amet elementum magna. Sed scelerisque, urna vel lobortis gravida, magna augue aliquet erat, ut faucibus sem erat sit amet metus. Ut tincidunt lorem ut diam porttitor consequat. Integer a mollis orci, eu pulvinar mauris. Nam placerat efficitur volutpat.</p>
        </div>
    </div>
    )
}

export default About
