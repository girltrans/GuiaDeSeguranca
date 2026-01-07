let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Pedir Ao Vendedor Para [Desconectar Conexões](https://www.epicgames.com/account/connections)",
            "Proteger o Email Do Vendedor, Se Fornecido",
            "Seja Cauteloso Com Alterações De Email"
        ]
    },
    {
        "points": [
            "Pedir Ao Vendedor Para Remover Todas As 2FA",
            "Ativar a Sua Própria 2FA [Aqui](https://www.epicgames.com/account/password)",
            `Ativar Autenticação De 2 Fatores Com [2FA](${redirectPage})`,
        ]
    },
    {
        "points": [
            "Mudar a Sua Senha [Aqui](https://www.epicgames.com/account/password)",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
            "Certifique-Se Que a Sua Senha é Segura"
        ]
    },
    {
        "points": [
            "Baixe o PDF Que Contém o Seu Histórico [Aqui](hhttps://www.epicgames.com/account/personal)",
            "Falar Sobre Onde Veio a Conta Com o Vendedor",
            "Não Utilize Vários Ips, Para Evitar Bloqueios"
        ]
    }
]