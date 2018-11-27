import React, { Component } from 'react';

export default class Create extends Component {

    constructor(props){
        super(props);

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onchangeBusinessName = this.onchangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            business_gst_name: ''
        }
    }

    onChangePersonName(e){
        this.setState({
            person_name: e.target.value
        });
    }
    onchangeBusinessName(e){
        this.setState({
            business_name: e.target.value
        });
    }
    onChangeGstNumber(e){
        this.setState({
            business_gst_name: e.target.value
        });
    }

onSubmit(e){
    e.preventDefault();
    console.log('The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_gst_number}')
    this.setState({
        person_name: '',
        business_name: '',
        business_gst_name: ''
    })
}

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Add new business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person name:</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.person_name}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Business name:</label>
                        <input 
                            type="text" 
                            className="form-control"
                            
                            />
                    </div>
                    <div className="form-group">
                        <label>GTS number:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}