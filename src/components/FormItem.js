import React from 'react'

class FormItem extends React.Component {

    render() {
        const className = `form--input-group ${this.props.className}`
        const value = this.props.value[this.props.name]
        const handleChange = this.props.handleChange
        console.log("formitem ",this.props.name, value)
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