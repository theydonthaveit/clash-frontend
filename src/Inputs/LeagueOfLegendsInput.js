import React, { Component } from 'react'
import {
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

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        })
    }

    selectRegion(e) {
        this.setState({
            regionSelected: e.target.value
        })
    }

    render() {
        const {regions} = this.state
        return (
            <InputGroup>
                <InputGroupButtonDropdown
                    addonType="prepend"
                    isOpen={this.state.splitButtonOpen}
                    toggle={() => this.toggleSplit()}
                    >
                    <Button outline disabled>{this.state.regionSelected}</Button>
                    <DropdownToggle split outline />
                    <DropdownMenu>
                    {
                        regions.map((region, indx) =>
                            <DropdownItem
                                key={indx}
                                value={region}
                                onClick={(e) => this.selectRegion(e)}>
                                {region}.toUpperCase()
                            </DropdownItem> )
                    }
                    </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input placeholder="summoner name..." />
            </InputGroup>
        )
    }
}

export default LeagueOfLegendsInput
