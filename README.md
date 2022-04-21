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

Para configuração do nosso ambiente 
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





