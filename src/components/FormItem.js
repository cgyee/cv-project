import React from 'react'

class FormItem extends React.Component {

    render() {
        const className = `form--input-group ${this.props.className}`
        return (
            <div className={className}>
                <label>{this.props.label}</label>
                <input className="form--input" placeholder={this.props.placeholder}></input>
            </div>
        )
    }
}

export default FormItem