import axios from 'axios';
const SUBJECT_API_BASE_URL = "http://localhost:8080/api/v1/subjects";

class SubjectService{


    getSubjects(subject){
        return axios.post(SUBJECT_API_BASE_URL, subject);
    }
}

export default new SubjectService();
