import React, { Component } from 'react';
import {
    Row,
    Button,
    Container,
    Collapse,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    NavbarToggler
} from 'reactstrap'
import LeagueOfLegends from './LeagueOfLegends/LeagueOfLegends'
import Default from './Default/Default'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameSelected: '',
            games: ['LoL', 'WoW', 'ESO', 'Fornite', 'Dota II', 'PUBG', 'Destiny', 'Overwatch', 'Rocket League', 'CS: GO', 'Hearthstone', 'GTA V'],
            isOpen: false,
            dropdownOpen: false,
            hidden: false
        }
    }

    toggle = () => {
        this.setState({
           isOpen: !this.state.isOpen
        });
    }

    selectGame = (e) => {
        const { value } = e.target
        this.setState({
            gameSelected: value.toLowerCase()
        })
    }

    renderStatsForGame = (game) => {
        switch(game) {
            case 'lol':
                return <LeagueOfLegends />
            default:
                return <Default />
        }
    }

    render() {
        const { gameSelected, games, isOpen } = this.state
        return (
            <Container fluid>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Clash</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    {
                        games.map((game, indx) =>
                            <Button
                                className="game-buttons"
                                key={indx}
                                value={game}
                                onClick={this.selectGame}>{game}
                            </Button>
                        )
                    }
                    </Collapse>
                </Navbar>
                <Row className="Content">
                    {this.renderStatsForGame(gameSelected)}
                </Row>
            </Container>
        );
    }
}

export default App;
