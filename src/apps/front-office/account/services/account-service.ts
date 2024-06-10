import endpoint from "shared/endpoint";

/**
 * Get Accounts list
 */
export function getAccountsList(params: any = {}) {
  return endpoint.get("/account", {
    params,
  });
}

/**
 * Get account details
 */
export function getAccount(id: string | number) {
  return endpoint.get("/account/" + id);
}
