import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("recipies").deleteMany({});

  const resp = await client.collection("recipies").insertMany([
    {
      name: "Chilaquiles",
      id: "chilaquiles",
      author: "Marina",
      description: "",
      instructions:
        "Este es un ejemplo de los pasos para hacer unos delicious CHILAQUILES",
      categoryName: "antree",
      dateCreated: new Date(),
      feedCount: "",
      ingredientes: [
        {
          name: "tomate",
          quatity: "2",
          measurementType: "count",
        },
        {
          name: "chile",
          quatity: "1",
          measurementType: "count",
        },
        {
          name: "tomatillo",
          quatity: "4",
          measurementType: "count",
        },
        {
          name: "cebolla",
          quatity: "1/4",
          measurementType: "count",
        },
        {
          name: "ajo",
          quatity: "1/4",
          measurementType: "count",
        },
      ],
    },
    {
      name: "Huevos a la Mexicana",
      id: "huevos_a_la_mexicana",
      author: "Itzel",
      description: "Una receta deliciosa para desayunar",
      instructions:
        "Pasos para hacer unos ricos HUEVOS A LA MEXICANA",
      categoryName: "breakfast",
      dateCreated: new Date(),
      feedCount: "4",
      ingredientes: [
        {
          name: "huevos",
          quatity: "8",
          measurementType: "count",
        },
        {
          name: "chile",
          quatity: "1",
          measurementType: "count",
        },
        {
          name: "tomate",
          quatity: "1",
          measurementType: "count",
        },
        {
          name: "cebolla",
          quatity: "1/2",
          measurementType: "count",
        },
      ],
    },
    {
      name: "Flan",
      id: "flan",
      author: "David",
      description: "",
      instructions:
        "Receta de Tia Zoco para hacer un rico FLAN puertoriqueno",
      categoryName: "dessert",
      dateCreated: new Date(),
      feedCount: "10",
      ingredientes: [
        {
          name: "milk",
          quatity: "4",
          measurementType: "cups",
        },
        {
          name: "vanilla",
          quatity: "2",
          measurementType: "tableSpoon",
        },
        {
          name: "egg",
          quatity: "1",
          measurementType: "count",
        },
      ],
    },
    {
      name: "Guacamole",
      id: "guacamole",
      author: "Juan",
      instructions:
        "Receta simple pero deliciosa para hacer un GACAMOLE",
      categoryName: "appetizer",
      dateCreated: new Date(),
      feedCount: "",
      ingredientes: [
        {
          name: "aguacate",
          quatity: "2",
          measurementType: "count",
        },
        {
          name: "chile",
          quatity: "1",
          measurementType: "count",
        },
        {
          name: "jitomate",
          quatity: "1",
          measurementType: "count",
        },
        {
          name: "cebolla",
          quatity: "1/2",
          measurementType: "count",
        },
        {
          name: "limon",
          quatity: "1",
          measurementType: "count",
        },
      ],
    },
  ]);

  console.info("Recipies DB Created:", resp.insertedCount);

  stopClient();
}

main();
