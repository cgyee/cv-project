import React from 'react'
import FormItem from './FormItem'

class FormSection extends React.Component {

    render(){
        const handleChange = this.props.handleChange
        const formItems = this.props.details.map((item, i) => {
            return ( 
                item.placeholder !== "description" ?
                <FormItem
                    key={`formItem-${i}`} 
                    label={item.label}
                    placeholder={item.placeholder}
                    className={item.className}
                    name={item.name}
                    value={this.props.value}
                    handleChange={handleChange}
                />
                :<textarea 
                    key={`formItem-${i}`}
                    className={item.className} 
                    placeholder={item.placeholder}
                    name={item.name}
                    value={this.props.value[item.name]}
                    onChange={handleChange}
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