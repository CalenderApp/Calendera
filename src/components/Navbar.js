import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { BrowserRouter as Router, Route } from "react-router-dom";

//component imports
import Calender from "./Calender";
import Events from "./Events";
import Reminders from "./Reminders";

//styling for SideNav
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const Navbar = () =>
 (
    <Router>
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              onSelect={selected => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="calender">
                <NavItem eventKey="calender">
                  <NavIcon>
                    <i
                      className="fas fa-calendar-week"
                      style={{ fontSize: "1.75em", color: "black" }}
                    />
                  </NavIcon>
                  <NavText style={{ color: "black" }}>Calender</NavText>
                </NavItem>

                <NavItem eventKey="reminders">
                  <NavIcon>
                    <i
                      className="fas fa-bell"
                      style={{ fontSize: "1.75em", color: "black" }}
                    />
                  </NavIcon>
                  <NavText style={{ color: "black" }}>Reminders</NavText>
                </NavItem>

                <NavItem eventKey="events">
                  <NavIcon>
                    <i
                      className="fas fa-pen-square"
                      style={{ fontSize: "1.75em", color: "black" }}
                    />
                  </NavIcon>
                  <NavText style={{ color: "black" }}>Events</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main>
              <Route path="/calender" exact component={props => <Calender />} />
              <Route path="/reminders" component={props => <Reminders />} />
              <Route path="/events" component={props => <Events />} />
            </main>
          </React.Fragment>
        )}
      />
    </Router>
  );

export default Navbar;
