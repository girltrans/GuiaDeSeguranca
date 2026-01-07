let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/steamid.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Iniciar Sessão Na Sua Conta [Aqui](https://steamcommunity.com/login/home)",
            "Ir Para [Conta](https://store.steampowered.com/account) > Dados De Contato",
            "Mudar Email/Excluir Número De Telefone"
        ]
    },
    {
        "points": [
            "Proteger Dados Sensíveis, Se Fornecido",
            "Localizar o Email De Criação Da Conta",
            "Ver Se As Datas De Criação Correspondem"
        ]
    },
    {
        "points": [
            "Mudar a Sua Senha [Aqui](https://help.steampowered.com/en/wizard/HelpChangePassword)",
            "Certifique-Se Que a Sua Senha é Segura",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
        ]
    },
    {
        "points": [
            "Ir Para [Gerir o Steam Guard](https://store.steampowered.com/twofactor/manage)",
            "Configurar o Steam Guard No [Aplicativo](https://store.steampowered.com/twofactor/add_authenticator?authenticatortype=steam)",
            "Em Alternativa, Configurar SDA [Aqui](https://github.com/Jessecar96/SteamDesktopAuthenticator/releases/tag/1.0.13)"
        ]
    },
    {
        "points": [
            "Resgatar Uma Licensa [Aqui](https://store.steampowered.com/account/licenses)",
            "Se Encontrar, Peça a Chave Do Produto",
            "Se Não, Use a Sua Chave De Produto"
        ]
    },
    {
        "points": [
            "Baixar/Salvar Histórico De Licenças [Aqui](https://store.steampowered.com/account/licenses)",
            "Baixar/Salvar Histórico De Compras [Aqui](https://store.steampowered.com/account/history)",
            `Encontrar/Salvar Seu SteamID64 [Aqui](${redirectPage})`
        ]
    }
]