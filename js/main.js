function ConsultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"; 
    console.log(url)
$.ajax({
    type: "GET",
    url: url,    
    success: function(response){
       console.log(response);
       $("#logradouro").html(response.logradouro);
       $("#Complemento").html(response.complemento);
       $("#Bairro").html(response.bairro);
       $("#Localidade").html(response.localidade);
       $("#UF").html(response.uf);
       $("#Cep").html(response.cep);
       $(".ceptela").show();
       $(".barra-progresso").hide();
       
      
    }
})  

}
$(function(){
    $(".ceptela").hide();
    $(".barra-progresso").hide();
});