import React, { Component } from 'react'
import {
    Col,
    Row
} from 'reactstrap'
import Postcode from '../Postcode/Postcode'
import LeagueOfLegendsInput from '../Inputs/LeagueOfLegendsInput'
import RankingTable from '../Tables/RankingTable'
import TerritoryButton from '../Buttons/TerritoryButton'
import './LeagueOfLegends.css'


class LeagueOfLegends extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Col md={{size: 6, offset: 3}}>
                <Row className="Input">
                    <Postcode />
                    <LeagueOfLegendsInput />
                </Row>
                <Row>
                    <RankingTable game='lol' />
                </Row>
                <Row>
                    <TerritoryButton />
                </Row>
            </Col>
        )
    }
}

export default LeagueOfLegends
