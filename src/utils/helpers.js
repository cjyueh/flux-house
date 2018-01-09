/* LOGIC FOR ACCESSING FLUX */

let sdk;
let helpers;

// Start app
function init(config) {

  // instantiate Flux SDK with app's client id
  sdk = new window.FluxSdk(config.flux_client_id, { redirectUri: config.url, fluxUrl: config.flux_url });
  helpers = new window.FluxHelpers(sdk);

  // Check if we're coming back from Flux with the login credentials.
  helpers.storeFluxUser()
  // check that the user is logged in, otherwise show the login page
    .then(function() { return helpers.isLoggedIn(); });
  console.log('Hello.');
}

export default init;
