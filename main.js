$(document).ready(function(){


  $('form button').click( function(e){
    e.preventDefault();
    
    let newline=$("#lista").val();

    

   let novalinha = $('<li>').text(newline)
   .append('<button class="check no-text-decoration">CONCLUÍDO  </button>')
   .append('<button class="delete no-text-decoration">DELETAR  </button>')
  $(novalinha).appendTo("#itens")
  
  $("#lista").val(" ")
  }

)

})
$('.list-container').on('click', '.check', function(e){
e.preventDefault();

$(this).parent().addClass("feito")


})

$('.list-container').on("click", ".delete", function(e){
e.preventDefault();

$(this).parent().remove();

})

