import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/dashboard/Screens/Profile/Profile"
import Review from "./components/dashboard/Screens/Profile/Approver_Review"
import Canon from "./components/dashboard/Screens/Main-Navigation/canonhere"
import Basket from "./components/dashboard/Screens/Main-Navigation/baskethere"
import Book from "./components/dashboard/Screens/Main-Navigation/bookhere"
import Chapter from "./components/dashboard/Screens/Main-Navigation/chaptershere"
import Verses from "./components/dashboard/Screens/Main-Navigation/verseshere"
import EditScreen from "./components/dashboard/Screens/Profile/EditScreen"
import verseSubmitted from "./components/dashboard/Screens/Profile/verseSubmitted";
// import RejectedVerses from "./components/dashboard/Screens/Profile/RejectedVerses";
import PendingVerses from "./components/dashboard/Screens/Profile/PendingVerses";
import ApprovedVerses from "./components/dashboard/Screens/Profile/ApprovedVerses";
import ApproveSplitScreen from "./components/dashboard/Screens/Profile/ApproveSplitScreen";
// import Redirector from "./components/dashboard/Screens/Main-Navigation/Redirector";
import PasswordChange from "./components/dashboard/Screens/Profile/PasswordChange";
import MyPublishedVerses from "./components/dashboard/Screens/Profile/MyPublishedVerses";
import ViewVerse from "./components/dashboard/Screens/Profile/ViewVerse";
import ApproverApprovedVerses from "./components/dashboard/Screens/Profile/ApproverApprovedVerses";
import ViewApprovedVerses from "./components/dashboard/Screens/Profile/ViewApprovedVerses";
import MyVersesThatWereRejected from "./components/dashboard/Screens/Profile/MyVersesThatWereRejected";
import VersesRejectedByApprover from "./components/dashboard/Screens/Profile/VersesRejectedByApprover";
import SecondRejectedPageApprover from "./components/dashboard/Screens/Profile/SecondRejectedPageApprover";
import SecondRejectedPagePublisher from "./components/dashboard/Screens/Profile/SecondRejectedPagePublisher";
import ViewPendingVerses from "./components/dashboard/Screens/Profile/ViewPendingVerses";
import About from "./components/dashboard/Screens/Main-Navigation/About";
import "aos/dist/aos.css";
// import NoMatch from "./components/dashboard/Screens/Main-Navigation/NoMatch";
import Health from "./Health"
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
          <div className="App">
            <Route exact path="/health" component={Health} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/About" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Canon" component={Canon} />
            <Route exact path="/Basket" component={Basket} />
            <Route exact path="/Basket/:BasketName" component={Book} />
            {/* <Route exact path="/Basket/:BasketName/Book" component={Book} /> */}
            <Route exact path="/Basket/:BasketName/Book/:BookName" component={Chapter} />
            <Route exact path="/Basket/:BasketName/Book/:BookName/Chapter/:ChapterName" component={Verses} />
            <Route path="/dashboard" component={Dashboard} />
            <Switch>
              <PrivateRoute path="/Edit" component={EditScreen} />
              <PrivateRoute exact path="/Submitted" component={verseSubmitted} />
              <PrivateRoute exact path="/Profile" component={Profile} />
              <PrivateRoute path="/Profile/Review" component={Review} />
              <PrivateRoute path="/ApproveView" component={ApproveSplitScreen} />

              <PrivateRoute exact path="/Profile/Approved" component={ApprovedVerses} />
              

              <PrivateRoute exact path="/Profile/MyApproved" component={ApproverApprovedVerses} />
              <PrivateRoute exact path="/Profile/MyApproved/View" component={ViewApprovedVerses} />

              {/* Pending for Publishers */}
              <PrivateRoute exact path="/Profile/Pending" component={PendingVerses} />
              <PrivateRoute exact path="/Profile/Pending/View" component={ViewPendingVerses} />

              {/* Rejected For Approver */}
              <PrivateRoute exact path="/Profile/RejectedVerses" component={VersesRejectedByApprover} />
              <PrivateRoute exact path="/Profile/RejectedVerses/View" component={SecondRejectedPageApprover} />

              {/* Rejected For Publisher */}
              <PrivateRoute exact path="/Profile/Rejected" component={MyVersesThatWereRejected} />
              <PrivateRoute exact path="/Profile/Rejected/View" component={SecondRejectedPagePublisher} />

              <PrivateRoute exact path="/Profile/MySubmitted" component={MyPublishedVerses} />
              <PrivateRoute exact path="/Profile/MySubmitted/View" component={ViewVerse} />

              <PrivateRoute exact path="/Review" component={Review} />
              <PrivateRoute exact path="/PasswordChange" component={PasswordChange} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;