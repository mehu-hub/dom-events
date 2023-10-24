document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item two Clicked');
    event.stopPropagation();
});
document.getElementById('list-ul').addEventListener('click', function(event){
    console.log('UL Clicked');
    event.stopImmediatePropagation();
})
document.getElementById('list-container').addEventListener('click', function(){
    console.log('List Clicked');
})