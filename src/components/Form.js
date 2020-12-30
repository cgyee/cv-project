import React from 'react'
import FormSection from './FormSection'
import FormHeader from './FormHeader'
import labels from './formData'

class Form extends React.Component {
    constructor(){
        super()
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(e) {
        e.preventDefault()
    }

    render() {
        const data = labels
        const sections = data.map(items => {
            return items["header"] ?
                <FormHeader
                    key="" 
                    header={items.header}
                    className={items.className}
                    addButtonclassName={items.addButtonclassName}
                    removeButtonclassName={items.removeButtonclassName}
                    addSymbol={items.addSymbol}
                    removeSymbol={items.removeSymbol}
                    details={items.details}
                />:
                <FormSection 
                    key="" 
                    details={items} 
                />
        }) 
        return (
            <form onSubmit={this.submitForm} className="form--group">
                {sections}
            </form>
        )
    }
}

export default Form