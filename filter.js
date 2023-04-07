function filterProductsByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage:
  let products = [
    { name: 'Shirts', category: 'Clothing' },
    { name: 'Pants', category: 'Clothing' },
    { name: 'Hat', category: 'Accessories' },
    { name: 'Sunglasses', category: 'Accessories' },
  ];
  let filterProducts = filterProductsByCategory(products);
  
  let filteredProducts = filterProducts('Accessories');
  console.log(filteredProducts); 
  