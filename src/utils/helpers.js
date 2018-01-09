/* LOGIC FOR ACCESSING FLUX */

let sdk;
let helpers;

// Start app
export function init(config) {

  // instantiate Flux SDK with app's client id
  sdk = new window.FluxSdk(config.flux_client_id, { redirectUri: config.url, fluxUrl: config.flux_url });
  helpers = new window.FluxHelpers(sdk);

  console.log('init helper loaded');
}
