let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Proteger o Email Do Vendedor, Se Fornecido",
            "Mudar o Email Da Conta [Aqui](https://dashboard.kick.com/settings/profile), Se Não For o Seu",
            "Se Ter Um Número De Telefone Na Conta, Remova-o"
        ]
    },
    {
        "points": [
            "Mudar a Sua Senha [Aqui](https://dashboard.kick.com/settings/security)",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
            "Certifique-Se Que a Sua Senha é Segura"
        ]
    },
    {
        "points": [
            "Ativar a Sua Própria 2FA [Aqui](https://account.riotgames.com/#mfa-card)",
            `Ativar Autenticação De 2 Fatores Com [2FA](${redirectPage})`,
            "Certifique-Se Que a Sua 2FA Está Segura"
        ]
    },
    {
        "points": [
            "Reiniciar As Suas Chaves De Transmissão [Aqui](https://dashboard.kick.com/channel/stream)",
            "Não Altere o @ Da Sua Conta.",
            "Anote o Email De Criação Da Conta"
        ]
    },
]