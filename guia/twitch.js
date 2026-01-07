let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Proteger o Email Do Vendedor, Se Fornecido",
            "Trocar o Seu Email [Aqui](https://www.twitch.tv/settings/security)",
            "Desconexão Geral De 24 Horas"
        ]
    },
    {
        "points": [
            "Mudar a Sua Senha [Aqui](https://www.twitch.tv/settings/security)",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
            "Certifique-Se Que a Sua Senha é Segura"
        ]
    },
    {
        "points": [
            "Ativar a Sua Própria 2FA [Aqui](https://www.twitch.tv/settings/security)",
            `Ativar Autenticação De 2 Fatores Com [2FA](${redirectPage})`,
            "Certifique-Se Que a Sua 2FA Está Segura"
        ]
    },
    {
        "points": [
            "Ter Data De Nascimento Da Conta Com o Vendedor",
            "Não Altere o @ Da Sua Conta.",
            "Faça Desconexão Geral De 24 Horas Novamente."
        ]
    },
]