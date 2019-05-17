<!DOCTYPE html>

<html>
	<head>
		<title>Denuncia</title>
		<link rel="stylesheet" href="css.css" media="all"/>
		<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet">
	</head>
	
	<body>
		<div id="central">
			<table>
			<td>
				<a href="index.html"><button id="plantas">Plantas</button>
			<td>
				<a href="pagina2.html"><button id="animais">Animais</button></a>
			</td>
			<td>
				<a href="projetos.html"><button id="projeto">Projetos ambientais</button></a>
			</td>
			</table>
			<div class="titulo">
				<center><img src="formulario.png" width="100" height="100" alt="pata"></center>
				<center><h3>Formulario de denuncia</h3></center>
			</div>
			<form action="" method="post" name="power" id="power">
			  <table width="500" border="0" align="center">
				<tr>
				  <td class="name">Nome:</td>
				  <td><label>
					<input  class="campo" name="nome" type="text" id="nome" placeholder="Nome inteiro">
				  </label></td>
				</tr>
				<tr>
				  <td class="name">E-mail:</td>
				  <td><label>
					<input class="campo" name="email" type="text" id="email" placeholder="Email para contato">
				  </label></td>
				</tr>
				<tr>
				  <td class="name">Local:</td>
				  <td><label>
					<input class="campo" name="local" type="text" id="local" placeholder="onde ocorreu">
				  </label></td>
				</tr>
				<tr>
				  <td class="name">Mensagem:</td>
				  <td><label>
					<textarea class="campus" name="recado" id="recado" placeholder="o que ocorreu?"></textarea>
				  </label></td>
				</tr>
				<tr>
				  <td>&nbsp;</td>
				  <td><label>
					<input name="Send" class="buttom" type="submit" id="Send" value="Enviar">
				  </label>
					<label>
					<input name="Clear" class="buttom" type="reset" id="Clear" value="Limpar">
				  </label></td>
				</tr>
			  </table>
			  <?php
				if (isset($_POST[nome])){
				$nome =   $_POST[nome];
				$email =  $_POST[email];
				$local =  $_POST[local];
				$recado = $_POST[recado];
				$assunto = "Denuncia";
				
					$send = ("vitor.silvino.william@gmail.com"); //Coloque seu E-mail aqui.
					
					$data = date("d/m/y");	   
					$hora = date("H:i:s");
					$ip = $_SERVER[REMOTE_ADDR];
					
					$headers .= "From: $send\r\n"; 
											//para o envio em formato HTML
											$headers = "MIME-Version: 1.0\r\n";
											$headers .= "Content-type: text/html;
											charset=iso-8859-1\r\n";
											
											$corpo =("
														 
														<b>De:</b> $_POST[nome]; <br/>
														<b>E-mail:</b> $email<br/>
														<b>Local:</b> $local<br/>
														<b>Assunto:</b> $assunto<br/>
														<b>Para:</b> $send<br/>
															<hr/><br/>
														<b>Mensagem:</b> <br/> 
														$recado
														<br/>
															<hr/>
														<br/>
														
														<b>Data:</b> $data <br/>
														<b>Hora:</b> $hora	<br/>
														<b>IP:</b>	$ip			<br/>
														
														");
																		
												mail($send, $assunto, $corpo, $headers); 
										
											echo "<script type=\"text/javascript\"> alert('Obrigado $nome, Seu Recado Foi Enviado Com sucesso!!!') </script>";

					
				} else{
				
				
				}
			  
			  ?>
			</form>
			<br/>
		</div>
	</body>
	

</html>