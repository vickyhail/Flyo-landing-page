//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Firstsectionimage from './components/Firstsectionimage';
import Firstsection from './components/Firstsection';
import Lastimage from './components/Lastimage';
import Secondsection from './components/Secondsection';
import Thirdsection from './components/Thirdsection';
import Getstarted from './components/Getstarted';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Socialicon from './components/Socialicon';
import Developby from './components/Developby';

function App() {
  return (
    <div>
        <Navbar />
    
         <div className="section">
            <Firstsectionimage />
            <Firstsection />
            </div>
            <div className="secondsection">
            <Lastimage />
            <Secondsection />
            </div>
            <div className="thirdmainsection">
              <Thirdsection />
              <Getstarted />
            </div>
            <div className="footer">
              <Footer />
              <Aboutus />
              <Contactus />
              <Socialicon />
              </div>
              <Developby />
          
    </div>
    
  );
}

export default App;
