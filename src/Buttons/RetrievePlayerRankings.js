import React, { Component } from 'react'
import {Button} from 'reactstrap'


class RetrievePlayerRankings extends Component {
    constructor(props) {
        super(props)
    }

    onClickHandler = () => {
        // TODO fetch results from backend
        let data = {
            gameHeaders: ['#', 'Name', 'MMR', 'Rank'],
            areaPlayerStates: [
                ['1', 'implemented', '1765', 'Gold II'],
                ['2', 'SoSoSorry', '2100', 'Diamond IV'],
                ['3', 'Tibe', '2210', 'Diamond III'],
                ['4', 'UpTownTroll', '1645', 'Gold III'],
                ['10', 'meow side', '1455', 'Gold V']
            ],
        }
        this.props.onClick(data)
    }

    render() {
        const { summonerName, region, postcode, gender } = this.props
        return (
            <Button
                disabled={
                    !summonerName ||
                    !region ||
                    !postcode ||
                    !gender }
                    onClick={() => 
                    this.onClickHandler(
                        summonerName,
                        region,
                        postcode,
                        gender )}>Trounce</Button>
        )
    }
}

export default RetrievePlayerRankings
