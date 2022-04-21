# iOasys Mobile 
## React Native Application using TypeScript

![My animated logo](src/assets/images/logo.png)

Incentivamos a agricultura artesanal e orgânica em apoio à pequenos e médios produtores familiares que necessitam aumentar sua fonte de renda promovendo a participação social local na distribuição dos mesmos alimentos adquiridos na assinatura, à quem se encontra em situação de fome.

# Features da Aplicação
- Cadastro de Usuário e Login
- Perfil do Usuário 
- Cadastro de Cestas
- Rendimentos do Produtor 
- Chave PIX 

> O Produtor, consegue se cadastrar no aplicativo
> fazer login com sua conta, cadastrar as suas cestas
> Ver os seus rendimentos
> Cadastrar a sua chave pix para recebimento do valor das cestas.
# 
- Cadastro de Usuário e Login
- Perfil do Usuário
- Home Page
- Minha Cesta
- Assinatura
- Doações

> O Consumidor, consegue se cadastrar no aplicativo
> fazer login com sua conta, fazer a assinatura da cesta que mais o atende
> e ainda consegue doar moedas para ajudar instituições com os produtos que ele não deseja da cesta

# Tecnologias Usadas
- React Native
- TypeScript
- NodeJS
- Styled Components
- Heroku

## Instalação do APP 

#Para configuração do nosso ambiente 
eguiremos os passos oferecidos pelo [React Native](https://reactnative.dev/docs/environment-setup)

Cestou requer [Node.js](https://nodejs.org/) 14.17.0+ para Rodar.
Cestou requer [Java](https://openjdk.java.net) 11.0.14.1+ para Rodar.

Instale o Node.JS e Java na sua máquina, caso ainda não possua

| Tecnologia | Versão |
| ------ | ------ |
| Node.js | 14.17.0+ |
| Java | 11.0.14.1+ |

Instalação via Prompt de Comando

```sh
choco install -y nodejs-lts openjdk11
```

É necessário um emulador para o aplicativo, utilizamos o [Android Studio](https://developer.android.com/studio)
Após a instalação, precisamos configurar o ambiente para que o aplicativo rode devidamente no seu dispositivo 

Configurando o ambiente ANDROID_HOME 
- 1 Aperte a Tecla windows ou HOME
- 2 Pesquiser por "Editar as variáveis de ambiente do sistema"
- 3 Entre em Variáveis de Ambiente...
- 4 Aperte em NOVO para criar um novo ANDROID_HOME para linkar o seu ANDROID SDK

|  |  |
| ------ | ------ |
| Variable name: | ANDROID_HOME |
| Variable value: | C:\Users[Sua Conta]\AppData\Local\Android\Sdk|

O SDK está instaliado, por padrão, na seguinte localidade:
```sh
%LOCALAPPDATA%\Android\Sdk
```
Abra uma nova janela do prompt de comando para garantir que a nova variável de ambiente seja carregada antes de prosseguir para a próxima etapa.
- 1 Abra o Powershell
- 2 Copie e cole Get-ChildItem -Path Env:\ dentro do Powershell
- 3 Verifique se o ANDROID_HOME foi adicionado

Configurando o JAVA_HOME 

- 1 Verifique a versão do java no Powershell
```sh
java --version
```
Estou utilizando a versão OpenJDK 11.0.14.1

- 2 Entre em Variáveis de Ambiente...
- 3 Aperte em NOVO para criar um novo JAVA_HOME para linkar a localidade do JAVA na sua máquina

|  |  |
| ------ | ------ |
| Variable name: | JAVA_HOME |
| Variable value: | C:\Program Files\OpenJDK\openjdk-11.0.14.1_1

Agora precisamos adicionar o Platform-Tools ao PATH

- 1 Entre em Variáveis de Ambiente...
- 2 Selecione a variável Path 
- 3 Clique em Editar
- 4 Clique em novo e adicione ao path o platform-tools para a lista.

A localidade padrão para esta pasta é:
```sh
%LOCALAPPDATA%\Android\Sdk\platform-tools
```

Adicione a localidade do OpenJDK ao PATH

- 1 Entre em Variáveis de Ambiente...
- 2 Selecione a variável Path 
- 3 Clique em Editar
- 4 Clique em novo e adicione o local do jdk C:\Program Files\OpenJDK\openjdk-11.0.14.1_1

## Clonando o Repositório e Instalando o YARN
# Utilizaremos o Android Studio para emular nosso Aplicativo e a IDE da sua preferência para rodar o código

**Clonando o repositório**
- Crie uma pasta onde preferir dentro da máquina e entre dentro dela 
- Instale o [GIT](https://git-scm.com)
- Abra o terminal dentro desta pasta criada e rode o seguinte comando:

```sh
git clone https://github.com/iOasys-G5-Fome-Zero/mobile.git
```
Caso não consiga, baixe o projeto compactado em formato zip pelo [Github - FomeZero | Mobile](https://github.com/iOasys-G5-Fome-Zero/mobile)

#
Precisaremos do [Yarn PKG](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) para instalar as dependências do aplicativo. 

**Install via NPM**
```sh
npm install --global yarn
```
**Cheque a Instalação**
```sh
yarn --version
```
Caso não consiga instalar via Terminal, verifique se instalou o Node Package corretamente ou Baixa o instalador pelo site do Yarn.



#Iniciando a Aplicação 
**Abra o seu Android Studio e Crie um novo dispositivo Virtual com Android 10.0+**
- Execute seu Aplicativo 

**Abra a IDE com seu código, e rode o seguinte comando dentro do terminal para instalar as depêndencias:""
```sh
yarn install
```

Após o término da instalação das dependências necessárias, precisaremos rodar o aplicativo com o seguinte comando: 
```sh
yarn run android
```
# Licença
## Esse aplicativo foi desenvolvido para o Camping da iOasys, ficaremos muito felizes caso queira contribuir com nosso código. 
©PowerHungers - G5





