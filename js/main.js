// $('#heading').text($('#heading').text().toUpperCase());

//hello

$('#ranger').on('input', function(){
    $('#heading').css('font-size', `${$(this).val()}px`)
});

function setFont(){
    let gFontVal = gFontsArray.find(e => {
        return e.family == $('#font-picker').val() ? e : '';
    })
    // console.log($('#font-picker').val())
    // console.log(gFontVal)

    $('#main-font').attr('href',`https://fonts.googleapis.com/css2?family=${gFontVal.family}&display=swap`)
    $('body').css('font-family',`"${gFontVal.family}", ${gFontVal.type}`);
}