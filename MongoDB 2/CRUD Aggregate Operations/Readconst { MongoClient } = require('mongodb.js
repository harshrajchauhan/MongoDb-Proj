const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://harshrajusf:Harshraj123@cluster0.rpl4ax0.mongodb.net/'; 
const database = 'BookStore';
const collection = 'BooksCollection';

async function readDocuments() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(database);
    const productsCollection = db.collection(collection);

    const oneDocument = await productsCollection.findOne({ published_year: 1925 });
    console.log('One Document:', oneDocument);

    const multipleDocuments = await productsCollection.find({ published_year: 1960 }).toArray();
    console.log('Multiple Documents:', multipleDocuments);

  } finally {
    await client.close();
  }
}

readDocuments();
