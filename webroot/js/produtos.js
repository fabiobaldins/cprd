function checkall(checkok)
{
	var arrprodutos = document.getElementsByName('produtos[]');

	for(i=0; i<arrprodutos.length;i++)
		{
            arrprodutos[i].checked = checkok;
        }
}

function delprd()
{
	var arrsel = [];
	var arrprodutos = document.getElementsByName('produtos[]');
	
	for(i=0; i<arrprodutos.length;i++)
		{
            if((arrprodutos[i].checked == true)&&(arrprodutos[i].value!=0))
            	{
            		if(confirm('Deseja realmente excluir o "Produto"'+arrprodutos[i].value))
            		{
            			var idprod = arrprodutos[i].value;
            			   
            			$.ajax({
							    url : "./produtos/delete/"+idprod,
						
							    
							    beforeSend: function(jqXHR) {
							        jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
							    },
							    
							    type: "POST",
							    
							    data: {
							    	id:idprod
							    },
							    
							    success: function(data)
							    {
							        //window.location.href='./produtos/';
							    }
							  });   
            			   
            			
            		}	
            	}
        }
}

function newprd()
	{
		//window.location.href='./produtos/add/' ;
		$.ajax({
		    url : "./produtos/add/",
	
		    
		    beforeSend: function(jqXHR) {
		        jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
		    },
		    
		    type: "POST",
		    
		    data: {
		    	id:0
		    },
		    
		    success: function(data)
		    {
		        alert(data);//window.location.href='./produtos/';
		    }
		  }); 
	}



function ativaprod(id)
	{
		$.ajax({
		    url : "./produtos/ativarprod/"+id,
	
		    
		    beforeSend: function(jqXHR) {
		        jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
		    },
		    
		    type: "POST",
		    
		    data: {
		    	id:id
		    },
		    
		    success: function(data)
		    {
		        $('#janela1').innerHTML(data);//window.location.href='./produtos/';
		    }
		  }); 
	}

function editprod()
	{
	var arrsel = [];
	var arrprodutos = document.getElementsByName('produtos[]');
	
	for(i=0; i<arrprodutos.length;i++)
		{
            if((arrprodutos[i].checked == true)&&(arrprodutos[i].value!=0))
            	{
            			var idprod = arrprodutos[i].value;
            			
            			$.ajax({
            			    url : "./produtos/edit/"+idprod,
            		
            			    
            			    beforeSend: function(jqXHR) {
            			        jqXHR.overrideMimeType('text/html;charset=iso-8859-1');
            			    },
            			    
            			    type: "POST",
            			    
            			    data: {
            			    	id:idprod
            			    },
            			    
            			    success: function(data)
            			    {
            			    	alert(data);
            			    	$("#janela1").html(data);

            			    }
            			  }); 
            	}
        }
	}

$(document).ready(function(){
    $("a[rel=modal]").click( function(ev){
        ev.preventDefault();
 
        var id = $(this).attr("href");
 
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
     
        //colocando o fundo preto
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').fadeIn(1000); 
        $('#mascara').fadeTo("slow",0.8);
 
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
     
        $(id).css({'top':top,'left':left});
        $(id).show();   
    });
 
    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });
 
    $('.fechamod').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
    });
});

$("#mascara").click( function(){
    $(this).hide();
    $(".window").hide();
});

$('.fechamod').click(function(ev){
    ev.preventDefault();
    $("#mascara").hide();
    $(".window").hide();
});