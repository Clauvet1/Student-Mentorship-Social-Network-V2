import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './aboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/';
import Home from './home';
import Testimonials from './testimonials';
import Mentors from './mentors';
import AboutMentor from './aboutMentor';
import MenteeProfile from './mentee pages/menteeProfile';
import Login from './Login';
import Signup from './Signup';
import MentorProfile from './mentor pages/mentorProfile';
import FAQ from './FAQ';
import Resources from './mentor pages/resources';
import MeetingScheduler from './mentor pages/schedule';
import Feedback from './feedback';

// import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button } from 'react-bootstrap';



function App() {
  return (
    <Router>
        <div className="App">
        <Navbar />
        <div className="contents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/testimonials">
              <Testimonials />
            </Route>
            <Route path="/mentors">
              <Mentors />
            </Route>
            <Route path="/aboutMentor">
              <AboutMentor />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/menteeProfile">
              <MenteeProfile />
            </Route>
            <Route path="/mentorProfile">
              <MentorProfile />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/meetingScheduler">
              <MeetingScheduler />
            </Route>
            <Route path="/feedback">
              <Feedback />
            </Route>
          </Switch>
        </div>
        <Footer />
        </div>
    </Router>
  );
}

export default App;

