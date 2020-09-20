//var animationName = 'animate shake'
$('#body').removeClass('hidden-load ')
var animationEnd = 'webkitAnimationEnd mozAnimationEnd oanimationend animationend';

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        //const node = document.querySelector(element);
        const $elem = $(element)
        // $($elem).removeClass('hidden-load')
        //node.classList.add(`${prefix}animated`, animationName);
        $elem.addClass(`${prefix}animated ${animationName}`).one(animationEnd, function() {
            $(this).removeClass(`${prefix}animated ${animationName}`)
            resolve('Animation ended');
        })
        // When the animation ends, we clean the classes and resolve the Promise

        /*
        function handleAnimationEnd() {
          node.classList.remove(`${prefix}animated`, animationName);
          resolve('Animation ended');
        }
        node.addEventListener('animationend', handleAnimationEnd, {once: true});
        */
    });




/* Load shit for buttons */

const tippy_init = tippy('.tooltipped', {

    content(reference) {
        var thisCrypto = $(reference).attr('title')
        console.log('getContent', thisCrypto)
        return thisCrypto
    }


});
// https://github.com/atomiks/tippyjs/issues/750
// https://atomiks.github.io/tippyjs/v6/plugins/
const hideOnEsc = {
    name: 'hideOnEsc',
    defaultValue: true,
    fn({
        hide
    }) {
        function onKeyDown(event) {
            if (event.keyCode === 27) {
                hide();
            }
        }

        return {
            onShow() {
                document.addEventListener('keydown', onKeyDown);
            },
            onHide() {
                document.removeEventListener('keydown', onKeyDown);
            },
        };
    },
};

const hideOnPopperBlur = {
    name: 'hideOnPopperBlur',
    defaultValue: true,
    fn(instance) {
        return {
            onCreate() {
                instance.popper.addEventListener('focusout', (event) => {
                    if (
                        instance.props.hideOnPopperBlur &&
                        event.relatedTarget &&
                        !instance.popper.contains(event.relatedTarget)
                    ) {
                        instance.hide();
                    }
                });
            },
        };
    },
};


const singleton = tippy.createSingleton(tippy_init, {
    placement: 'bottom',
    // arrow: tippy.roundArrow,
    // theme: 'light',
    //maxWidth: "29rem",
    theme: 'light',
    animation: 'scale',
    inertia: true,
    content(reference) {
        var thisCrypto = $(reference).attr('title')
        console.log('getContent', thisCrypto)
        return thisCrypto
    },
    appendTo: () => document.body,
    // appendTo: () => document.querySelector("table"),

    allowHTML: true,
    interactive: true,

    a11y: true, // https://github.com/atomiks/tippyjs/issues/546, https://github.com/atomiks/tippyjs/issues/65#issuecomment-514796473
    aria: {
        content: 'describedby', // https://github.com/atomiks/tippyjs/issues/750#issuecomment-611662167
    },

    hideOnClick: false,
    // For Debugging <https://atomiks.github.io/tippyjs/v5/themes/#browser-devtools>
    // trigger: 'click',
    trigger: 'mouseenter focus',


    plugins: [hideOnEsc, hideOnPopperBlur],

    // -----------------------------
    // Singleton Specific
    // https://atomiks.github.io/tippyjs/v5/addons/#singleton
    // -----------------------------
    // delay: [200, 200], // Issue #817: Hard to trigger
    delay: [0, 0], // Issue #817: Easy to trigger

    // https://github.com/atomiks/tippyjs/issues/773
    // https://atomiks.github.io/tippyjs/v6/addons/
    moveTransition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',


});


/* 


*/




function loadPageMain() {
    // or
    //$('body').css("background-color", '#291a2b'); 
    //$('html').css("background-color", '#fffff'); 
    //document.body.parentElement.style.backgroundColor = "#291a2b"

    animateCSS('body', 'fadeIn slower').then((message) => {
        // Do something after the animation
        console.log('screenLoaded')

        var delayInMilliseconds_forFirstButton = 400;
        setTimeout(function() {



            $('#button_stripe').removeClass('hidden-load')
            animateCSS('#button_stripe', 'fadeInLeft slow').then((message) => {
                // Do something after the animation
                console.log('we fadeIn')
            })

            var delayInMilliseconds_forSecondButton = 100; //1 second
            setTimeout(function() {
                //your code to be executed after 1 second

                $('#button_coinbase').removeClass('hidden-load')
                animateCSS('#button_coinbase', 'fadeInLeft slow').then((message) => {

                    if (reff_paymentCancelled == true){
                        $('section.container').css("background-color", 'rgba(41, 26, 43, 0.75)')
                    } else{
                        $('section.container').css("background-color", 'rgba(41, 26, 43, 0.85)')
                    }
                    // Do something after the animation
                    console.log('we fadeIn')
                    //var $box = $(".testBox"),// cache container to avoid dom search each iteration

                    var $payIcons = $('.payIcon')

                    $('#mainLogo').removeClass('hidden-load')
                    animateCSS('#mainLogo', 'fadeIn')
                    var delayInMilliseconds_forLine = 100; //1 second

                    setTimeout(function() {
                        $('#mainLogo_Line').removeClass('hidden-load')
                        animateCSS('#mainLogo_Line', 'fadeIn faster').then(function() {})

                        var delayInMilliseconds_forTitle = 100;
                        setTimeout(function() {
                            $('.invoiceName').removeClass('hidden-load')
                            animateCSS('.invoiceName', 'fadeIn').then(function() {

                                $('.clientName').removeClass('hidden-load')
                                animateCSS('.clientName', 'fadeIn').then(function() {

                                    $('.banner').removeClass('hidden-load')
                                    animateCSS('.banner', 'fadeInUp slower')
                                })

                            })
                        }, delayInMilliseconds_forTitle)


                    }, delayInMilliseconds_forLine)

                    delay = 100; //time in ms
                    jQuery.each($payIcons, function(index, value) {
                        setTimeout(function() {
                            var thisID = $(value).attr("id")
                            console.log('loading payIcon:', value)
                            $('#' + thisID).removeClass('hidden-load')
                            //   $box.append('<p class="box">' + value + '</p>');
                            console.log(thisID);
                            animateCSS('#' + thisID, 'rotateIn animate__slow').then((message) => {
                                // Do something after the animation
                                console.log('we bounces')
                            });
                        }, index * delay)

                    });


                })




            }, delayInMilliseconds_forSecondButton);




        }, delayInMilliseconds_forFirstButton);




    });




}




/* 

MAIN STARTUP

*/


var reff_invoiceNum;
var reff_priceId;
var reff_price;
var reff_clientName;
var reff_redirectLoops;




$(document).ready(function() {

    /* 

    MAIN STARTUP - ONREADY

    */
    var params = grabAllParamData()


    $('#body').removeClass('hidden-load')
    reff_ = params.FULLREFF // window.location.search.substring(1)
    reff_invoiceNum = params.INVOICE_NUM //getParameterByName("inv") //?inv=thx-1138 = 'thx-1138'
    reff_priceId = params.PRICE_ID // getParameterByName("priceId")
    reff_price = params.PRICE // 150.5 // parseFloat(getParameterByName("price"))
    reff_clientName = params.CLIENT_NAME // getParameterByName("clientName")
    reff_paymentCancelled = params.PAYMENT_CANCELLED // !(!getParameterByName("payment"))
    reff_redirectLoops = params.REDIRECT_LOOPS // getParameterByName("redirectLoops")



    console.log('reff_:', reff_)
    console.log('reff_invoiceNum:', reff_invoiceNum)
    console.log('reff_priceId:', reff_priceId)
    console.log('reff_price:', reff_price)
    console.log('reff_paymentCancelled:', reff_paymentCancelled)
    console.log('reff_redirectLoops:', reff_redirectLoops)
    //var reff_priceId = getParameterByName("priceId")

    //console.log('Invoice num is',reff_invoiceNum);

    if (reff_priceId) {
        if (reff_invoiceNum) $(".invoiceName").text(reff_invoiceNum.toUpperCase())
        if (reff_clientName) {
            $(".clientName").text(reff_clientName)
        } else {
            $(".clientName").hide()
        }

        $("#button_stripe").attr('data-price-id', reff_priceId) // button_fullPay, button_depositPay
        if (reff_price) {
            $("#button_stripe").removeClass('hasFA')
            $("#button_stripe").html('<span>Pay <span style="font-weight:700;">$' + reff_price.toFixed(2) + '</span></span>')
        } else {

            $("#button_stripe").html('<span>or pay with <span><i class="fab fa-stripe fa-2x faAdjust" ></i></span></span>')
        }

    }
    /*else{
       $("#button_fullPay").hide()
       $(".invoiceName").html(`<strong>Hold up!</strong> something wack is going on.
       <br><br>Should you be here?..`).css({ 'color': 'white', 'font-size': '225%' });
     }*/

    if (!reff_priceId) {
        $("button#button_stripe").hide()
        $(".invoiceName").html(`Your link is busted dude!`).css({
            'color': 'white',
            'font-size': '175%'
        });
        // $('html').css("background-image", "url("+bgs.keyboard+")"); 
        $('#duotone').css("background-size", "cover");
        $('#duotone').css("background", `url(` + randomProperty(all_backgrounds.ERROR) + `) no-repeat center center fixed`)

        $(".clientName").text('you might need to talk to me...')
        $('.banner').hide()
        $('.invoiceName').removeClass('hidden-load')
    } else {

        //  var bgImage = //bgs.good
        //  console.log('bgImage',bgImage)
        //$('html').css("background", `url(`+randomProperty(bgs.lineart)+`) no-repeat center center fixed`)
        //$('html').css("background-size", "cover");  

        
        if (reff_paymentCancelled == true) {
            //$('#duotone').removeClass('animate__animated animate__slideInRight animate__slow')
            /*var selectBGs = {
                aesth: all_backgrounds.aesth,
                punk: all_backgrounds.punk,
                good: all_backgrounds.good,
                bad: all_backgrounds.bad,
                proffAesth: all_backgrounds.aesth_finance,
                base: all_backgrounds.base
            }*/
            var selectBGs = {
                CANCEL: all_backgrounds.CANCEL,
                punk: all_backgrounds.punk,
                CANCELa: all_backgrounds.CANCEL,
                bad: all_backgrounds.bad,
                CANCELb: all_backgrounds.CANCEL,
                MINIMAL_RETRO: all_backgrounds.minimalRetro,
                CHILL:all_backgrounds.CHILL
            }
            //select a random group
             var selectedBGGroup = shuffleObject(randomProperty(shuffleObject(selectBGs))) || all_backgrounds.aesth || all_backgrounds.punk || all_backgrounds.good || all_backgrounds.bad //incase i delete a bg link obj and forget... which i will
           
            console.log('selectedBGGroup:', selectedBGGroup)
            //$('#duotone').css("background", `url("${randomProperty(selectBGs)}") no-repeat center center fixed`)
        } else {
            var selectBGs = {
              //  HOME:all_backgrounds.HOME,
                OH:all_backgrounds.OH,
                SAFE:all_backgrounds.SAFE,
                OH:all_backgrounds.OH,
            }
            var selectedBGGroup = shuffleObject(randomProperty(shuffleObject(selectBGs))) //minimalRetro // lineart
            console.log('selectedBGGroup:', selectedBGGroup)
        }
        console.log('all_backgrounds:', all_backgrounds)
        $('#duotone').css("background", `url("${randomProperty(selectedBGGroup)}") no-repeat center center fixed`)

        $('#duotone').css("background-size", "cover");
        $('#duotone').removeClass('hidden-load')
        //if(reff_paymentCancelled==false)animateCSS('#duotone', 'slideInRight slow')
        /*  $('.container').css("backdrop-filter", "blur(10px)");*/
        loadPageMain();
        //rotateIn


    }

    //html { 
    /*(background:  url(https://i1.wp.com/media2.giphy.com/media/3oz8xrAQweeLfVIkzC/giphy.gif?zoom=2) no-repeat center center fixed; 
    
    /*$("#button_depositPay").attr('data-price-id',reff_priceId)
    $("#button_depositPay").text('Pay Deposit')*/
  
    //console.log(stripe)
    //console.log('gettingData')


    /*var price = stripe.prices.retrieve(
 reff_priceId //'price_1HSlhGEB9Gfp1i8Qe3ZofJlk'
);*/
    //console.log('price:',price)
    //console.log('data:',data)

});