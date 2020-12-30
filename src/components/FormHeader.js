import React from 'react'
import FormSection from './FormSection';

class FormHeader extends React.Component {
    constructor(props) {
        super(props)
        this.addSection = this.addSection.bind(this);
        this.removeSection = this.removeSection.bind(this)
        this.state = {
            "sections": []
        }
    }
    addSection() {
        const section = this.props.details
        this.setState(prevState => {
            return {"sections": prevState.sections.concat([section])}
        })
    }

    removeSection() {
        this.setState(prevState => {
            return{"sections": prevState.sections.slice(0,-1)}
        })
    }
    render() {
        const className = this.props.className
        const header = this.props.header
        const removeButtonClassName = this.props.removeButtonclassName
        const addButtonClassName = this.props.addButtonclassName

        const sections = this.state.sections.map(details => {
            return (
                <FormSection  value={this.props.value} details={details} handleChange={this.props.handleChange} />
            )
        })
        const removeButton = sections.length ? (
            <i 
                className={removeButtonClassName}
                onClick={this.removeSection}>
                {this.props.removeSymbol}
            </i>
        ):
            ""
        
        return (
            <div className={className}>
                <h3>{header}</h3>
                <i 
                    className={addButtonClassName}
                    onClick={this.addSection}>
                    {this.props.addSymbol}
                </i>
                {sections}
                {removeButton}
            </div>
        )
    }
}

export default FormHeader