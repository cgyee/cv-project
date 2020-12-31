import React from 'react'
import FormOutput from './FormOutput';
import FormSection from './FormSection';
import { v4 as uuidv4 } from 'uuid'

class FormHeader extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.addSection = this.addSection.bind(this);
        
    // }
    // addSection() {
    //     const outputSection = this.props.value[this.props.type].map(items => {
    //         return <FormOutput key={uuidv4()} items={items} />
    //     })
        
    // }
    render() {
        const className = this.props.className
        const header = this.props.header
        const addButtonClassName = this.props.addButtonclassName
        const details = this.props.details

        
        return (
            <div className={className}>
                <h3>{header}</h3>
                {/* {outputSection} */}
                <i 
                    className={addButtonClassName}
                    // onClick={this.props.submitSection}
                    name={this.props.type}>
                    {this.props.addSymbol}
                </i>
                <FormSection  key={`formHSection-${this.props.header}`}value={this.props.value} details={details} handleChange={this.props.handleChange} />
            </div>
        )
    }
}

export default FormHeader