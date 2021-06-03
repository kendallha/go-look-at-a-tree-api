let treeData = [{
  id: "1",
  name: "Quaking Aspen",
  scientific_name: "Populus tremuloides",
  region: "Cooler areas of North America",
  average_height: "20-80",
  lifespan: "50-60",
  fact: "A grove of quaking aspens in Utah is the largest known living thing on Earth. Nearly 50,000 stems protrude from a single root system. The entire organism covers over 100 acres and weighs 6,000 tons.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4wazSVis80ntW-mjkHu-_KwiUsBJ2OwFwtP4A1pOfR8zmrl1-FvVJcLBXDsxBAmoqP0&usqp=CAU"
},
{
  id: "2",
  name: "Madrona",
  scientific_name: "Arbutus menzies",
  region: "Coastal Pacific Northwest",
  average_height: "33-82",
  lifespan: "Up to 200",
  fact: "The madrona tree has dark red bark that peels away from the trunk, leaving a silvery, smooth sheen underneath.",
  image: "https://i.pinimg.com/originals/a7/7b/7c/a77b7cc0b45fb3d739ce9642ffffe5c4.jpg"
},
{
  id: "3",
  name: "Flowering Dogwood",
  scientific_name: "Cornus florida",
  region: "Eastern North American and northern Mexico",
  average_height: "12-36",
  lifespan: "Up to 80",
  fact: "The flowering dogwood is the state tree of Virginia.",
  image: "https://www.thetreecenter.com/c/uploads/cherokee-princess-dogwood-2.jpg"
},
{
  id: "4",
  name: "Weeping Willow",
  scientific_name: "Salix babylonica",
  region: "Northern China",
  average_height: "20-25",
  lifespan: "40-75",
  fact: "The bark and leaves of the willow tree inspired and led to the invention of aspirin by Felix Hoffman.",
  image: "https://www.coldstreamfarm.net/wp-content/uploads/2018/06/willow_weeping_istock_80298053_xlarge.jpg"
},
{
  id: "5",
  name: "Banyan",
  scientific_name: "Ficus benghalen",
  region: "Indian Subcontinent",
  average_height: "40-65",
  lifespan: "150",
  fact: "The banyan tree is the national tree of India, where it is considered sacred.",
  image: "https://www.coldstreamfarm.net/wp-content/uploads/2018/06/willow_weeping_istock_80298053_xlarge.jpg"
},
{
  id: "6",
  name: "Giant Sequoia",
  scientific_name: "Sequoiadendron giganteum",
  region: "Western slope of the Sierra Nevada mountain range",
  average_height: "250+",
  lifespan: "Up to 3,000",
  fact: "The largest giant sequoia is General Sherman, which stands 275 feet tall, has a 102 foot circumference, and weights 2.7 million pounds.",
  image: "https://upload.travelawaits.com/ta/uploads/2021/04/general-sherman-the-world-sf01a7e-800x800.jpg"
},
{
  id: "7",
  name: "African Baobab",
  scientific_name: "Adansonia digitata",
  region: "Africa",
  average_height: "16-82",
  lifespan: "Up to 1,500",
  fact: "Nicknames for the baobab include 'monkey-bread tree' and 'upside-down tree'.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Adansonia_grandidieri04.jpg/1200px-Adansonia_grandidieri04.jpg"
},
{
  id: "8",
  name: "Ponderosa Pine",
  scientific_name: "Pinus ponderosa",
  region: "Mountainous regions of western North America",
  average_height: "60-100",
  lifespan: "Up to 400",
  fact: "The inner bark of the ponderosa pine can be eaten raw or cooked and the seed, which is rich in oil, can be ground up to make a flour used in bread-making.",
  image: "https://www.vanspinesnursery.com/wp/wp-content/uploads/2020/09/ponderosa-pine-1a.jpg"
},
{
  id: "9",
  name: "Joshua Tree",
  scientific_name: "Yucca brevifolia",
  region: "Southwestern United States and northern Mexico",
  average_height: "Up to 49",
  lifespan: "500",
  fact: "Joshua trees only grow 2 to 3 inches per year, reaching their full height around age 50 to 60 years.",
  image: "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/a/ac/aac80f52-41da-564e-9f65-c14179c2ac75/5f1b42aece30d.image.jpg?resize=1024%2C768"
},
{
  id: "10",
  name: "Jelly Palm",
  scientific_name: "Butia capitata",
  region: "Brazil, Argentina, Paraguary, and Uraguay",
  average_height: "12-15",
  lifespan: "80",
  fact: "The fruits can be used to make jelly, and the seeds can be roasted and used as a coffee substitute.",
  image: "https://www.gardenia.net/storage/app/public/uploads/images/KLVKJfXDj7sCtlTFEfzWpJwWr8ILaN7ii3wL6tp1.jpeg"
},
{
  id: "11",
  name: "Oshima Cherry",
  scientific_name: "Prunus speciosa",
  region: "Japan",
  average_height: "13-39",
  lifespan: "100",
  fact: "A 800 year old Oshima cherry tree located on Oshima Island in Japan has been designated a national treasure.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3S36KoehHNL3K6z6YMUewGX-rZRI4pT2bJ0B09wmaFcOTD6OjC_W4QIGS5kJd3O1Rhw&usqp=CAU"
},
{
  id: "12",
  name: "Kapok",
  scientific_name: "Ceiba pentandra",
  region: "Tropics of Africa, America, and SE Asia",
  average_height: "Up to 230",
  lifespan: "60",
  fact: "The Mayan people of Mexico and Guatemala consider it a sacred tree and it is also the national tree of both Puerto Rico and Guatemala.",
  image: "https://previews.123rf.com/images/kurapy11/kurapy111904/kurapy11190400031/121324951-closeup-textured-and-surface-of-the-trunk-of-kapok-tree-red-silk-cotton-tree-bombax-ceiba-tree-in-th.jpg"
},
{
  id: "13",
  name: "Southern Live Oak",
  scientific_name: "Quercus virginiana",
  region: "Southeastern United States",
  average_height: "50",
  lifespan: "200",
  fact: "A southern live oak known as the Angel Oak Tree is one of South Carolina's most visited landmarks.",
  image: "https://www.westlightfarm.com/wp-content/uploads/2019/09/HansenB190927-5621.jpg"
},
{
  id: "14",
  name: "Dragon Blood",
  scientific_name: "Dracaena cinnabari",
  region: "Socotra, Yemen",
  average_height: "32",
  lifespan: "600",
  fact: "The tree contains a dark red resin that has been used in medicine, varnishes, and dyes.",
  image: "https://img.etimg.com/thumb/msid-76635786,width-1200,height-900,imgsize-867159,overlay-economictimes/photo.jpg"
},
{
  id: "15",
  name: "Rainbow Eucalyptus",
  scientific_name: "Eucalyptus deglupta",
  region: "Malesia and Pauasia",
  average_height: "100-200",
  lifespan: "150",
  fact: "In the summer, the bark of the rainbow eucalyptus peels to reveal a multi-colored trunk.",
  image: "https://i.pinimg.com/originals/72/6e/be/726ebe2da77ad6650fd56da5c605d818.jpg"
}
]
​
module.exports = treeData;