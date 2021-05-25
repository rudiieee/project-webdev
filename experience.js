document.addEventListener('DOMContentLoaded', bindButton);

function bindButton(){
    document.getElementById('linkedin').addEventListener('click', function(event){
        window.location = "https://www.linkedin.com/in/rodolfovaldes";
    });
}