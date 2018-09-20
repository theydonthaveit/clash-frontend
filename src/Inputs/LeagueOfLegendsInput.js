import React, { Component } from 'react'
import {
    Col,
    Row,
    Input,
    InputGroup,
    InputGroupButtonDropdown,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
// import './LeagueOfLegendsInput.css'


class LeagueOfLegendsInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            regions: ['euw', 'eune', 'na', 'lck', 'lpl'],
            regionSelected: 'Region',
            splitButtonOpen: false
        }
    }

    toggleSplit = () => {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        })
    }

    selectRegion = (e) => {
        this.setState({
            regionSelected: e.target.value
        })

        this.props.regionSelected(
            e.target.value
        )
    }

    summonerNameOnChangeHandler = (e) => {
        this.props.summonerNameOnChange(
            e.target.value
        )
    }

    render() {
        const {regions, regionSelected} = this.state
        return (
            <Col>
                <Row>
                    <InputGroup>
                        <InputGroupButtonDropdown
                            addonType="prepend"
                            isOpen={this.state.splitButtonOpen}
                            toggle={this.toggleSplit}>
                            <Button outline disabled>{regionSelected}</Button>
                            <DropdownToggle split outline />
                            <DropdownMenu>
                            {
                                regions.map((region, indx) =>
                                    <DropdownItem
                                        key={indx}
                                        value={region}
                                        onClick={this.selectRegion}>
                                        {region.toUpperCase()}
                                    </DropdownItem> )
                            }
                            </DropdownMenu>
                        </InputGroupButtonDropdown>
                        <Input
                            placeholder="summoner name..."
                            onChange={this.summonerNameOnChangeHandler}/>
                    </InputGroup>
                </Row>
            </Col>
        )
    }
}

export default LeagueOfLegendsInput
