import React from 'react'
import FormItem from './FormItem'

class FormSection extends React.Component {

    render(){
        const formItems = this.props.details.map(item => {
            return ( 
                <FormItem
                    key={item.label} 
                    label={item.label}
                    placeholder={item.placeholder}
                    className={item.className}
                    name={item.name}
                    value={this.props.value}
                    handleChange={this.props.handleChange}
                />
            )
                
                
        })
        return (

            <div className="form--section">
                {formItems}
            </div>
        )
    }
}

export default FormSection