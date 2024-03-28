const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://harshrajusf:Harshraj123@cluster0.rpl4ax0.mongodb.net/'; 
const database = 'BookStore';
const collection = 'AuthorsCollection';

async function createDocuments() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(database); 
    const productsCollection = db.collection(collection);

    await productsCollection.insertOne({
        "id": 11,
      "name": "Sarah Johnson",
      "birth_year": 1985,
      "country": "Canada"

      });

    console.log('Documents inserted successfully');
  } finally {
    await client.close();
  }
}

createDocuments();

