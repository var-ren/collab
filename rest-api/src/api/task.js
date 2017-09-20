import restfulMongoose from 'restful-mongoose';

// any mongoose Model:
import Task from '../models/task';

// create and export a Router, mount it anywhere via .use()
export default restfulMongoose('task', Task);