let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Pedir Ao Vendedor Para Remover Telefone e 2FA",
            "Peça Ao Vendedor Para Trocar Para o Seu Email",
            "Por 48 Horas Não é Possível Mudar a Sua Senha"
        ]
    },
    {
        "points": [
            "Esqueci a Senha > Redefinir a Senha Por Email",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
            "Certifique-Se Que a Sua Senha é Segura"
        ]
    },
    {
        "points": [
            "Ativar a Sua Própria 2FA [Aqui](https://accounts.snapchat.com/settings)",
            `Ativar Autenticação De 2 Fatores Com [2FA](${redirectPage})`,
            "Certifique-Se Que a Sua 2FA Está Segura"
        ]
    },
    {
        "points": [
            "Baixe o Pacote De Dados Antigo Do Snapchat [Aqui](http://accounts.snapchat.com/accounts/downloadmydata)",
            "Em Caso De Um Erro Tentar Novamente Mais Tarde",
            "Espere 24 Horas e Tente Novamente"
        ]
    },
]