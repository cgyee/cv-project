import React from 'react'
import FormSection from './FormSection'
import FormHeader from './FormHeader'
import labels from './formData'

class Form extends React.Component {
    constructor(){
        super()
        this.submitForm = this.submitForm.bind(this)
        this.state = {
            "firstName": "",
            "lastName": "",
            "phoneNumber": "",
            "email": "",
            "school": "",
            "major": "",
            "attendance": "",
            "company": "",
            "title": "",
            "duration": "",
            "education": [],
            "workHistory": []
        }
        this.handleChange = this.handleChange.bind(this)
        // this.addInfo = this.addInfo.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]:value})
        console.log(name, value)
    }
    submitSection(event) {
        const {name, value} = event.target
        this.setState(prevState => {
            return {[name]: prevState[name].concat([value])}
        })
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
                    value={this.state}
                    handleChange={this.handleChange}
                />:
                <FormSection 
                    key="" 
                    details={items}
                    value={this.state}
                    handleChange={this.handleChange}
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