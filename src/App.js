
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';


   function Home() {
  return <h2>Accueil</h2>;
}

function About() {
  return <h2>À propos</h2>;
}

function Contact(){
  return <iframe className='iframe' width="700" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=March%C3%A9%20Sandaga,dakar,senegal+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
  ;
  
}



function App() {
  return (
    <Router>
      <div>
        <nav className='nav'>
          <ul className='ul'>
            <li className='link'><Link to="/">Accueil</Link></li>
            <li className='link2'><Link to="/about">À propos</Link></li>
            <li className='link3'><Link to="/contact">Emplacement</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;