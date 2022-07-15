const Gval = "AIzaSyAsnPiUW3Hf0fje0IbBRji867S6PYCy5mo";

let gFontsArray = [];


async function getFonts() {
    var GFonts = await fetch(
        `https://www.googleapis.com/webfonts/v1/webfonts?sort=POPULARITY&key=${Gval}`
    )
        .then((res) => res.text())
        .then((text) => {
            const json = JSON.parse(text);
            console.log(json);
            return json;
        });

        gFontsArray = GFonts.items.slice(0,39).map((font)=>{
            return {
                family: font.family,
                type: font.category,
            }
        });
        console.log(gFontsArray);

        function createFontOptions(font){
            return `<option>${font}</option>`
        }

        let fontOptions = gFontsArray.map(e => createFontOptions(e.family));

        $('#font-picker').append(fontOptions.join(''));
}

getFonts();