import React from "react";
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';


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
            <VerticalNavigation
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSection>
                    <VerticalItem name="item-1" label="Recent" />
                    <VerticalItem name="item-2" label="Projects" />
                    <VerticalItem name="item-3" label="Folders" />
                    <VerticalItem name="item-4" label="Settings" />
                    <VerticalItem name="item-5" label="Reports" />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

export default Navbar;
