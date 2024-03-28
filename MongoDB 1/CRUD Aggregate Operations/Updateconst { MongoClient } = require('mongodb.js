const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://harshrajusf:Harshraj123@cluster0.rpl4ax0.mongodb.net/'; 
const database = 'BookStore';
const collection = 'CustomersCollection';

async function updateDocuments() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(database);
    const productsCollection = db.collection(collection);

    await productsCollection.updateOne(
      { name: 'Jane Doe' },
      { $set: { email: "jane@example.com" } }
    );

    await productsCollection.updateMany(
      { address: '6 Elm St' },
      { $inc: { phone: 594-987-6543 } }
    );

    console.log('Documents updated successfully');
  } finally {
    await client.close();
  }
}

updateDocuments();
