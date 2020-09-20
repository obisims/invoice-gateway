function handleCheckoutButtons(e) {
    console.log('[handleCheckoutButtons] e',e)
    var target = e.target
    var targetID = target.id

    console.log('[click] target', target)
    console.log('[click] targetID', targetID)

    if (!targetID) {
        console.log('[click] targetID:', false)
        var parent = target.parentElement.parentElement
        console.log('[click] parent', parent)
        target = parent
    } else {
        console.log('[click] targetID:', true)
    }
    console.log('[click] target', target)


    var mode = target.dataset.checkoutMode;
    var priceId = target.dataset.priceId;

    var items = [{
        price: priceId,
        quantity: 1
    }];

    var thisDataset = target.dataset



    var paymentMode = target.dataset.paymentMode;
    // data-payment-mode="stripe"
    console.log('button clicked', paymentMode)
    animateCSS('body', 'fadeOut animate__slow').then((message) => {
        // Do something after the animation
        // $('body').addClass("hide-opacity"); 
        //$('body').css("display", "none"); 
        //$('body').css("background-color", '#fffff'); 
        $('body').css("opacity", '0');
        //$('html').css("background-color", '#fffff'); 
        document.body.parentElement.style.backgroundColor = "#FFFFFF"
        console.log('fadedOut')


        var delayforRedirect = 1000;
        setTimeout(function() {


            if (paymentMode == 'stripe') {


                // Make the call to Stripe.js to redirect to the checkout page
                // with the sku or plan ID.
                stripe.redirectToCheckout({
                    mode: mode,
                    lineItems: items,
                    successUrl: DOMAIN + 'success.html?session_id={CHECKOUT_SESSION_ID}&payment=paid' + '&' + window.location.search.substring(1),
                    cancelUrl: DOMAIN + 'canceled.html?session_id={CHECKOUT_SESSION_ID}&payment=canceled' + '&' + window.location.search.substring(1),
                }).catch(function(rejected) {
                    console.log(rejected);
                    //err.message;
                    $('body').css("opacity", '1');
                    document.body.parentElement.style.backgroundColor = "#291a2b"
                    animateCSS('body', 'fadeIn animate__slow').then((message) => {
                        console.log('error - faded back in')
                    })
                }).then(handleResult);


            } else if (paymentMode == 'coinbase') {
                window.location.href = "https://crypto.obisims.com/" + reff_invoiceNum;
                //window.
            }

        }, delayforRedirect)

    });

}


// Replace with your own publishable key: https://dashboard.stripe.com/test/apikeys
var PUBLISHABLE_KEY = 'pk_live_518wo3qEB9Gfp1i8QifDcWocfocfuhEtZr6Bospg60FsnR37S6Lwt69I0EZ6hqsvul8POOgnNURETpwQOlVM3qdkO00WTqwMzVB' //'pk_test_518wo3qEB9Gfp1i8QucJ9mmE6GNat0hHIUoJD4oZJBfIuZwvhBYXLFaSJRMPwJTXGZvRWAjcKBqWKGbN7aS9ZKipg00SGxVEzsL'//'pk_test_Tr8olTkdFnnJVywwhNPHwnHK00HkHV4tnP';
// Replace with the domain you want your users to be redirected back to after payment
var DOMAIN = "https://invoice.obisims.com/" //"https://obisims.com/"; //location.href.replace(/[^/]*$/, '');

var stripe = Stripe(PUBLISHABLE_KEY);

// Handle any errors from Checkout
var handleResult = function(result) {

    if (result.error) {

        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
    }
};


