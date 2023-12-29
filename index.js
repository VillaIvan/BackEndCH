class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    const codeProducto = this.#getCode(code);
    if (!codeProducto) {
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }
      this.products.push(product);
    } else {
      console.log("ERROR: Codigo Repetido");
    }
  }

  getProduct() {
    console.log(this.products);
  }

  getProductById(idProducto) {
    const producto = this.#getProducto(idProducto);
    if (producto) {
      console.log(producto);
    } else {
      console.log("ERROR: Producto no existe");
    }
  }

  #getCode(codeProducto) {
    return this.products.find((product) => product.code === codeProducto);
  }

  #getProducto(idProducto) {
    return this.products.find((product) => product.id === idProducto);
  }
}

const productManager = new ProductManager();

productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
productManager.addProduct(
  "producto prueba2",
  "Este es un producto prueba2",
  2200,
  "Sin imagen",
  "abc13",
  24
);
productManager.addProduct(
  "prodwucto prueba3",
  "Estwe es un producto prueba3",
  2600,
  "Sin imagen",
  "abwc13",
  24
);
productManager.getProductById(2);
productManager.getProductById(5);

productManager.getProduct();
