const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://harshrajusf:Harshraj123@cluster0.rpl4ax0.mongodb.net/'; 
const database = 'BookStore';
const collection = 'AuthorsCollection';

async function runAggregation() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(database);
    const result = db.collection(collection);

    const pipeline = [
        {
          $match: {
            'country': 'USA'
          }
        }
      ];

    const aggregationResult = await result.aggregate(pipeline).toArray();

    console.log(aggregationResult);

  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

runAggregation().catch(console.error);

