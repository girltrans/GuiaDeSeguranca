let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Entrar Na Sua Conta Pelo Celular",
            "Verificar Os Emails De Confiança No Celular",
            "Sair > Esqueci a Senha > Preciso De Mais Ajuda"
        ]
    },
    {
        "points": [
            "Pedir Ao Vendedor Para Remover Todas As 2FA",
            "Proteger o Email Original, Se Fornecido",
            "Atualizar Email/Telefone, Senha, e 2FA"
        ]
    },
    {
        "points": [
            "Peça Ao Vendedor Para Trocar Para o Seu Email",
            "Trocar o Número De Telefone e Ativar o SMS/2FA",
            "[Limpar Todas As Sessões](https://accountscenter.instagram.com/password_and_security/), Se Houver"
        ]
    },
    {
        "points": [
            "Espere 5-7 Dias, Altere a Senha e o 2FA",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
            "Certifique-Se Que a Sua Senha é Segura"
        ]
    },
    {
        "points": [
            `Ativar Autenticação De 2 Fatores Com [2FA](${redirectPage})`,
            "Se Não Ter, Adicione Uma Chave De Acesso",
            "Certifique-Se Que a Sua 2FA Está Segura"
        ]
    },
    {
        "points": [
            "Baixar Seus Dados Do Email Original [Aqui](https://accountscenter.instagram.com/info_and_permissions/dyi/)",
            "Exportar Para o Seu Número De Telefone",
            "Terminar a Sessão De Todos Os Dispositivos [Aqui](https://accountscenter.instagram.com/password_and_security/login_activity/)"
        ]
    }
]