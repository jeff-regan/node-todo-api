const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({})
// 	.then((result) => {
// 		console.log(result);
// 	});

	// findOneAndRemove
	// findByIdAndRemove

Todo.findByIdAndRemove('5af73906b7e80f50e692ff2a')
	.then((todo) => {
		console.log(todo);
	});