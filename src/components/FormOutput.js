import React from 'react' 

class FormOutput extends React.Component {

    render() {
        const items = this.props.items.map((item, i) => <li key={`ul-${i}`}>{item}</li>)
        return (
            <div className="form--output">
                <i className="material-icons" onClick={()=>this.props.delete(this.props.type, items)}>delete</i>
                <ul className="unordered-list">
                    {items}
                </ul>
            </div>
        )
    }
}

export default FormOutput