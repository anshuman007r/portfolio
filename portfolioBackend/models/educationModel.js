import mongoose, {
    Schema
} from 'mongoose';
import moment from 'moment'

const eductationSchema = new Schema({
    aboutType : {
        type : String,
        default : 'education'
    },
    userId: {
        type: String,
    },
    educationId:{
        type:String,
        default : ''
    },
    studyProgram: {
        type: String,
    },
    schoolName: {
        type: String,
    },
    yearOfCompletion:{
        type:String,
    },
    percentage :{
        type :String,
    },
    cgpa:{
        type : String,
    },
    date: {
        type: Date,
        default: moment().toDate()
    }
});

export default mongoose.model('Education', eductationSchema);