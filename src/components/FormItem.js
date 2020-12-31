import React from 'react'

class FormItem extends React.Component {

    render() {
        const className = `form--input-group ${this.props.className}`
        const handleChange = this.props.handleChange
        return (
            <div className={className}>
                <label>{this.props.label}</label>
                <input 
                    name={this.props.name}
                    value={this.props.value[this.props.name]}
                    className="form--input" placeholder={this.props.placeholder}
                    onChange={handleChange}>
                </input>
            </div>
        )
    }
}

export default FormItem