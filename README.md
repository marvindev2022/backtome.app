# BackToMe
## Home..

![home](./web/src/assets/readme-images/cadastro.png)

**Vou continuar em breve...**
[Figma](https://www.figma.com/file/8fD0kiexHmPs29U4uJMMg4/PET-PROJECT-BACKTOME?type=design&node-id=177-451&t=jYlB1gJnq1iNNtlk-0)

## Projeto de Back To Me

Este README tem como objetivo fornecer informações sobre as rotas e queries utilizadas no projeto ***Back To Me***. O projeto visa desenvolver um sistema para auxiliar na busca de animais perdidos e facilitar a adoção de animais disponíveis. Os usuários poderão cadastrar animais perdidos ou disponíveis para adoção, além de buscar animais com base em critérios específicos.

## Funcionalidades - SWAGGER

<https://app.swaggerhub.com/apis-docs/MAVIROLERO/BackToMe/1.0.0>

## prisma.schema exemple

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String    @id @default(uuid())
  name      String
  email     String    @unique
  cpf       String
  phone     String
  password  String
  address   Address?
}

model Address {
  id          String   @id @default(uuid())
  cep         String
  complement  String?
  userId      String?
  user        User?    @relation(fields: [userId], references: [id])
}

model AnimalFound {
  id                       String    @id @default(uuid())
  photo                    String
  local_encontrado         String
  species                  String
  race                     String
  age                      String
  color                    String
  size                     String
  distinctive_characteristics String
  userId                   String?
  user                     User?     @relation(fields: [userId], references: [id])
}

model LostAnimal {
  id                       String    @id @default(uuid())
  species                  String
  race                     String
  age                      String
  color                    String
  size                     String
  distinctive_characteristics String
  date_loss                String
  location_loss            String
  userId                   String?
  user                     User?     @relation(fields: [userId], references: [id])
}

model AvailableAnimal {
  id                       String    @id @default(uuid())
  species                  String
  race                     String
  age                      String
  color                    String
  size                     String
  distinctive_characteristics String
  informacoes_personalidade String
  userId                   String?
  user                     User?     @relation(fields: [userId], references: [id])
}

```

## Tabelas

Tabela User

| Coluna    | Tipo   | Restrições         |
|-----------|--------|--------------------|
| id        | UUID   | Chave primária     |
| name      | String | -                  |
| email     | String | Único, não nulo    |
| cpf       | String | -                  |
| phone     | String | -                  |
| password  | String | -                  |

Tabela Address

| Coluna       | Tipo   | Restrições         |
|--------------|--------|--------------------|
| id           | UUID   | Chave primária     |
| cep          | String | -                  |
| complement   | String | -                  |
| user_id      | UUID   | Chave estrangeira  |

Tabela AnimalFound

| Coluna                     | Tipo   | Restrições         |
|----------------------------|--------|--------------------|
| id                         | UUID   | Chave primária     |
| photo                      | String | -                  |
| local_encontrado           | String | -                  |
| species                    | String | -                  |
| race                       | String | -                  |
| age                        | String | -                  |
| color                      | String | -                  |
| size                       | String | -                  |
| distinctive_characteristics | String | -                |
| user_id                    | UUID   | Chave estrangeira  |

Tabela LostAnimal

| Coluna                     | Tipo   | Restrições         |
|----------------------------|--------|--------------------|
| id                         | UUID   | Chave primária     |
| species                    | String | -                  |
| race                       | String | -                  |
| age                        | String | -                  |
| color                      | String | -                  |
| size                       | String | -                  |
| distinctive_characteristics | String | -                |
| date_loss                  | String | -                  |
| location_loss              | String | -                  |
| user_id                    | UUID   | Chave estrangeira  |

Tabela AvailableAnimal

| Coluna                     | Tipo   | Restrições         |
|----------------------------|--------|--------------------|
| id                         | UUID   | Chave primária     |
| species                    | String | -                  |
| race                       | String | -                  |
| age                        | String | -                  |
| color                      | String | -                  |
| size                       | String | -                  |
| distinctive_characteristics | String | -                |
| informacoes_personalidade  | String | -                |
| user_id                    | UUID   | Chave estrangeira  |

## Selos de Resgatadores e Perfis Verificados

A adição de selos de resgatadores e selos de perfil verificado pode ser implementada para fornecer confiança e credibilidade aos usuários do sistema. Aqui estão algumas sugestões de como implementar esses selos:

- Os usuários podem solicitar o selo de resgatador, fornecendo evidências de seu trabalho de resgate de animais.
- A equipe do sistema revisará as evidências fornecidas e, se aprovadas, concederá o selo de resgatador ao usuário.
- Os usuários também podem solicitar o selo de perfil verificado, fornecendo documentos de identificação ou outras informações que comprovem sua identidade.
- A equipe do sistema verificará as informações fornecidas e, se confirmadas, concederá o selo de perfil verificado ao usuário.

**Selo de Resgatador**
Esse selo pode ser atribuído a usuários que têm um histórico de resgate de animais.
Os critérios para obter o selo podem incluir o número de animais resgatados, o envolvimento em organizações de resgate de animais ou qualquer outra métrica relevante.
O selo de resgatador pode ser exibido ao lado do nome do usuário em seu perfil ou em qualquer outra seção do sistema onde o usuário é mencionado.

**Selo de Perfil Verificado**
Esse selo pode ser usado para indicar que o perfil do usuário foi verificado e está autenticado.
A verificação pode ser realizada por meio de informações como número de telefone, e-mail verificado ou outra forma de autenticação.
O selo de perfil verificado pode ser exibido no perfil do usuário, mostrando aos outros usuários que o perfil passou por um processo de verificação.

## Considerações Finais

Este README fornece uma visão geral das rotas, queries e estrutura do banco de dados para o projeto **Back To Me**. Utilize essas informações como referência para desenvolver e testar as funcionalidades do sistema.
# backtome.app
# backtome.app
