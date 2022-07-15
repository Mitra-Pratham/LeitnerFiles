// $('#heading').text($('#heading').text().toUpperCase());

//hello

$('#ranger').on('input', function(){
    $('#heading').css('font-size', `${$(this).val()}px`)
});

function setFont(){
    let gFontVal = String($('#font-picker').val());
}