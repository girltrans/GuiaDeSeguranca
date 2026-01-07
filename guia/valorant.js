let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Proteger o Email Do Vendedor, Se Fornecido",
            "Entrar Na Sua Conta [Aqui](https://auth.riotgames.com/login)",
            "Trocar o Email e Clique Em Verificar Link"
        ]
    },
    {
        "points": [
            "Informações Pessoais > Mudar a Sua Senha",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
            "Certifique-Se Que a Sua Senha é Segura"
        ]
    },
    {
        "points": [
            "Remova Todas As Contas Conectadas",
            "Pode Ser Da Google Ou Da Apple. [Aqui](https://account.riotgames.com/#connected-accounts) ",
            "Certifique-Se De Que Estão Todas Removidas."
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
            "Finalizar a Conexão De Todos Na Sua Conta",
            "Limpar Todas As Conexões [Aqui](https://account.riotgames.com/#login-management)",
            "Certifique-Se Se Sua Região Está Correta [Aqui](https://account.riotgames.com/#personal-information) "
        ]
    },
]