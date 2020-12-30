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
        console.log("formheader ", this.props.details)
        const sections = this.state.sections.map(details => {
            console.log("details", details)
            return (
                <FormSection  details={details} />
            )
        })
        const removeButton = sections.length ? (
            <button 
                className={this.props.removeButtonclassName}
                onClick={this.removeSection}>
                {this.props.removeSymbol}
            </button>
        ):
            ""
        
        return (
            <div className={this.props.className}>
                <h3>{this.props.header}</h3>
                <button 
                    className={this.props.addButtonclassName}
                    onClick={this.addSection}>
                    {this.props.addSymbol}
                </button>
                {sections}
                {removeButton}
            </div>
        )
    }
}

export default FormHeader