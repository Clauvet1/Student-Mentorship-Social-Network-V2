import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './aboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/';
import Home from './home';
import Testimonials from './testimonials';
import Mentors from './mentee pages/mentors';
import MenteeProfile from './mentee pages/menteeProfile';
import Login from './Login';
import Signup from './Signup';
import MentorProfile from './mentor pages/mentorProfile';
import FAQ from './FAQ';
import Resources from './mentor pages/resources';
import Feedback from './feedback';
import Mentees from './mentor pages/mentees';
import Message from './message';
import { UserProvider } from './Usercontext';
import EditMProfile from './mentor pages/EditMProfile';
import EditMenteeProfile from './mentee pages/EditMenteeProfile';
import MentorProfileView from './mentor pages/mentorProfileView';
import MenteeProfileView from './mentee pages/menteeProfileView';


// import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button } from 'react-bootstrap';



function App() {
  return (
    <UserProvider>
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/menteeProfile">
              <MenteeProfile />
            </Route>
            <Route path="/menteeProfileView/:id">
              <MenteeProfileView />
            </Route>
            <Route path="/mentorProfile">
              <MentorProfile />
            </Route>
            <Route path="/mentorProfileView/:id">
              <MentorProfileView />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/mentees">
              <Mentees />
            </Route>
            <Route path="/feedback">
              <Feedback />
            </Route>
            <Route path="/message/:id">
              <Message/>
            </Route>
            <Route path="/editMProfile">
              <EditMProfile/>
            </Route>
            <Route path="/editMenteeProfile">
              <EditMenteeProfile/>
            </Route>
          </Switch>
        </div>
        <Footer />
        </div>
    </Router>
    </UserProvider>
  );
}

export default App;

