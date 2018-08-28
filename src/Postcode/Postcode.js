import React, { Component } from 'react'
import {
    InputGroup,
    InputGroupAddon,
    Input
} from 'reactstrap'
// import './Postcode/postcode.css'

class Postcode extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <InputGroup>
                <InputGroupAddon addonType="prepend">L</InputGroupAddon>
                <Input placeholder="enter your postcode..." />
            </InputGroup>
        )
    }
}

export default Postcode
