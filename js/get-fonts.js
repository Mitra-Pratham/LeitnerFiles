const gFontAPIKey = "";

let gFontsArray = [];

async function getFonts() {
    var GFonts = await fetch(
        `https://www.googleapis.com/webfonts/v1/webfonts?sort=POPULARITY&key=${gFontAPIKey}`
    )
        .then((res) => res.text())
        .then((text) => {
            const json = JSON.parse(text);
            console.log(json);
            return json;
        });

        let mappedFonts = GFonts.items.slice(0,39).map((font)=>{
            return {
                family: font.family,
                type: font.category,
            }
        });
        console.log(mappedFonts);

        function createFontOptions(font){
            return `<option>${font}</option>`
        }

        let fontOptions = mappedFonts.map(e => createFontOptions(e.family));

        $('#font-picker').append(fontOptions.join(''));
}

getFonts();