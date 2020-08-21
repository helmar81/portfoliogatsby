import PropTypes from 'prop-types'
import React from 'react'

import PassportPhoto from '../images/PassportPhoto.jpg'
import covid from '../images/covid.jpg'
import grapefruit from '../images/grapefruit.jpg'
import travel from '../images/travel.png'
import MYCVLogo from '../images/MYCVLogo.jpg'
import vietnamese from '../images/vietnamese.webp'
import TheSeedsLogo from '../images/TheSeedsLogo.jpg'
import vt from '../images/vt.jpg'
import come2greece from '../images/come2greece.jpeg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={PassportPhoto} alt="Helmar Bachle" />
          </span>
         
          <p>I am a self-taught Frontend Developer who is addicted to learning new web techniques and loves open source.</p>
          <p>I love what I do - When I wake up I am excited to write code and learn something new and feel accomplished when building an Application and don't wory about WIX taking Developer jobs. </p>
          <p>I have been spending plenty of time learning on blog posts, watching tutorials on YouTube and reading documentation from the popular Frameworks</p>
        <p>I created my first blog on Wordpress and figured out that there are better options building Websites and Apps.</p>
          <p>Angular, React, Gatsby and Ionic are my favorite Frameworks, they will continue to grow in 2021 and beyond.</p>
         <p>In the meantime I have created a portfolio of real projects</p>
         <p> By the way, check out my awesome work </p>

         
         <ul className="icons">
         <li>
           <a
             href="https://twitter.com/"  target="_blank" rel="noopener noreferrer"
             className="icon fa-twitter"
           >
             <span className="label">Twitter</span>
           </a>
         </li>
         <li>
           <a href="https://www.facebook.com/helmar.baechle"  target="_blank" rel="noopener noreferrer" className="icon fa-facebook">
             <span className="label">Facebook</span>
           </a>
         </li>
         <li>
           <a href="https://www.instagram.com/helmar.baechle/" target="_blank" rel="noopener noreferrer" className="icon fa-instagram">
             <span className="label">Instagram</span>
           </a>
         </li>
         <li>
           <a
             href="https://github.com/helmar81/"  target="_blank" rel="noopener noreferrer"
             className="icon fa-github"
           >
             <span className="label">GitHub</span>
           </a>
         </li>
       </ul>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
         
          <div>
          <span className="image main">
          <h3>Get the latest data</h3>
            <img src={covid} alt="covid-19" />
          </span>
          <p>Created with React using API from John Hopkins University </p>
           <a
            href="https://covidthepandemic.web.app/"  target="_blank" rel="noopener noreferrer">
           <h2 className="icons"> website </h2>
          </a>
          </div>

          <span className="image main">
          <h3>Countries of the world</h3>
            <img src={travel} alt="covid-19" />
          </span>
          <p>Built an App with Ionic about my Top Countries I have visited so far and all country flags using Angular Drag and Drop </p>
           <a
            href="https://mytopcountries.web.app/"  target="_blank" rel="noopener noreferrer">
            <h2 className="icons"> website </h2>
          </a>
       
          <span className="image main">
          <h3>CV / Resume</h3>
            <img src={MYCVLogo} alt="CV Resume" />
          </span>
          <p>Created with Angular and hosted on Firebase </p>
           <a
            href="https://helmarbachle.web.app/"  target="_blank" rel="noopener noreferrer">
            <h2 className="icons"> website </h2>
          </a>

          <span className="image main">
          <h3>Vietnam is awesome</h3>
            <img src={vietnamese} alt="vietnamese" />
          </span>
          <p>I have visited this beautiful country already five times. Therefore I built an blog with Gatsby.</p>
           <a
            href="https://vietnam-is-awesome.web.app/"  target="_blank" rel="noopener noreferrer">
            <h2 className="icons"> website </h2>
          </a>

          <span className="image main">
          <h3>Learning english</h3>
            <img src={TheSeedsLogo} alt="English school" />
          </span>
          <p>Created on the fly on request of a friend, still needs to be modified</p>
           <a
            href="https://seeds-vungtau.firebaseapp.com/"  target="_blank" rel="noopener noreferrer">
            <h2 className="icons"> website </h2>
          </a>

          <span className="image main">
          <h3>Travel Guide</h3>
            <img src={vt} alt="English school" />
          </span>
          <p>This Ionic App is dedicated to my favorite city in Vietnam</p>
           <a
            href="https://vungtaulike.web.app/"  target="_blank" rel="noopener noreferrer">
            <h2 className="icons"> website </h2>
          </a>

          <span className="image main">
          <h3>Come to Athens</h3>
            <img src={come2greece} alt="athens" />
          </span>
          <p>Created while I was living and working in Athens

          .</p>
           <a
            href="https://come2athens.web.app/"  target="_blank" rel="noopener noreferrer">
            <h2 className="icons"> website </h2>
          </a>
       
       
       
         

          <ul className="icons">
          <li>
            <a
              href="https://twitter.com/"  target="_blank" rel="noopener noreferrer"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/helmar.baechle"  target="_blank" rel="noopener noreferrer" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/helmar.baechle/"  target="_blank" rel="noopener noreferrer" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/helmar81/"  target="_blank" rel="noopener noreferrer"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
       
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={grapefruit} alt="grapefruit" />
          </span>
          <h3>Why I started to learn programming:</h3>
          <ul>
          <li>learn to solve problems that are not just computer related</li>
          <li>become a better thinker and learn things quicker</li>
          <li>not standarzided and mind numbing</li>
          <li>think in more logical manner</li>
          <li>unleash my creatvity</li>
          <li>extremly satisfying</li>
          </ul>
          
          <h3> experience</h3>
         
          
          <table>
          <tr>
            <th>Language</th>
           <th>years</th>
            <th>strength</th>
          </tr>
          <tr>
          <td>Wordpress</td>
         <td>+5</td>
          <td>++++</td>
        </tr>
 
        <tr>
        <td>HTML</td>
       <td>+5</td>
        <td>+++++</td>
      </tr>
 
      <tr>
      <td>CSS</td>
     <td>+5</td>
      <td>+++++</td>
    </tr>
 
    <tr>
    <td>Google Analytics</td>
   <td>+5</td>
    <td>++++</td>
  </tr>
 
 
    <tr>
    <td>Javascript</td>
   <td>+2</td>
    <td>++</td>
  </tr>
 
  
 
  <tr>
  <td>Firebase</td>
 <td>+2</td>
  <td>+++</td>
 </tr>
 
 
 
 
          <tr>
            <td>Angular</td>
           <td>+2</td>
            <td>++</td>
          </tr>
          <tr>
            <td>Ionic</td>
           <td>+2</td>
            <td>+++</td>
          </tr>
 
          <tr>
          <td>React</td>
         <td>+1</td>
          <td>++</td>
        </tr>
 
        <tr>
        <td>Gatsby</td>
       <td>+1</td>
        <td>++</td>
      </tr>
 
      <tr>
      <td>Vue</td>
     <td>+1</td>
      <td>++</td>
    </tr>
 
    <tr>
 <td>Jamstack</td>
 <td>+1</td>
 <td>++</td>
 </tr>
 
        </table>
        <ul className="icons">
        <li>
          <a
            href="https://twitter.com/"  target="_blank" rel="noopener noreferrer"
            className="icon fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/helmar.baechle"  target="_blank" rel="noopener noreferrer" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/helmar.baechle/"  target="_blank" rel="noopener noreferrer" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/helmar81/"  target="_blank" rel="noopener noreferrer"
            className="icon fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/"  target="_blank" rel="noopener noreferrer"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/helmar.baechle"  target="_blank" rel="noopener noreferrer" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/helmar.baechle/"  target="_blank" rel="noopener noreferrer" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/helmar81/"  target="_blank" rel="noopener noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
