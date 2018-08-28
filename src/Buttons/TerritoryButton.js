import React, { Component } from 'react'
import {
    Button
} from 'reactstrap'
import './TerritoryButton.css'

class TerritoryButton extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Button
                className="request">
                Claim your terroritory
            </Button>
        )
    }
}

export default TerritoryButton
