import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Dropdowns extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret color="info">
            Cari Apa Nih?&nbsp; &nbsp;
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className="lap" to="/cardgymnas">Gymnasium</DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="lap" to="/cardbasket">Lapangan Basket</DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="lap" to="/cardfutsal">Lapangan Futsal</DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="lap" to="/cardbad">Lapangan Badminton</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}