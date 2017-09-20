import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let taskSchema = new Schema({
    name:  String
});

export default taskSchema;