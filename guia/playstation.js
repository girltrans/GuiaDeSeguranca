let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Entrar Na Sua Conta [Aqui](https://www.playstation.com/pt-br/)",
            "Minha Conta > Segurança",
            "Mudar o Email Da Conta, Se Não For o Seu"
        ]
    },
    {
        "points": [
            "Proteger o Email Original, Se Fornecido",
            "Ter o Email De Criação Da Conta",
            "Anote o Email De Criação Da Conta"
        ]
    },
    {
        "points": [
            "Proteger a Sua Conta",
            "Verificar PSN > Gestão Familiar",
            "Remova Todas As Conexões, Se Houver"
        ]
    },
    {
        "points": [
            "Certifique-Se De Que Não Há Consoles Conectados",
            "Verificar Dispositivo MGMT > Consoles",
            "Remova Todos Os Dispositivos, Se Houver"
        ]
    },
    {
        "points": [
            "Mudar a Senha > Segurança ",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
            "Certifique-Se Que a Sua Senha é Segura"
        ]
    },
    {
        "points": [
            `Ativar Autenticação De 2 Fatores Com [2FA](${redirectPage})`,
            "Ativar MFA Ou Uma Pergunta De Segurança",
            "Certifique-Se Que a Sua 2FA Está Segura"
        ]
    },
    {
        "points": [
            "Tirar Capturas De Tela/Foto Das Transações",
            "Armazene a Sua 2FA Com Segurança",
            "Adicionar Um Método De Pagamento Na PSN"
        ]
    }
]