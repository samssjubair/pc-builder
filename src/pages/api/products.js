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
      const categoryId = req.query.category; // This will capture the category name from the query params

      if (categoryId) {
        // Get products by category
        const products = await productCollection
          .find({ category: categoryId })
          .toArray();

        if (products.length > 0) {
          res.send({
            message: "success",
            status: 200,
            data: products,
          });
        } else {
          res.send({
            message: "No products found for the specified category",
            status: 404,
          });
        }
      } else {
        // If no category provided, get all products
        const allProducts = await productCollection.find({}).toArray();
        res.send({
          message: "success",
          status: 200,
          data: allProducts,
        });
      }
    }
  } finally {
    // Don't forget to close the client connection after the request is handled
    // await client.close();
  }
}

export default run;
