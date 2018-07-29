import React, { Component } from 'react';
import {
  Container,
  Row,
  Col, 
  Navbar,
  NavbarBrand,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from 'reactstrap'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props) 
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      regions: ['euw', 'eune', 'na', 'lck', 'lpl'],
      regionSelected: 'Region',
      tableHeaders: ['#', 'Name', 'MMR', 'Rank'],
      tableBody: [
        ['1', 'implemented', '1765', 'Gold II'],
        ['2', 'SoSoSorry', '2100', 'Diamond IV'],
        ['3', 'Tibe', '2210', 'Diamond III'],
        ['4', 'UpTownTroll', '1645', 'Gold III'],
        ['10', 'meow side', '1455', 'Gold V']
      ]
    };
  }

  componentDidMount() {
    fetch('https://www.poemist.com/api/v1')
      .then(res => res.json())
      .then(data => this.setState({
        players_List: data
      }))
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  selectRegion(e) {
    this.setState({
      regionSelected: e.target.value
    })
  }

  render() {
    const { regions, tableHeaders, tableBody } = this.state
    return (
      <Container fluid>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Clash</NavbarBrand>
        </Navbar>
        <Row className="Content">
          <Col md={{size: 6, offset: 3}}>
            <Row className="Input">
              <InputGroup>
                <InputGroupAddon addonType="prepend">L</InputGroupAddon>
                <Input placeholder="enter your postcode..." />
              </InputGroup>
              <InputGroup>
                <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                  <Button outline disabled>{this.state.regionSelected}</Button>
                  <DropdownToggle split outline />
                  <DropdownMenu>
                    {
                      regions.map((region, indx) =>
                        <DropdownItem
                          key={indx}
                          value={region}
                          onClick={(e) => this.selectRegion(e)}>
                          {region}
                        </DropdownItem>
                      )
                    }
                  </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input placeholder="summoner name..." />
              </InputGroup>
            </Row>
            <Row className="Table">
              <Table hover responsive>
                <thead>
                  <tr>
                    {
                      tableHeaders.map((theader, indx) =>
                        <th
                          key={indx}
                          value={theader}>
                          {theader}
                        </th>
                      ) 
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    tableBody.map((array, indx) =>
                      <tr key={indx}>
                        {
                          array.map((tbody, indx) =>
                            <th key={indx}>
                              {tbody}
                            </th> 
                          )
                        }
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </Row>
            <Row>
              <Button className="request">Claim your terroritory</Button>
            </Row>
          </Col> 
        </Row>
      </Container>
    );
  }
}

export default App;
