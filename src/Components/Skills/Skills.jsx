import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <h1>Skills</h1>
            <p>Here are some of my skills on which I have been working on for the past 2 years.</p>
            <div className="container-big">
                <div className="container-small">
                    <h2>FRONTEND</h2>
                    <div className="skills-container">
                    <div className="skill">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
                            <div className="skill-name">React Js </div>
                        </div>
                        <div className="skill">
                            <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="" />
                            <div className="skill-name">HTML</div>
                        </div>
                        <div className="skill">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="" />
                            <div className="skill-name">CSS</div>
                        </div>
                        <div className="skill">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
                            <div className="skill-name">JavaScript</div>
                        </div>
                    </div>
                </div>
                <div className="container-small">
                    <h2>BACKEND</h2>
                    <div className="skills-container">
                        <div className="skill">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png" alt="" />
                            <div className="skill-name">Node Js</div>
                        </div>
                        <div className="skill">
                            <img src="https://camo.githubusercontent.com/f6128b6a17c28ec054b7ab67e595d39f503a0e17b116901141c05e1a1016985a/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" alt="" />
                            <div className="skill-name">Express Js</div>
                        </div>
                        <div className="skill">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="" />
                            <div className="skill-name">MySQL</div>
                        </div>
                        <div className="skill">
                            <img src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt="" />
                            <div className="skill-name">PHP</div>
                        </div>
                        <div className="skill">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
                            <div className="skill-name">MongoDb</div>
                        </div>
                    </div>
                </div>

                <div className="container-small">
                    <h2>ANDROID</h2>
                    <div className="skills-container">
                        <div className="skill">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="" />
                            <div className="skill-name">JAVA</div>
                        </div>
                        <div className="skill">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s" alt="" />
                            <div className="skill-name">XML</div>
                        </div>
                        <div className="skill">
                            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="" />
                            <div className="skill-name">Firebase</div>
                        </div>
                        <div className="skill">
                            <img src="https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png" alt="" />
                            <div className="skill-name">Android Studio</div>
                        </div>
                    </div>

                </div>
                <div className="container-small">
                    <h2>OTHERS</h2>
                    <div className="skills-container">
                        <div className="skill">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                    <div className="skill-name">GitHub</div>
                        </div>
                        <div className="skill">
                        <img src="https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" alt="" />
                    <div className="skill-name">Netlify</div>
                        </div>
                        <div className="skill">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" alt="" />
                    <div className="skill-name">Vs Code</div>
                        </div>
                        <div className="skill">
                        <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="" />
                    <div className="skill-name">Postman</div>
                        </div>
                    </div>
                    

                </div>
            </div>

        </div>
    )
}

export default Skills
