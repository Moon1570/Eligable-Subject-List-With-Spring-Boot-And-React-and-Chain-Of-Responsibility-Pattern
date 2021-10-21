import React, { Component } from 'react';
import SubjectListService from '../services/SubjectListService';

class SubjectComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            subject: []
        }
    }   

    componentDidMount(){
        SubjectListService.getSubjects.then((res => {
            
            console.log(res.data)
        
          //  this.setState({ subject: res.data});
        }));
    }


    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default SubjectComponent;