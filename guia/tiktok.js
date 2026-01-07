let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Verificar Se o @ é Um Duplicado, Pesquise o @",
            "Proteger Primeiro No Celular, Limitado Na Web",
            "Verificar Se Existe Uma Recuperação Externa"
        ]
    },
    {
        "points": [
            "Se Ter Conexão Com o Google, Conta Vulnerável",
            "Pedir Ao Vendedor Para Mover o Email Para o Seu",
            "Privacidade > Gerir Conta > Email"
        ]
    },
    {
        "points": [
            "Mudar a Sua Senha",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
            "Privacidade > Segurança > Dispositivos"
        ]
    },
    {
        "points": [
            "Finalizar a Conexão De Todos Na Sua Conta",
            `Ativar Autenticação De 2 Fatores Com [2FA](${redirectPage})`,
            "Não Use VPN Na Sua Conta, Para Evitar Limites"
        ]
    },
]