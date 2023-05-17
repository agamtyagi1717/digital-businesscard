// import Footer from './Footer.js'

export default function Card(){
    return (
        <div className='container'>
            <div className="Card">

                <div className='picture'>
                    <img alt="pic" className="card-pic" src={require('./Images/card-pic-1.jpg')} />
                </div>

                <div className='About'>

                    <h1>Agam Tyagi</h1>
                    <h4>Frontend Developer</h4>
                    <a rel="noreferrer" target="_blank" href="https://agamtyagi1717.github.io/personal-website-main/">Portfolio</a> 
                    <br/>

                    <a href="mailto:agamtyagi1717@gmail.com">
                        <button classname="Email" type='button'>Email</button>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/agam-tyagi-651a35188/">
                        <button className="LinkedIn"  type='button'>LinkedIn</button>
                    </a>

                    <div className='About-content'>
                        <h2>About</h2>
                        <p>I am an aspiring Frontend web developer based in India. My passion lies in designing attractive and visually appealing user interfaces. I am committed to constantly enhancing my development skills and knowledge, and strive to learn something new every day.</p>
                        <h2>Skills</h2>
                        <p>I am proficient in a range of web development technologies including HTML, CSS, JavaScript, JQuery, Bootstrap, and React. In addition, I have programming skills in C and C++.</p>
                    </div>   
                    <br/>                                   
                    
                </div>
                <footer className="Footer">
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/agam_tyagi_07/">
                        <img alt="instagram" src={require('./Images/Instagram.png')} />
                    </a>

                    <a rel="noreferrer" target="_blank" href="https://github.com/agamtyagi1717">
                        <img alt="github" src={require('./Images/GitHub.png')} />
                    </a>                   
                    
                </footer>
                
               
            </div>
            
        </div>
    )
}

