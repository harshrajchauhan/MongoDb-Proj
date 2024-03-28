const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb+srv://harshrajusf:Harshraj123@cluster0.rpl4ax0.mongodb.net/'; 
const database = 'BookStore';
const collection = 'OrdersCollection';

async function deleteDocuments() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(database);
    const productsCollection = db.collection(collection);

    // Delete one document
    await productsCollection.deleteOne({ total_amount: { $gte: 200 } });

    // Delete multiple documents
    //await productsCollection.deleteMany({ status: 'Shipped' });

    console.log('Documents deleted successfully');
  } finally {
    await client.close();
  }
}

deleteDocuments();
