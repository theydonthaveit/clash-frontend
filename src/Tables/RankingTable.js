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
        let {playersRankData} = this.props
        this.setState({
            tableHeaders: playersRankData.gameHeaders,
            tableBody: playersRankData.areaPlayerStates
        })
    }

    render() {
        const {tableHeaders, tableBody} = this.state
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
