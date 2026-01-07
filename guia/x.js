let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html'; 

const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Entrar Na Sua Conta [Aqui](https://x.com/login/)",
            "Ir Para [Conta](https://x.com/settings/account) > Informações Sobre a Conta",
            "Mudar o Email Da Conta, Se Não For o Seu"
        ]
    },
    {
        "points": [
            "Proteger o Email Original, Se Fornecido",
            "Ter o Email De Criação Da Conta",
            "Ver Se As Datas De Criação Correspondem"
        ]
    },
    {
        "points": [
            "Proteger a Sua Conta",
            "Remova o Número De Telefone Da Sua Conta [Aqui](https://x.com/settings/phone)",
            "[Limpar Todas As Sessões](https://x.com/settings/apps_and_sessions), Se Houver"
        ]
    },
    {
        "points": [
            "Mudar a Sua Senha [Aqui](https://x.com/settings/password)",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
            "Certifique-Se Que a Sua Senha é Segura"
        ]
    },
    {
        "points": [
            `Ativar Autenticação De 2 Fatores Com [2FA](${redirectPage})`,
            "Ativar Proteção De Redefinição De Senha [Aqui](https://x.com/settings/security)",
            "Certifique-Se Que a Sua 2FA Está Segura"
        ]
    },
    {
        "points": [
            "Baixar Os Seus Dados Do Email Original [Aqui](https://x.com/settings/account)",
            "Não Altere a Data De Nascimento.",
            "Não Altere o @ Da Sua Conta."
        ]
    }
]