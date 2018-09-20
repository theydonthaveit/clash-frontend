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

    postcodeOnChangeHandler = (e) => {
        let {value} = e.target
        this.setState({
            postcode: value
        })
        this.props.postcodeOnChange(
            value.toLowerCase().replace(/ /g,'')
        )
    }

    render() {
        return (
            <InputGroup>
                <InputGroupAddon addonType="prepend">L</InputGroupAddon>
                <Input
                    maxLength={8}
                    placeholder="enter your postcode..."
                    onChange={this.postcodeOnChangeHandler} />
            </InputGroup>
        )
    }
}

export default Postcode
