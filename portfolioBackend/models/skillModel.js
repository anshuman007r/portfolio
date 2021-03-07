import mongoose, {
    Schema
} from 'mongoose';
import moment from 'moment'

const skillSchema = new Schema({
    aboutType : {
        type : String,
        default : 'skill'
    },
    skillId :{
        type : String,
        default: `SKILL-${moment().valueOf().toString()}`
    },
    skill :{
        type : String
    }
});

export default mongoose.model('Skill', skillSchema);