import mongoose, {
    Schema
} from 'mongoose';
import moment from 'moment'

const projectSchema = new Schema({
    userId: {
        type: String,
    },
    projectTitle: {
        type: String,
    },
    projectDescription: {
        type: String,
    },
    projectId :{
        type : String,
        default: ''
    },
    githubLink :{
        type: String,
    },
    projectLink :{
        type: String,
    },
    date: {
        type: Date,
        default: moment().toDate()
    }
});

export default mongoose.model('Project', projectSchema);