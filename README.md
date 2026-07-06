# MusicaTeca_Java_SENAI
##Catálogo Musical ("MusicaTeca")
Projeto colaborativo de um catálogo musical(Musica Teca) para o curso de Java do SENAI, 2026.
Um portal voltado para a busca de informações sobre artistas musicais e organização de um catálogo personalizado.

## Consumo de API
Integração com a **MusicBrainz API** para buscar artistas por nome, exibindo informações como nome, obras, identificadores (**MBID**) e demais dados disponíveis retornados pela API em formato **JSON**.

## Tratamento de Exceções
Captura de erros de requisição, tratamento de pesquisas sem resultados e controle de respostas vazias da API, garantindo uma experiência adequada ao usuário.

## Formulários
Sistema de pesquisa onde o usuário informa o nome do artista para realizar a busca e visualizar suas informações.

## Persistência
Armazenamento temporário dos dados pesquisados e salvamento das informações de interesse no **localStorage**, permitindo que o catálogo permaneça disponível entre diferentes sessões.

## Lógica de Programação
Processamento e estruturação dos dados retornados pela API, utilização do **MBID (MusicBrainz Identifier)** como identificador único para evitar duplicações e organização das informações armazenadas.

## Estrutura de Páginas
- **Página de Busca:** pesquisa e exibição dos dados dos artistas.
- **Página do Catálogo:** exibição dos artistas salvos pelo usuário, com atualização dinâmica da interface por meio de modais e manipulação do DOM.


