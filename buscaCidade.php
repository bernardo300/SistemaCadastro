<?php
function getFilterCidade($estado){
	$pdo = new PDO("mysql:host=127.0.0.1; dbname=projetocadastro;", "root", "123456");
	$sql = 'SELECT nome FROM tb_cidades WHERE uf = ?';
	$stm = $pdo->prepare($sql);
	$stm->bindValue(1, $estado);
	$stm->execute();
	sleep(1);
	echo json_encode($stm->fetchAll(PDO::FETCH_ASSOC));
	$pdo = null;
}

if(isset($_POST['estado'])){
	$estado = $_POST['estado'];
	getFilterCidade($estado);	
}

?>