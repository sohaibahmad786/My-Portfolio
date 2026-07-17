import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios"
import './Portfolio.css'

const Portfolio = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Message, setMessage] = useState('')

    const Message_handler = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://127.0.0.1:8000/contact/', {
                Name,
                Email,
                Message,
            })
            alert("Your Message Successfully sent to Sohaib Ahmad")
            setName('')
            setEmail('')
            setMessage('')
        }
        catch {
            console.log(Error)
        }
    }

    return (

        <>
            <nav className="navbar">

                <div className='rightside'>
                    <div className="logo">Sohaib Ahmad</div>

                    <div
                        className="menu-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
                </ul>

            </nav>

            <section className="hero" id="home">

                <div className="hero-content">

                    <h1>Hi, I'm <span>Sohaib Ahmad</span></h1>

                    <h2>Full Stack Developer</h2>

                    <p>
                        I build responsive websites, scalable backend APIs
                        and modern web applications using React,
                        Python, Django and PostgreSQL.
                    </p>

                    <div className="buttons">

                        <a href="#projects">
                            <button>
                                View Projects
                            </button>
                        </a>

                        <a href="/SohaibAhmad_CV.pdf" download>

                            <button className="outline">
                                Download Resume
                            </button>

                        </a>

                    </div>

                </div>

            </section>

            {/* About Section */}

            <section className="about" id='about'>

                <h2>About Me</h2>

                <p>
                    I'm a passionate Full Stack Developer with hands-on experience in
                    React.js, Python, Django, Django REST Framework, PostgreSQL,
                    JavaScript, HTML, and CSS. I enjoy building responsive web
                    applications, secure REST APIs, and continuously learning modern
                    technologies.
                </p>

            </section>



            {/* Skills Section */}

            <section className="skills" id='skills'>

                <h2>My Skills</h2>

                <div className="skill-container">

                    <div className="card">
                        <h3>Frontend</h3>

                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Backend</h3>

                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Django REST Framework</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Database</h3>

                        <ul>
                            <li>SQL</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Tools</h3>

                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>VS Code</li>
                            <li>Postman</li>
                        </ul>
                    </div>

                </div>

            </section>

            {/* Projects */}

            <section className="projects" id='projects'>

                <h2>Projects</h2>

                <div className="project-container">

                    <div className="project-card">
                        <h3>Role Based User Management System (Full Stack)</h3>

                        <p>
                            Full-stack user management system built with React and Django REST Framework.
                            Features JWT authentication, role-based access (Admin/User), secure CRUD
                            operations, and PostgreSQL database integration.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Full Stack Booking System</h3>

                        <p>
                            Booking system with secure authentication, user registration,
                            dynamic slot availability, booking functionality, and REST APIs
                            integrated with a responsive React frontend.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Chat / Messaging System (Full Stack)</h3>

                        <p>
                            Real-time style messaging application using React and Django REST Framework.
                            Includes JWT authentication, messaging APIs, and conversation management.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>E-Commerce API</h3>

                        <p>
                            RESTful e-commerce backend with product management, categories,
                            shopping cart, orders, JWT authentication, and PostgreSQL support.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Social Media API</h3>

                        <p>
                            Social media backend with posts, comments, likes, follow/unfollow,
                            JWT authentication, validations, and secure REST APIs.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Secure Digital Banking API</h3>

                        <p>
                            Banking backend featuring deposits, withdrawals, fund transfers,
                            JWT authentication, role-based access control, and secure database transactions.
                        </p>
                    </div>

                </div>

            </section>

            {/* Education */}

            <section className="education" id='education'>

                <h2>Education</h2>

                <div className="edu-card">

                    <h3>BS Computer Science</h3>

                    <h4>Gomal University</h4>

                    <p>
                        Passionate about Backend Development, REST APIs,
                        Database Design and Full Stack Web Development.
                    </p>

                </div>

            </section>



            {/* Experience */}

            <section className="experience" id='experience'>

                <h2>Experience</h2>

                <div className="exp-card">

                    <h3>Backend Developer</h3>

                    <p>
                        Developed multiple REST APIs using Django REST Framework,
                        implemented Authentication, CRUD Operations,
                        Serializer Validation, JWT Authentication,
                        Role Based Access Control and PostgreSQL integration.
                    </p>

                </div>

            </section>



            {/* Contact */}

            <section className="contact" id="contact">

                <h2>Contact Me</h2>

                <div className="contact-container">

                    <div className="contact-info">

                        <img
                            src="/profile..jpg.jpeg"
                            alt="Profile"
                            className="profile"
                        />

                        <h3>Sohaib Ahmad</h3>

                        <p>Full Stack Developer</p>

                        <p>📧 sohaibahmad33888237@gmail.com</p>

                        <p>📱 +92-3499259961</p>

                        <div className='githubicon'>
                            <i class="fa-brands fa-github"></i>
                            <a
                                href="https://github.com/sohaibahmad786"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </div>

                        <br />

                        <div className='linkdinicon'>
                            <i class="fa-brands fa-linkedin"></i>
                            <a
                                href="https://www.linkedin.com/in/sohaib-ahmad-663984323?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                        </div>

                    </div>

                    <div className="contact-form">
                        <form onSubmit={Message_handler}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <textarea
                                placeholder="Your Message"
                                rows="6"
                                value={Message}
                                onChange={(e) => setMessage(e.target.value)}
                            />

                            <button type='submit'>
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

            </section>



            {/* Footer */}

            <footer>

                <p>© 2026 Sohaib Ahmad | Full Stack Developer</p>

            </footer>
        </>
    )
}



export default Portfolio
