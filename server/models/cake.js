var mongoose = require('mongoose'); 

/* Define your schema here */
var CakeSchema = new mongoose.Schema({
    baker: {type: String, required: [true, "baker name cannot be empty!"], minlength:[3,'baker Name needs at least 3 characters!']},
    image: {type: String, required: [true, "image url cannot be empty!"]},
    ratings:{ type:Array, default:{
        rates:{type:Array, default:[] },
        comments:{type:Array, default:[] }
            }
       
        }   // [] [ rating ], [messages] ]
    }, {timestamps: true});    // if set true for timestamps, Mongoose will add created_at, updated_at fields for you

mongoose.model('Cake', CakeSchema);