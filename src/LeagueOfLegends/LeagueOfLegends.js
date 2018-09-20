import React, { Component } from 'react'
import {
    Col,
    Row
} from 'reactstrap'
import Postcode from '../Postcode/Postcode'
import LeagueOfLegendsInput from '../Inputs/LeagueOfLegendsInput'
import RankingTable from '../Tables/RankingTable'
import TerritoryButton from '../Buttons/TerritoryButton'
import SelectGender from '../Inputs/GenderInput.js'
import RetrievePlayerRankings from '../Buttons/RetrievePlayerRankings.js'
import './LeagueOfLegends.css'


class LeagueOfLegends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postcode: null,
            region: null,
            summonerName: null,
            gender: null,
            data: null
        }
    }

    postcodeOnChange = (postcode) => {
        this.setState({
            postcode
        })
    }

    summonerNameOnChange = (summonerName) => {
        this.setState({
            summonerName
        })
    }

    regionSelected = (region) => {
        this.setState({
            region
        })
    }

    genderSelected = (gender) => {
        this.setState({
            gender
        })
    }

    retrievePlayerRankings = (data) => {
        this.setState({
            data
        })
    }

    reset = () => {
        console.log('clicked reset')
        this.setState({})
    }

    render() {
        const {postcode, region, summonerName, gender, data} = this.state
        return (
            <Col md={{size: 6, offset: 3}}>
                <Row className="Input">
                    <Postcode
                        postcodeOnChange={this.postcodeOnChange}
                        clearInput={data} />
                    <LeagueOfLegendsInput
                        clearInput={data}
                        regionSelected={this.regionSelected}
                        summonerNameOnChange={this.summonerNameOnChange} />
                    <SelectGender
                        clearInput={data}
                        genderSelected={this.genderSelected} />
                </Row>
                {
                    data
                        ? <RankingTable
                            playersRankData={data} />
                        : <RetrievePlayerRankings
                            onClick={this.retrievePlayerRankings}
                            postcode={postcode}
                            region={region}
                            summonerName={summonerName}
                            gender={gender} />
                }
                <Row>
                {
                    data ? <button onClick={this.reset}>NEW</button> : ''
                }
                </Row>
            </Col>
        )
    }
}

export default LeagueOfLegends
