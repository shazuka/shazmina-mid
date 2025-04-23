
$("button").click(function(){
    $("#btns").load("textar", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("Feedback successfully submitted !");
    });
  });