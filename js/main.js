// $('#heading').text($('#heading').text().toUpperCase());

$('#ranger').on('input', function(){
    $('#heading').css('font-size', `${$(this).val()}px`)
});