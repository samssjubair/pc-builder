const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://emmaWatson:xTQ1cL1kLVyn0CDw@cluster0.uizyj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req,res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productCollection=client.db("pc-builder").collection("products");

    if(req.method==='GET'){
        const products= await productCollection.find({}).toArray();
        res.send({
            message: 'success',
            status: 200,
            data: products
        })
    }
  } finally {
  }
}
export default run;
