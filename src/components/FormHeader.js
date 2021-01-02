import React from 'react'
import FormOutput from './FormOutput';
import FormSection from './FormSection';

class FormHeader extends React.Component {
        
    render() {
        const className = this.props.className
        const header = this.props.header
        const addButtonClassName = this.props.addButtonclassName
        const details = this.props.details
        const outputSection = this.props.value[this.props.type].map((items, i) => <FormOutput key={`out-${i}`} items={items} /> )

        
        return (
            <div className={className}>
                <h3>{header}</h3>
                {outputSection}
                <i 
                    className={addButtonClassName}
                    onClick={()=>this.props.submitSection(this.props.type)}
                    name={this.props.type}>
                    {this.props.addSymbol}
                </i>
                <FormSection  key={`formHSection-${this.props.header}`}value={this.props.value} details={details} handleChange={this.props.handleChange} />
            </div>
        )
    }
}

export default FormHeader