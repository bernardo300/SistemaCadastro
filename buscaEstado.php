<?php
function getFilterEstado(){
	$pdo = new PDO("mysql:host=127.0.0.1; dbname=projetocadastro;", "root", "123456");
	$sql = 'SELECT uf, nome FROM tb_estados';
	$stm = $pdo->prepare($sql);
	$stm->execute();
	sleep(1);
	echo json_encode($stm->fetchAll(PDO::FETCH_ASSOC));
	$pdo = null;
}
getFilterEstado();
?>