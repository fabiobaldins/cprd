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
		window.location.href='./produtos/add/' ;
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
		        //window.location.href='./produtos/';
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
            			window.location.href='./produtos/edit/'+idprod ;
            	}
        }
	}