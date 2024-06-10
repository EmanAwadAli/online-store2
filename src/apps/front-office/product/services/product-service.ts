import endpoint from "shared/endpoint";

/**
 * Get Products list
 */
export function getProductsList(params: any = {}) {
  return endpoint.get("/product", {
    params,
  });
}

/**
 * Get product details
 */
export function getProduct(id: string | number) {
  return endpoint.get("/product/" + id);
}
