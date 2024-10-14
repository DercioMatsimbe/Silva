(function readyJS(win, doc){

    let btn=doc.querySelector("#btn");
    function alertar(){
        alert ('Ainda em construção!');
    }

    function submitForm (event){
        event.preventDefault()
    }

    btn.addEventListener("click", alertar, false);
    btn.addEventListener("click", submitForm, false);

})(window, document);