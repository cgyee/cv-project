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
            "degree": "",
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
        this.submitSection = this.submitSection.bind(this)
        // this.addInfo = this.addInfo.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]:value})
        console.log(name, value)
    }
    submitSection(name) {
        const value = name === "education" ?
            [this.state["school"], this.state["degree"], this.state["major"], this.state["attendance"]]
            :[this.state["company"], this.state["title"], this.state["duration"], this.state["description"]]
        
        console.log(value)
        this.setState(prevState => {
            return {[name]: prevState[name].concat([value])}
        })
    }


    submitForm(e) {
        e.preventDefault()
    }

    render() {
        const data = labels
        const sections = data.map((items, i) => {
            return items["header"] ?
                <FormHeader
                    key={`formSection-${i}`} 
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
                    submitSection={this.submitSection}
                />:
                <FormSection 
                    key={`formHeader-${i}`}  
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