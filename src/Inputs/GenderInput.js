import React, {Component} from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import './GenderInput.css'


class GenderInput extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    genderSelectedHandler = (gender) => {
        this.props.genderSelected(gender)
    }

    render() {
        return (
            <ButtonGroup>
                <Button
                    onClick={() => this.genderSelectedHandler('male')}
                    active={this.state.rSelected === 'male'}>
                    Male
                </Button>
                <Button
                    onClick={() => this.genderSelectedHandler('female')}
                    active={this.state.rSelected === 'female'}>
                    Female
                </Button>
            </ButtonGroup>
        )
    }
}

export default GenderInput
