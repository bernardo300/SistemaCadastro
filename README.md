# EXEMPLO INSERT COM SELECT DINAMICO

Exemplo simpleS de um site usando **ajax** para carregar os dados em
um elemento select do html

- Ao carregar o _body_ da pagina é feita uma requisição com ajax, para a
  carregar os dados dos estados.
- Ao ocorrer uma mudança n **select** do estado os dados da cidade são carregados,
  de acordo com o estado selecionado.
- Adicionar futuramente o crud completo .
- Save
- Edit
- List
- Delete

CREATE TABLE tb_estados (
id INT(2) PRIMARY KEY AUTO_INCREMENT,
uf VARCHAR(10) NOT NULL,
nome VARCHAR(20) NOT NULL
)

CREATE TABLE tb_cidades(
id int(4) PRIMARY KEY AUTO_INCREMENT,
estado int(2) NOT NULL,
uf varchar(4) NOT NULL,
nome varchar(50) NOT NULL
)

CREATE TABLE tb_clientes(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(30) NOT NULL,
cpf VARCHAR(11) NOT NULL,
telefone VARCHAR(11),
email VARCHAR(40),
nascimento DATE,
estado VARCHAR(2),
cidade VARCHAR(30),
bairro VARCHAR(20),
rua VARCHAR(40),
numero INT
);
