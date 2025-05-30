let currentPageUrl = window.location.pathname
currentPageUrl = currentPageUrl.substring(1, currentPageUrl.lastIndexOf('/'))

const redirectPage = currentPageUrl + '/steamid.html'
window.steps = [
    {
        "points": [
            "Iniciar sessão na sua conta [aqui](https://steamcommunity.com/login/home)",
            "Ir para [Conta](https://store.steampowered.com/account) > Informações de contato",
            "Mudar email/excluir número de telefone"
        ]
    },
    {
        "points": [
            "Proteger dados sensíveis, se fornecido",
            "Localizar o email de criação da conta",
            "Ver se as datas de criação correspondem"
        ]
    },
    {
        "points": [
            "Mudar a senha [aqui](https://help.steampowered.com/en/wizard/HelpChangePassword)",
            "Certifique-se que a sua senha é segura",
            "Clique [aqui](https://bitwarden.com/password-generator) para gerar uma senha"
        ]
    },
    {
        "points": [
            "Ir para [Gerir o Steam Guard](https://store.steampowered.com/twofactor/manage)",
            "Configurar o Steam Guard no [Aplicativo](https://store.steampowered.com/twofactor/add_authenticator?authenticatortype=steam)",
            "Em alternativa, configurar SDA [aqui](https://github.com/Jessecar96/SteamDesktopAuthenticator/releases/tag/1.0.13)"
        ]
    },
    {
        "points": [
            "Resgatar uma \Licensa\ [aqui](https://store.steampowered.com/account/licenses)",
            "Se encontrar, peça a chave do produto",
            "Se não, use a sua chave de produto"
        ]
    },
    {
        "points": [
            "Baixar/salvar histórico de licenças [aqui](https://store.steampowered.com/account/licenses)",
            "Baixar/salvar histórico de compras [aqui](https://store.steampowered.com/account/history)",
            `Encontrar/salvar seu SteamID64 [aqui](${redirectPage})`
            
        ]
    }
]