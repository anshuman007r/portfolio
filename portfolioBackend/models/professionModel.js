import mongoose, {
    Schema
} from 'mongoose';
import moment from 'moment'

const professionSchema = new Schema({
    aboutType : {
        type : String,
        default : 'profession'
    },
    userId: {
        type: String,
    },
    professionId :{
        type : String,
        default: `PROF-${moment().valueOf().toString()}`
    },
    companyName: {
        type: String,
    },
    companyType: {
        type: String,
    },
    roleInYourCompany :{
        type: String,
    },
    roleDescription:{
        type : String,
    },
    joiningDate: {
        type: Date,
        default: moment().toDate()
    },
    releasingDate: {
        type: Date,
        default: moment().toDate()
    },
    date: {
        type: Date,
        default: moment().toDate()
    }

});

export default mongoose.model('Profession', professionSchema);