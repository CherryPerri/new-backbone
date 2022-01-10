$( document ).ready(function() {
//    console.log( "ready!" );
    var fontLoader = new FontLoader(["helvetica-neue-regular"], {
        "fontsLoaded": function(error) {
            if (error !== null) {
                // Reached the timeout but not all fonts were loaded
                console.log(error.message);
                console.log(error.notLoadedFontFamilies);
            } else {
                // All fonts were loaded
//                console.log("all fonts were loaded");
            }
        },
        "fontLoaded": function(fontFamily) {
            // One of the fonts was loaded
//            console.log("font loaded: " + fontFamily);
        }
    }, 3000);
    fontLoader.loadFonts();
});
