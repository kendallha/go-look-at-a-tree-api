const treeData = require('../../../tree-data');

const createTree = async (knex, tree) => {
  const treeId = await knex('trees').insert({
    name: tree.name,
    scientific_name: tree.scientific_name,
    region: tree.region,
    average_height: tree.average_height,
    lifespan: tree.lifespan,
    fact: tree.fact,
    image: tree.image
  }, 'id');
}

exports.seed = async function(knex) {
  try {
    await knex('trees').del()

    let treePromises = treeData.map(tree => {
      return createTree(knex, tree);
    });

    return Promise.all(treePromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
