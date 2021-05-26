// document.addEventListener('DOMContentLoaded', bindButton);

// function bindButton(){
//     document.getElementById('qsubmit').addEventListener('click', function(event){
//         var req = new XMLHttpRequest();
//         var payload = {question: null};
//         payload.question = document.getElementById('question').value;
//         req.open('POST', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', false);
//         req.setRequestHeader('Content-Type', 'application/json');
//         req.send(JSON.stringify(payload));
//         document.getElementById('qresponse').textContent = "Thank you for sending your question!";
//         // document.getElementById('question').value=null;
//         // event.preventDefault();
//     });
// }