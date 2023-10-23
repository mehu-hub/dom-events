document.getElementById('input-delete').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-disabled');
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }

})
document.getElementById('btn-disabled').addEventListener('click', function(){
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none';
})