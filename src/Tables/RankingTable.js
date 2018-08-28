import React, { Component } from 'react'
import {
    Row,
    Table
} from 'reactstrap'
import './RankingTable.css'


class RankingTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableHeaders: [],
            tableBody: []
        }
    }

    componentWillMount() {
        const GAMEHEADERS = {
            'lol': ['#', 'Name', 'MMR', 'Rank'],
            'fornite': []
        }

        const GAMEBODY = {
            'lol': [
                ['1', 'implemented', '1765', 'Gold II'],
                ['2', 'SoSoSorry', '2100', 'Diamond IV'],
                ['3', 'Tibe', '2210', 'Diamond III'],
                ['4', 'UpTownTroll', '1645', 'Gold III'],
                ['10', 'meow side', '1455', 'Gold V']
            ],
            'fornite': []
        }

        this.setState({
            tableHeaders: GAMEHEADERS[this.props.game],
            tableBody: GAMEBODY[this.props.game]
        })
    }

    render() {
        const {tableHeaders, tableBody} = this.state
        console.log(tableHeaders)
        return (
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
                                </th> )
                        }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tableBody.map((array, indx) =>
                            <tr key={indx}>
                            {
                                array.map((tbody, indx) =>
                                    <th
                                        key={indx}>
                                        {tbody}
                                    </th> )
                            }
                            </tr> )
                    }
                    </tbody>
                </Table>
            </Row>
        )
    }
}

export default RankingTable
