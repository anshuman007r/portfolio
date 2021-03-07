import mongoose, {
    Schema
} from 'mongoose';
import moment from 'moment'

const aboutSchema = new Schema({
    userId: {
        type: String,
    },
    name: {
        type: String,
    },
    imageURL: {
        type: String,
    },
    currentRole :{
        type: String,
    },
    roleDescription:{
        type : String,
    },
    date: {
        type: Date,
        default: moment().toDate()
    }
});

export default mongoose.model('About', aboutSchema);