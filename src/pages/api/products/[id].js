const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

async function run(req, res) {
  try {
    await client.connect();
    const productCollection = client.db("pc-builder").collection("products");

    if (req.method === "GET") {
      const productId = req.query.id; // This will capture the product ID from the URL

      if (productId) {
        // Get a specific product by ID
        const product = await productCollection.findOne({
          _id: new ObjectId(productId),
        });

        if (product) {
          res.send({
            message: "success",
            status: 200,
            data: product,
          });
        } else {
          res.send({
            message: "Product not found",
            status: 404,
          });
        }
      } else {
        // Get all products
        const products = await productCollection.find({}).toArray();
        res.send({
          message: "success",
          status: 200,
          data: products,
        });
      }
    }
  } finally {
    // Don't forget to close the client connection after the request is handled
    await client.close();
  }
}
export default run;
