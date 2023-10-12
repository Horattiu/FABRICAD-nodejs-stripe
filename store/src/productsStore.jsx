// coffeE : price_1NQZAYKeASpJmZ80DtPpaXwe
// chair : price_1NQZPCKeASpJmZ80zmUGBPRp
// toy : price_1NQZSkKeASpJmZ80zUzbejyO

// import Model1 from "./components/Model1/scene2.gltf";
// import Model from "./components/Model";

// ProductsStore.jsx
const productsArray = [
  {
    id: "price_1NQZAYKeASpJmZ80DtPpaXwe",
    title: "Coffee Table",
    price: 20.0,
    imageUrl: "/Gallery/pic1.jpg",
    model: "/model/scene.gltf",
    texturePath: "",
    size: "20 x 60",
    moreImages: [
      "/Gallery/pic2.jpg",
      "/Gallery/pic4.jpg",
      // Add more image URLs here
    ],
  },
  {
    id: "price_1NQZPCKeASpJmZ80zmUGBPRp",
    title: "chair",
    price: 10.0,
    imageUrl: "/Gallery/pic2.jpg",
    model: "/model2/scene.gltf",
    texturePath: "",
    size: "80 x 200",
    moreImages: [
      "/Gallery/pic2.jpg",
      "/Gallery/pic4.jpg",
      // Add more image URLs here
    ],
  },
  {
    id: "price_1NQZSkKeASpJmZ80zUzbejyO",
    title: "Toy",
    price: 32.0,
    imageUrl: "/Gallery/pic3.jpg",
    model: "/model3/scene.gltf",
    texturePath: "",
    size: "100 x 400",
    moreImages: ["/Gallery/pic2.jpg", "/Gallery/pic4.jpg"],
  },
  {
    id: "price_1NxTG6KeASpJmZ80Kb7u8uOP",
    title: "desk 2",
    price: 32.0,
    imageUrl: "/Gallery/pic3.jpg",
    model: "/model4/scene.gltf",
    texturePath: "",
    size: "100 x 400",
    moreImages: ["/Gallery/pic2.jpg", "/Gallery/pic4.jpg"],
  },

  {
    id: "price_1NyKUHKeASpJmZ80MyOVo46c",
    title: "chair 3",
    price: 200,
    imageUrl: "/Gallery/pic1.jpg",
    model: "/model5/scene.gltf",
    texturePath: "",
    size: "100 x 400",
    moreImages: ["/Gallery/pic2.jpg", "/Gallery/pic4.jpg"],
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("product data does not exist for ID  " + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
