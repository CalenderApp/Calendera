import React from "react";
//import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calender from './Calender';

function Navbar() {
    return (
        <div>
        
        <Router>
                <Route path='/' exact component={Calender}/>
        </Router>
        </div>

    )
}

export default Navbar;

/*
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item 1',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <Router>
            <VerticalNavigation
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSection>
                    <VerticalItem name="item-1" label="My Calender"><Route path="/" exact component={Calender}/></VerticalItem>
                    <VerticalItem name="item-2" label="Reminders" href="projects" />
                    <VerticalItem name="item-3" label="Events" href=""/>
                </VerticalSection>
            </VerticalNavigation>
            </Router>
        );
    }
}

export default Navbar;*/
