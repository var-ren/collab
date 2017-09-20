import mongoose from 'mongoose';

export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	var db = mongoose.connection;
	mongoose.connect('mongodb://localhost/test');
	db.on('error', console.log.bind('db connection failed'));
	db.once('open', function() {
		console.log('db success!!');
		callback(mongoose);
	});
}
