import React, { Component } from 'react';
import SubjectListService from '../services/SubjectListService';
import SubjectComponent from './SubjectComponent';

class FormComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            hscMainSubject: '',
            physicsMarks: '',
            chemistryMarks: '',
            biologyMarks: '',
            mathMarks: '',
            subjects: []

        }
    }

    changehscMainSubjectHandler= (event) => {
        this.setState({ hscMainSubject: event.target.value})
    }

    changePhysicsMarksHandler =(event) => {
        this.setState({
            physicsMarks: event.target.value
        })
    }

    changeChemistryMarksHandler=(event) => {
        this.setState({
            chemistryMarks: event.target.value
        })
    }
    
    changeBiologyMarksHandler=(event) => {
        this.setState({
            biologyMarks: event.target.value
        })
    }
    
    changeMathMarksHandler=(event) => {
        this.setState({
            mathMarks: event.target.value
        })
    }

    getSubjects= (e) =>{
        e.preventDefault();
        let data = {hscSubjects: this.state.hscMainSubject, physicsMarks: this.state.physicsMarks, chemistryMarks: this.state.chemistryMarks, biologyMarks: this.state.biologyMarks, mathMarks: this.state.mathMarks};
        console.log('DATA => ' + JSON.stringify(data));

        

        SubjectListService.getSubjects(data).then(res => {
                console.log(res.data);
                this.setState({ subjects: res.data});
         });
        
    }

    render() {
        return (
            <div>
                <div className="container"><br/><br/>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>HSC Main Subject Math or Biology?</label>
                                        <input placeholder="Math" name="hscMainSubject" className="form-control" value={this.state.hscMainSubject} onChange={this.changehscMainSubjectHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Physics Marks</label>
                                        <input type="number" max="20" placeholder="example: 10" name="physicsMarks" className="form-control" value={this.state.physicsMarks} onChange={this.changePhysicsMarksHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Chemistry Marks</label>
                                        <input type="number" max="20" placeholder="example: 10" name="chemistryMarks" className="form-control" value={this.state.chemistryMarks} onChange={this.changeChemistryMarksHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Biology Marks</label>
                                        <input type="number" max="20" placeholder="example: 10" name="biologyMarks" className="form-control" value={this.state.biologyMarks} onChange={this.changeBiologyMarksHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Math Marks</label>
                                        <input type="number" max="20" placeholder="example: 10" name="mathMarks" className="form-control" value={this.state.mathMarks} onChange={this.changeMathMarksHandler} />
                                    </div>

                                    <br/>
                                    
                                    <button className="btn btn-success" onClick={this.getSubjects}>Get Subject List</button>
                                </form>
                            </div>

                            <div>
                            <ul>
                                {this.state.subjects.map(person => {
                                    return (
                                    <li >
                                        {person.name} 
                                    </li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default FormComponent;