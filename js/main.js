// $('#heading').text($('#heading').text().toUpperCase());

//hello

$('#ranger').on('input', function(){
    $('#heading').css('font-size', `${$(this).val()}px`)
});