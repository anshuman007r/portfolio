import mongoose, {
    Schema
} from 'mongoose';
import moment from 'moment'

const contactDetail = new Schema({
    userId: {
        type: String,
    },
    name: {
        type: String,
    },
    emailId: {
        type: String,
    },
    mobileNo :{
        type: Number,
        default : 0
    },
    linkedinLink :{
        type: String,
    },
    githubLink :{
        type: String,
    },
    date: {
        type: Date,
        default: moment().toDate()
    }
});

export default mongoose.model('Contact', contactDetail);