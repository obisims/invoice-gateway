let all_backgrounds = new Object()
all_backgrounds.base = new Object()

//function to add BGS to groups
function addToBGS(toBGGroup, backGround, fromBGGroup) {
    /*
    addToBGS(GOOD,'abstract_foldingCircles',BG_BASE)
    */
    var fromBGGroup = fromBGGroup || BG_BASE
    //backGround = url
    //var url = fromBGGroup[backGround]
    toBGGroup[backGround] = fromBGGroup[backGround]
}

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}
    
    var randomProperty = function (obj) {
       var keys = Object.keys(obj);
       return obj[keys[ keys.length * Math.random() << 0]];
    };  

    /* 
ADDING ALL BGS HERE
*/
all_backgrounds.base = {
    rad_trump : 'https://i1.wp.com/media2.giphy.com/media/3oz8xrAQweeLfVIkzC/giphy.gif?zoom=2',
    erratic_keyboard : 'https://38.media.tumblr.com/546c0cd48d71f210f9b67a389003790d/tumblr_neq0yw9rMA1tm16jjo1_500.gif',
    abstract_MasterCardCircles : 'https://cdn.dribbble.com/users/616823/screenshots/9121296/glowspin.gif',
    abstract_sharpies : 'https://i.gifer.com/C2Az.gif',
    abstract_foldingCircles : 'https://whileiamdying.files.wordpress.com/2014/08/tumblr_na8i9j4r471ts4htvo1_500.gif',
    
    abstract_bloodfloor : 'https://i.gifer.com/Z4y6.gif',
    abstract_joyDivis : 'https://i.gifer.com/2njo.gif',
    punk_cornermosh : 'https://i.gifer.com/80bt.gif',
    punk_badhairDry : 'https://i.gifer.com/ECSH.gif',
    
    
    anime_aesth_smoke : 'https://i.gifer.com/8YuB.gif',
    aesth_droppedSmokes : 'https://i.gifer.com/8Uhw.gif',
    movies_throwBack_gremlinsCereal : 'https://i.gifer.com/1qqA.gif',
    texture_static_ROUGH : 'https://i.gifer.com/29Q.gif',
    aesth_catCrash_anime : 'https://i.gifer.com/Pazq.gif',
    anime_spike : 'https://i.gifer.com/14jd.gif',
    anime_spikeGunInFace : 'https://i.gifer.com/3SGx.gif',
    anime_bebopLaugh : 'https://i.gifer.com/14ji.gif',
    anime_killyou : 'https://i.gifer.com/K6D3.gif',
    anime_cryingMostlyWhite : 'https://i.gifer.com/R9e5.gif',
    anime_eye : 'https://i.gifer.com/6s4K.gif',
    anime_handEye : 'https://i.gifer.com/XrTp.gif',
    throwBack_systemMalf : 'https://i.gifer.com/1Wg8.gif',
    punk_clashSmash : 'https://i.gifer.com/j30.gif',
    spooky_fuckk : 'https://i.gifer.com/410L.gif',
    movies_throwBack_lRun_stopHand : 'https://i.gifer.com/Iaot.gif',
    movies_throwBack_lRun_shootYou : 'https://i.gifer.com/7TW0.gif',
    
    
    anime_strring : 'https://i.gifer.com/380e.gif',
    anime_driving : 'https://i.gifer.com/EaH.gif',
    anime_rain : 'https://i.gifer.com/AI5S.gif',
    anime_aesth_cityNight : 'https://i.gifer.com/7Tzm.gif',
    throwBack_retroHiFi : 'https://i.gifer.com/4TKo.gif',
    eightiesTech_redHead : 'https://i.gifer.com/3cDp.gif',
    anime_spikeStand : 'https://i.gifer.com/3SGv.gif',
    throwBack_rubux : 'https://i.gifer.com/Syhw.gif',
    anime_washing : 'https://i.gifer.com/6iTo.gif',
    anime_aesth_trains : 'https://i.gifer.com/TTOl.gif',
    anime_eightiesNeon_flightShooter : 'https://i.gifer.com/YUXs.gif',
    eightiesTech_japFlyingMountains : 'https://i.gifer.com/9vCi.gif',
    eightiesTech_spiral : 'https://i.gifer.com/YmYu.gif',
    
    tappingFeet_daria : 'https://i.gifer.com/1B4C.gif',
    lineArt_bass : 'https://i.gifer.com/QTbQ.gif',
    abstract_blackhole : 'https://i.gifer.com/8FKI.gif',
    pixel_hi_underbridge : 'https://i.gifer.com/1zfb.gif',
    pixel_med_balconyPixel : 'https://i.gifer.com/6ElP.gif',
    anime_med_rainingPixel : 'https://i.gifer.com/33HI.gif',
    aesth_catNightWindow : 'https://i.gifer.com/HST2.gif',
    texture_lowfiComet : 'https://i.gifer.com/EFjf.gif',
    abstract_geo_blackBG_poluJap : 'https://i.gifer.com/4RNU.gif',
    abstract_bw_blackBG_spiralingIn : 'https://i.gifer.com/fy6O.gif',
    abstract_blackBG_smokeSpiral : 'https://i.gifer.com/746w.gif',
    abstract_blackBG_zoomoutStall : 'https://i.gifer.com/9vcx.gif',
    abstract_whiteBG_spiningnn : 'https://i.gifer.com/3BAY.gif',
    abstract_whiteBG_whiteonRedBlotch : 'https://i.gifer.com/1ZwF.gif',
    
    
    
    abstract_blackBG_pentinCage : 'https://i.gifer.com/4RNe.gif',
    abstract_blackBG_lineArt_wormer : 'https://i.gifer.com/4P4d.gif',
    abstract_blackBG_lineArt_zoomout : 'https://i.gifer.com/7gS5.gif',
    abstract_blackBG_lineArt_boxes : 'https://i.gifer.com/YYqc.gif',
    abstract_blackBG_lineArt_squares : 'https://i.gifer.com/ZVcG.gif',
    abstract_blackBG_lineArt_box : 'https://i.gifer.com/4Mg1.gif',
    abstract_blackBG_lineArt_honeycomb : 'https://i.gifer.com/4P4O.gif',
    abstract_blackBG_lineArt_star : 'https://i.gifer.com/4Mg9.gif',
    
    glitch_colour_skull : 'https://i.gifer.com/BPEw.gif',
    anime_aesth_club : 'https://i.gifer.com/UJoV.gif',
    
    O_abstract_blackBG_lineArt_cheekyTarget : 'https://i.gifer.com/MZny.gif',
    abstract_blackBG_geometric_dotsPloppingOut : 'https://i.gifer.com/7X38.gif',
    abstract_blackBG_geometric_handingOffNutts : 'https://i.gifer.com/IYYP.gif',
    abstract_blackBG_geometric_spinningPlates : 'https://i.gifer.com/K5uX.gif',
    abstract_blackBG_geometric_squirmingCone : 'https://i.gifer.com/246m.gif',
    abstract_blackBG_geometric_wobblingCyclinderDots : 'https://i.gifer.com/HMs0.gif',
    abstract_blackBG_geometric_milkPlanket : 'https://i.gifer.com/6Nnq.gif',
    abstract_blackBG_geometric_retro_flappers : 'https://i.gifer.com/3Y17.gif',
    
    
    
    abstract_blackBG_eightiesTech_beyblade : 'https://i.gifer.com/9w1l.gif',
    abstract_blackBG_geometric_twister_geomet : 'https://i.gifer.com/G2FA.gif',
    
    
    abstract_blackBG_lineArt_orangeSlices : 'https://i.gifer.com/7SC2.gif',
    abstract_blackBG_lineArt_diagonalWorm : 'https://i.gifer.com/GXhK.gif',
    abstract_blackBG_lineArt_crossFlower : 'https://i.gifer.com/LLrF.gif',
    abstract_blackBG_lineArt_spinningCross : 'https://i.gifer.com/MPuS.gif',
    abstract_blackBG_lineArt_O_circleSomething : 'https://i.gifer.com/GXgw.gif',
    abstract_blackBG_lineArt_boxGod : 'https://i.gifer.com/AgBZ.gif',
    abstract_blackBG_lineArt_jarringRotatingCorridor : 'https://i.gifer.com/9wxw.gif',
    abstract_blackBG_lineArt_spinningBlackhole : 'https://i.gifer.com/UMHn.gif',
    abstract_blackBG_lineArt_minamalistDrivingThruTunnel : 'https://i.gifer.com/o6S.gif',
    
    abstract_blackBG_texture_rainOnAShadowOrPlanet : 'https://i.gifer.com/J8L4.gif',
    
    texture_darkBG_lineArt_dustparticlesLeftRight : 'https://i.gifer.com/h01.gif',
    abstract_blackBG_retro_burningStar : 'https://i.gifer.com/1uUh.gif',
    abstract_blackBG_retro_burningStar_smaller : 'https://i.gifer.com/7isN.gif',
    abstract_blackBG_retro_concavedTriangleGrowing : 'https://i.gifer.com/3SEo.gif',
    abstract_blackBG_retro_theDiscoFly : 'https://i.gifer.com/8Tin.gif',
    abstract_blackBG_retro_redhotmoon : 'https://i.gifer.com/3YUz.gif',
    abstract_blackAndWhiteBG_retro_vhsLinesOnaZebra : 'https://i.gifer.com/3SEg.gif',
    abstract_darkBG_retro_lineArtKinda_reverseRain : 'https://i.gifer.com/3Y1B.gif'
}
var BG_BASE = all_backgrounds.base
/* 

ADDING BGS TO GROUPS VIA FUNC

addToBGS(newGroup, imgName, oldGroup{optional} )
addToBGS(MINIMAL_RETRO,'abstract_foldingCircles',BG_BASE)

*/


all_backgrounds.minimalRetro = new Object()
var MINIMAL_RETRO = all_backgrounds.minimalRetro
/* black background, high contrasts, gemoetric and whitespace inclined? */
addToBGS(MINIMAL_RETRO, 'abstract_blackBG_geometric_milkPlanket')
addToBGS(MINIMAL_RETRO, 'abstract_blackBG_retro_burningStar')
addToBGS(MINIMAL_RETRO, 'abstract_blackBG_geometric_retro_flappers')
addToBGS(MINIMAL_RETRO, 'abstract_blackBG_retro_theDiscoFly')
addToBGS(MINIMAL_RETRO, 'abstract_blackBG_retro_redhotmoon')
addToBGS(MINIMAL_RETRO, 'abstract_blackBG_retro_burningStar')
addToBGS(MINIMAL_RETRO, 'abstract_blackBG_retro_concavedTriangleGrowing')
addToBGS(MINIMAL_RETRO, 'abstract_blackBG_texture_rainOnAShadowOrPlanet')
addToBGS(MINIMAL_RETRO, 'abstract_blackAndWhiteBG_retro_vhsLinesOnaZebra')
//addToBGS(MINIMAL_RETRO,'abstract_darkBG_retro_lineArtKinda_reverseRain')

all_backgrounds.aesth_finance = new Object()
var AESTHETIC_FINANCE = all_backgrounds.aesth_finance
addToBGS(AESTHETIC_FINANCE, 'abstract_blackBG_lineArt_minamalistDrivingThruTunnel')
addToBGS(AESTHETIC_FINANCE, 'abstract_blackBG_texture_rainOnAShadowOrPlanet')
addToBGS(AESTHETIC_FINANCE, 'texture_darkBG_lineArt_dustparticlesLeftRight')

addToBGS(AESTHETIC_FINANCE, 'lineArt_bass')
addToBGS(AESTHETIC_FINANCE, 'abstract_blackhole')

addToBGS(AESTHETIC_FINANCE, 'abstract_bw_blackBG_spiralingIn')
addToBGS(AESTHETIC_FINANCE, 'abstract_blackBG_smokeSpiral')
addToBGS(AESTHETIC_FINANCE, 'abstract_blackBG_zoomoutStall')

all_backgrounds.lineart = new Object()
var LINEART = all_backgrounds.lineart
addToBGS(LINEART, 'O_abstract_blackBG_lineArt_cheekyTarget')
addToBGS(LINEART, 'abstract_blackBG_lineArt_orangeSlices')
addToBGS(LINEART, 'abstract_blackBG_lineArt_diagonalWorm')
addToBGS(LINEART, 'abstract_blackBG_lineArt_crossFlower')
addToBGS(LINEART, 'abstract_blackBG_lineArt_spinningCross')
addToBGS(LINEART, 'abstract_blackBG_lineArt_O_circleSomething')
addToBGS(LINEART, 'abstract_blackBG_lineArt_boxGod')

addToBGS(LINEART, 'abstract_blackBG_pentinCage')
addToBGS(LINEART, 'abstract_blackBG_lineArt_wormer')
addToBGS(LINEART, 'abstract_blackBG_lineArt_zoomout')
addToBGS(LINEART, 'abstract_blackBG_lineArt_boxes')
addToBGS(LINEART, 'abstract_blackBG_lineArt_squares')
addToBGS(LINEART, 'abstract_blackBG_lineArt_box')
addToBGS(LINEART, 'abstract_blackBG_lineArt_honeycomb')
addToBGS(LINEART, 'abstract_blackBG_lineArt_star')

all_backgrounds.punk = new Object()
var PUNK = all_backgrounds.punk
addToBGS(PUNK, 'punk_cornermosh')
addToBGS(PUNK, 'anime_eye')
addToBGS(PUNK, 'punk_clashSmash')
addToBGS(PUNK, 'tappingFeet_daria')


all_backgrounds.aesth = new Object()
var AESTHETIC = all_backgrounds.aesth
addToBGS(AESTHETIC, 'anime_strring')
addToBGS(AESTHETIC, 'anime_driving')
addToBGS(AESTHETIC, 'anime_rain')
addToBGS(AESTHETIC, 'anime_aesth_cityNight')
addToBGS(AESTHETIC, 'throwBack_retroHiFi')
addToBGS(AESTHETIC, 'anime_spikeStand')
addToBGS(AESTHETIC, 'throwBack_rubux')
addToBGS(AESTHETIC, 'anime_washing')
addToBGS(AESTHETIC, 'anime_aesth_trains')
addToBGS(AESTHETIC, 'anime_eightiesNeon_flightShooter')
addToBGS(AESTHETIC, 'eightiesTech_japFlyingMountains')
addToBGS(AESTHETIC, 'eightiesTech_spiral')

all_backgrounds.good = new Object()
var GOOD = all_backgrounds.good
addToBGS(GOOD, 'abstract_MasterCardCircles')
addToBGS(GOOD, 'rad_trump')
addToBGS(GOOD, 'abstract_foldingCircles')
addToBGS(GOOD, 'abstract_bloodfloor')
addToBGS(GOOD, 'abstract_joyDivis')
addToBGS(GOOD, 'anime_aesth_smoke')
all_backgrounds.bad = new Object()
var BAD = all_backgrounds.bad
addToBGS(BAD, 'punk_cornermosh')
addToBGS(BAD, 'punk_badhairDry')
addToBGS(BAD, 'anime_aesth_smoke')
addToBGS(BAD, 'aesth_droppedSmokes')
addToBGS(BAD, 'movies_throwBack_gremlinsCereal')
addToBGS(BAD, 'texture_static_ROUGH')
addToBGS(BAD, 'aesth_catCrash_anime')
addToBGS(BAD, 'anime_spike')
addToBGS(BAD, 'anime_spikeGunInFace')
addToBGS(BAD, 'anime_bebopLaugh')
addToBGS(BAD, 'anime_killyou')
addToBGS(BAD, 'anime_cryingMostlyWhite')
addToBGS(BAD, 'anime_eye')
addToBGS(BAD, 'anime_handEye')
addToBGS(BAD, 'throwBack_systemMalf')
addToBGS(BAD, 'punk_clashSmash')
addToBGS(BAD, 'spooky_fuckk')
addToBGS(BAD, 'movies_throwBack_lRun_stopHand')
addToBGS(BAD, 'movies_throwBack_lRun_shootYou')