# MapsYssy

- No arquivo server.js foi criado um servidor local com uma rota GET para o arquivo places.json. A ação seria retornar os dados de latitude e longitude das locations.

- No arquivo index.html foi gerado uma função para exibir o mapa em uma coordenada e zoom especifico. E também incluido um scrpit que apontasse para a API Maps JavaScript. Para usar a API do Google é necessário criar uma Credencial e substituir no campo de KEYAPI

- Para que houvesse a possibilidade de marcar no mapa alfinetes com as sedes da empresa seria necessário usar uma função chamada forEach que recebe dados de coordenadas e aponta no mapa em forma de alfinete. 

- Para que o projeto fosse finalizado seria necessário criar uma requisição HTTP GET a partir do html para utilizar os dados atraves do server.js que na rota http://localhost:3000/locations aponta para o arquivo json. E ao chegar no frontend seria corvertido em um objeto JS com a função stingif.

