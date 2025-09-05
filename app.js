async function getData() {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  const responseJSON = await response.json();
  return responseJSON;
}

const products = document.querySelector("#products");
const template = document.querySelector("#product-template");

// Carga inicial de los productos
getData().then((data) => {
  data.forEach((product) => {
    const productTemplate = template.content.cloneNode(true);

    let title = productTemplate.querySelector("#product_title");
    let description = productTemplate.querySelector("#product_description");
    let price = productTemplate.querySelector("#product_price");
    let image = productTemplate.querySelector("#product_image");

    title.textContent = product.title;
    description.textContent = product.description;
    price.textContent = `${product.price}`;
    image.src = product.image;

    products.appendChild(productTemplate);
  });
});



function mostrarDatos(data) {
  data.forEach((product) => {
    const productTemplate = template.content.cloneNode(true);

    let title = productTemplate.querySelector("#product_title");
    let description = productTemplate.querySelector("#product_description");
    let price = productTemplate.querySelector("#product_price");
    let image = productTemplate.querySelector("#product_image");

    title.textContent = product.title;
    description.textContent = product.description;
    price.textContent = `${product.price}`;
    image.src = product.image;

    products.appendChild(productTemplate);
  });
}

const data = await getData();

mostrarDatos(data);

function filtrarPorX(data, filtro) {
  const datosFiltrados = data.filter((product) =>product.title.includes(filtro, 0));
  mostrarDatos(datosFiltrados);
}
