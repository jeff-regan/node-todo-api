// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// deleteMany
	// db.collection('Todos')
	// 	.deleteMany({text: 'Eat lunch'})
	// 	.then((result) => {
	// 		console.log(result)
	// 	});

	// deleteOne
	// db.collection('Todos')
	// 	.deleteOne({text: 'Eat Lunch'})
	// 	.then((result) => {
	// 		console.log(result)
	// 	});

	// findOneANdDelete
	// db.collection('Todos')
	// 	.findOneAndDelete({ completed: false })
	// 	.then((result) => {
	// 		console.log(result)
	// 	});

	// db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
	// 	console.log(result.deletedCount);
	// });
	db.collection('Users').findOneAndDelete({_id: new ObjectID('5af492ba2be71b126853ed94')})
	.then((result) => {
		console.log(result);
	}, (err) => {
		console.log(err);
	});

	//  client.close();
});
