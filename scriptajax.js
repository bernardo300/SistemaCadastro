$(document).ready(() => {
  $.ajax({
    type: 'POST',
    url: 'buscaEstado.php',
    dataType: 'json',
    success: dados => {
        var option;	
        option += '<option>'+ 'Selecione o estado' +'</option>';		
        if (dados.length > 0){
          $.each(dados, function(i, obj){
            option += `<option value =${obj.uf}>${obj.nome}</option>`;
          })
        }
        $('#estado').html(option).show();
    }		
  }) 

  $('#estado').on('change', e => {	
    let estado = $(e.target).val()
    $.ajax({
        type: 'POST',
        url: 'buscaCidade.php',
        data: 'estado='+estado, //x-www-form-urlencoded	
        dataType: 'json',
        success: dados => {
            var option;	
            option += '<option>'+ 'Selecione a cidade' +'</option>';		
            if (dados.length > 0){
              $.each(dados, function(i, obj){
                option += `<option value =${obj.nome}>${obj.nome}</option>`;
              })
            }
            $('#cidade').html(option).show();
        }		
    }) 
  }) 
})

