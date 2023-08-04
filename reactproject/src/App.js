import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div id ="head" className='header'><i><h1 >About Me</h1></i>
        <i><h1>Dhanush Priyan M</h1></i>
        <i><h2>Artifcial Intelligence and data Science</h2></i>
      </div>
      <div className='flexbox'>
        <div className='content'><ul>
        <u><h3>Education</h3></u>
            <li>10th </li>
            <li>12th</li>
            <li>college</li>
        </ul>
        </div >
        <div>
          {/* <img src ={require('dhanush/public/download (2).jpeg')} alt ='profile'></img> */}
        </div>
        <div className='content'>
            <ol>
                <u><h3>Skills</h3></u>
                <li>Machine learning</li>
                <li>Python</li>
                <li>Computer Vision</li>
                <li>Front-end development</li>
            </ol>
          </div>
            
          <div className='content'>
            <ol type="I" start="1">
              <u><h3> Hobbies</h3></u>
                <li>cricket</li>
                <li>Watching movies</li>
                <li>comics</li>
            </ol>
          </div>
            
          <div className='content'>
            <ol>
            <u><h3 >Socials</h3></u>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">facebook</a></li>
    
            </ol>
          </div>
          <div>
              <i><b><p id="new"></p></b></i>
              <button onclick="First()">First Year</button>
              <button onclick="Second()">Second Year</button>
          </div>
        </div>
           
    </div>
  );
}

export default App;
