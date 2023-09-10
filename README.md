# Nuxt-Lambda-Localstack

Ola, tudo bem? Bom te ver por aqui! Estou empolgado em compartilhar um pouco mais sobre o projeto em que tenho trabalhado ultimamente! ✨

O projeto é uma aplicação web desenvolvida com algumas tecnologias incríveis:

1. **Vue.js**: Estamos usando o Vue.js, um framework JavaScript progressivo, para criar uma experiência de usuário interativa e responsiva.

2. **Nuxt.js**: Com o Nuxt.js, estamos construindo a aplicação Vue de forma universal, tornando-a mais eficiente em termos de SEO e proporcionando uma renderização rápida do lado do servidor.

3. **Vuetify**: Para o design e a estilização da nossa aplicação, estamos aproveitando o Vuetify, um framework de componentes Vue.js que nos permite criar uma interface de usuário elegante e consistente.

4. **LocalStack**: Para implantação e testes locais, estamos utilizando o LocalStack, uma ferramenta que simula serviços da AWS localmente. Isso nos ajuda a economizar tempo e recursos durante o desenvolvimento e os testes.

5. **AWS Lambda**: Nossa aplicação também se beneficia do AWS Lambda para processar tarefas em tempo real de forma escalável e econômica.

6. **Api Express para arquivos estáticos**: Nossa aplicação precisa consumir arquivos estáticos como imagens, css e js que serão criados no processo de build. É interessante que esses dados sejam servidos em uma CDN e nesse caso usamos uma API simples.


## Sobre a Tecnologia Serverless

O nosso projeto faz uso da tecnologia serverless, para o deploy da nossa aplicação usando o AWS Lambda!

A tecnologia serverless é um modelo de computação em nuvem que permite que os desenvolvedores construam e implantem aplicativos sem se preocupar com a gestão de servidores ou infraestrutura. Em um ambiente serverless, as funções ou serviços são executados em resposta a eventos específicos, como solicitações HTTP, uploads de arquivos ou alterações em bancos de dados. A principal característica é que os recursos são alocados dinamicamente, escalando automaticamente com base na demanda, o que significa que você paga apenas pelo tempo de execução efetivo, tornando-o eficiente em termos de custo. Isso simplifica o desenvolvimento e permite que os desenvolvedores se concentrem na lógica do aplicativo, em vez de gerenciar servidores.

Estou incrivelmente empolgado com as possibilidades que essas tecnologias oferecem e como elas estão permitindo me permitindo criar uma aplicação web de alto desempenho e escalável. 

## Configurando o projeto

Certifique-se de ter o NodeJs instalado em seu dispositivo antes de prosseguir!
### Instalação de dependencias

```bash
yarn install
```

## Rodando em ambiente local

Rodar o projeto Vue usando o Vite:

```bash
yarn dev
```
Para acessar: 
[http://localhost:3000](http://localhost:3000)

Note: Utilize o link disponibilizado no terminal caso a porta 3000 já esteja em uso por outra aplicação!
## Deploy da aplicação no localstack

### Configurando localstack

Para rodar corretamente, certifique-se de ter instalado em sua maquina as seguintes tecnologias:

- LocalStack
- Docker
- awslocal CLI

### Para subir o container do localstack:

```bash
make start
```

### Para fazer o build do projeto:

```bash
make build
```

###  Para fazer o deploy da função lambda no localstack:

```bash
make deploy
```
#### Atenção
#### 1 - Fique atento aos comandos rodando no terminal, pressione 'q' quando perceber que o primeiro finalizou.
####  2 - Fique atento ao arquivo function_url.txt, ele vai conter informações da nossa função, sua url, por exemplo.

Ao finalizar o deploy, no arquivo function_url.txt teremos algo como:
```bash
{
    "FunctionUrl": "http://3y6znurim9cs7olmxsvxqocnouhu9aka.lambda-url.us-east-1.localhost.localstack.cloud:4566/",
    "FunctionArn": "arn:aws:lambda:us-east-1:000000000000:function:nuxt-on-lambda",
    "AuthType": "NONE",
    "CreationTime": "2023-09-13T01:41:19.834543+0000"
}

```

Acesse a URL da função para visualizar o site!

### Para atualizar a função:
```bash
# Refaça o build:
make build

# Atualize:
make update
```

### Para remover a função e os containers do projeto:
```bash
make down
```

Acesse o arquivo Makefile para saber o que cada comando faz.

# Veja o projeto

![Image 1](assets/Captura%20de%20tela%20de%202023-09-12%2022-11-01.png)
![Image 2](assets/Captura%20de%20tela%20de%202023-09-12%2022-11-12.png)
![Image 3](assets/Captura%20de%20tela%20de%202023-09-12%2022-13-24.png)
# Contribuições

Fique à vontade para entrar em contato se quiser saber mais sobre o projeto ou sobre essas tecnologias específicas 👨‍💻💡🌐
