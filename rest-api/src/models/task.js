import mongoose from 'mongoose';
import taskSchema from '../schema/task';

let Task = mongoose.model('Task', taskSchema);

export default Task