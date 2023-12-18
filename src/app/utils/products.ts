import { Product, ProductSign } from "../models/product.model";

export function customizeProducts(products: Product[]): Product[] {
  const mapped: Product[] = products.map(product => {
    product.category = product.category.replace("'", '')
    product.stock = Math.ceil(Math.random() * 20);
    return product
  })
  return mapped
}


export function filterByRate(products: Product[], rateFilter: number) {
  const filtered: Product[] = products.filter((product: Product) => {
    return product.rating.rate > rateFilter
  })
  console.log(filtered)
  return filtered
}


export function filterByCategory(products: Product[], selectedCategory: string): Product[] {
  const filtered = selectedCategory === "all"
    ? products
    : products.filter((product) => product.category === selectedCategory)
  return filtered
}


export function handleSort(products: Product[], prop: string, order: string): Product[] {

  const sorted = [...products]
  if(order === 'orig'){
    return sorted
  }
  sorted.sort((a: ProductSign, b: ProductSign) => {
    if (a[prop] > b[prop]) {
      return 1;
    }
    if (a[prop] < b[prop]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })

  if (order === 'desc') {
    sorted.reverse()
  }

  return sorted

}
