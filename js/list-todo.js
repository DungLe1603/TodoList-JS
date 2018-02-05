 function AddNew(){
    // alert("clik");
    var url = "new-todo.html";
        $("#content").load("new-todo.html"); 
}
$("#logout").click(function() {
        console.log(localStorage);
        localStorage.clear();
    
        window.location.href = "./index.html";
    });