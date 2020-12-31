import React from 'react'
import FormSection from './FormSection'
import FormHeader from './FormHeader'
import labels from './formData'
import { v4 as uuidv4 } from 'uuid'

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
            "jobInfo": "",
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
        const {name} = event.target
        const value = name === "education" ?
            [this.state["school"], this.stat["degree"], this.state["major"], this.state["attendance"]]
            :[this.state["company"], this.stat["title"], this.state["duration"], this.state["description"]]
            
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
                    key={uuidv4()} 
                    header={items.header}
                    className={items.className}
                    addButtonclassName={items.addButtonclassName}
                    removeButtonclassName={items.removeButtonclassName}
                    addSymbol={items.addSymbol}
                    removeSymbol={items.removeSymbol}
                    details={items.details}
                    type={items.type}
                    value={this.state}
                    handleChange={this.handleChange}
                />:
                <FormSection 
                    key={uuidv4()} 
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