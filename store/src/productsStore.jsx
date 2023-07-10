// coffeE : price_1NQZAYKeASpJmZ80DtPpaXwe
// chair : price_1NQZPCKeASpJmZ80zmUGBPRp
// toy : price_1NQZSkKeASpJmZ80zUzbejyO

const productsArray = [
  {
    id: "price_1NQZAYKeASpJmZ80DtPpaXwe",
    title: "Coffee table",
    price: 20.0,
  },
  {
    id: "price_1NQZPCKeASpJmZ80zmUGBPRp",
    title: "chair",
    price: 10.0,
  },
  {
    id: "price_1NQZSkKeASpJmZ80zUzbejyO",
    title: "Toy",
    price: 32.0,
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
