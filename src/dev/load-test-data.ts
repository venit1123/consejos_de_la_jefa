import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("ingredients").deleteMany({});

  const resp = await client
    .collection("ingredients")
    .insertMany([
      {
        id: "tomato",
        name: "tomato",
        type: "vegetable",
        subtypes: [],
      },
      {
        id: "tomatillo",
        name: "tomatillo",
        type: "vegetable",
        subtypes: [],
      },
      {
        id: "cilantro",
        name: "cilantro",
        type: "vegetable",
        subtypes: [],
      },
      {
        id: "serrano_pepper",
        name: "serrano pepper",
        type: "vegetable",
        subtypes: ["pepper"],
      },
      {
        id: "jalapeno_pepper",
        name: "jalapeno pepper",
        type: "vegetable",
        subtypes: ["pepper"],
      },
      {
        id: "guava",
        name: "guava",
        type: "fruit",
        subtypes: ["tropical fruit"],
      },
      {
        id: "onion",
        name: "onion",
        type: "vegetable",
        subtypes: ["allium"],
      },
    ]);

  console.info("Ingredients DB Created:", resp.insertedCount);

  stopClient();
}

main();
