import React from 'react' 
import { v4 as uuidv4 } from 'uuid'

class FormOutput extends React.Component {

    render() {
        const items = this.props.items.map(item => <li key={uuidv4()}>{item}</li>)
        return (
            <div class="form--output">
                <i class="material-icons">delete</i>
                <ul class="unordered-list">
                    {items}
                </ul>
            </div>
        )
    }
}

export default FormOutput