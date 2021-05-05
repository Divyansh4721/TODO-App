var a=document.querySelector('#description');
function defaultclick() {
    $('#section-2').css({
        backgroundColor:'white'
    });
    $('#description').css({
        backgroundColor: 'white'
    });
    $('#sub-1').css({
        backgroundColor: 'white'
    });
    $('#category').css({
        backgroundColor: 'white'
    });
    $('#sub-2').css({
        backgroundColor: 'white'
    });
    $('#date').css({
        backgroundColor: 'white'
    });
}
$('#description')[0].addEventListener('click',()=>{
    defaultclick();
    $('#section-2').css({
        backgroundColor:'#eaedf0'
    });
    $('#description').css({
        backgroundColor:'#eaedf0'
    });
});
$('#category')[0].addEventListener('click',()=>{
    defaultclick();
    $('#sub-1').css({
        backgroundColor:'#eaedf0'
    });
    $('#category').css({
        backgroundColor:'#eaedf0'
    });
    $('option').css({
        backgroundColor:'white'
    });
});
$('#date')[0].addEventListener('click',()=>{
    defaultclick();
    $('#sub-2').css({
        backgroundColor:'#eaedf0'
    });
    $('#date').css({
        backgroundColor:'#eaedf0'
    });
});