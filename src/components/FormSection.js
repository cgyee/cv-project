import React from 'react'
import FormItem from './FormItem'
import { v4 as uuidv4 } from 'uuid'

class FormSection extends React.Component {

    render(){
        const handleChange = this.props.handleChange
        const formItems = this.props.details.map(item => {
            return ( 
                // item.placeholder !== "description" ?
                <FormItem
                    key={uuidv4()} 
                    label={item.label}
                    placeholder={item.placeholder}
                    className={item.className}
                    name={item.name}
                    value={this.props.value}
                    handleChange={this.props.handleChange}
                />
                // :<textarea 
                //     key={uuidv4()}
                //     className={item.className} 
                //     placeholder={item.placeholder}
                //     name={item.name}
                //     value={this.props.value[item.name]}
                //     onChange={handleChange}
                // />
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