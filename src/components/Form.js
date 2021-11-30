import React from 'react';
import axios from 'axios'

class Form extends React.Component{
    

 
    render(){
        return(
            <div>
                <form onSubmit= {this.props.handleSubmit}>
                    <input 
                        placeholder= "Enter GitHub Handle"
                        onChange= {this.props.handleChange}
                    />
                    <button> SEARCH </button>
                </form>
            </div>
        )
    }
}

export default Form;