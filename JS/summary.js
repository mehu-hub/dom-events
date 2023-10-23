function handleClick(){
    const handleStatus = document.getElementById('handler-status');
    handleStatus.innerText = 'Hello I am change by Click';
    handleStatus.style.color = 'red';
}

document.getElementById('event-listener').addEventListener('click', function(){
    const handleBtn = document.getElementById('handler-status');
    handleBtn.innerText = 'I am changed by Event Listener';
    handleBtn.style.color = 'green';
})
//----------------------------------
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    
    const updateText = document.getElementById('type-update');
    updateText.innerText = inputText;
    updateText.style.backgroundColor = 
    inputField.value = '';
})