function checkall(checkok)
{
	var arrprodutos = document.getElementsByName('produtos[]');

	for(i=0; i<arrprodutos.length;i++)
		{
            arrprodutos[i].checked = checkok;
        }
}

function newprd()
	{
	 alert('teste');
	}

function ativacao(valor,id)
	{
		alert(valor);
		alert(id);
	}

