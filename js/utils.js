function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function grabAllParamData(paramData) {
    if (paramData) console.log('[grabParamData] Yo! some old param data provided', paramData)
    var paramData = paramData || new Object();
    paramData.FULLREFF = window.location.search.substring(1)
    console.log('[grabParamData] full refference:', paramData.FULLREFF)

    /* base expected shit */
    reff_invoiceNum = getParameterByName("inv") //?inv=thx-1138 = 'thx-1138' / only needed for display
    console.log('[grabParamData] invoiceNum:', reff_invoiceNum)
    reff_priceId = getParameterByName("priceId") // stripe priceID, needed to redirect to checkout
    console.log('[grabParamData] priceId:', reff_priceId)
    reff_price = parseFloat(getParameterByName("price")) // actual price / only needed for display
    console.log('[grabParamData] price:', reff_price)

    /* payment redirect data */
    reff_paymentCancelled = !(!getParameterByName("payment")) // true if user has been redirected from a cancelled checkout
    console.log('[grabParamData] was paymentCancelled?:', reff_paymentCancelled)
    reff_redirectLoops = getParameterByName("redirectLoops") // how many times checkout has been acessed and then cancelled or whatevs
    console.log('[grabParamData] redirectLoops:', reff_redirectLoops)
    reff_clientName = getParameterByName("clientName") // name of client "Doppelgänger Dudes Pty Ltd" / only needed for display

    if (reff_invoiceNum) paramData.INVOICE_NUM = reff_invoiceNum
    if (reff_priceId) paramData.PRICE_ID = reff_priceId
    if (reff_price) paramData.PRICE = reff_price

    if (reff_clientName) paramData.CLIENT_NAME = reff_clientName
    if (reff_paymentCancelled) paramData.PAYMENT_CANCELLED = reff_paymentCancelled
    if (reff_redirectLoops) paramData.REDIRECT_LOOPS = reff_redirectLoops

    console.log('[grabParamData] complete:', paramData)
    return paramData
}

function shuffleObject(obj){
    // new obj to return
  let newObj = {};
    // create keys array
  var keys = Object.keys(obj);
    // randomize keys array
    keys.sort(function(a,b){return Math.random()- 0.5;});
  // save in new array
    keys.forEach(function(k) {
        newObj[k] = obj[k];
});
  return newObj;
}
