let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Entrar Na Sua Conta [Aqui](https://discord.com/login)",
            "Configurações > Minha Conta",
            "Mudar o Email Da Conta, Se Não For o Seu"
        ]
    },
    {
        "points": [
            "Proteger o Email Do Vendedor, Se Fornecido",
            "Ter o Email De Criação Da Conta",
            "Ver Se As Datas De Criação Correspondem"
        ]
    },
    {
        "points": [
            "Mudar a Sua Senha",
            "Certifique-Se Que a Sua Senha é Segura",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
        ]
    },
    {
        "points": [
            "Ver Se Tem Um Número De Telefone",
            "Se Existir Um Número, Alterá-Lo",
            "Utilize o Seu Próprio Número"
        ]
    },
    {
        "points": [
            "Desativar a Autenticação De 2 Fatores",
            "Remova SMS e As Chaves De Segurança",
            `Ativar Autenticação De 2 Fatores [2FA](${redirectPage})`
        ]
    },
    {
        "points": [
            "Volte Às Configurações",
            "Clique Em Aplicativos Autorizados",
            "Remova Todos Os Apps De Terceiros"
        ]
    },
    {
        "points": [
            "Ir Para Configurações > Dispositivos",
            "Sair De Todos Os Dispositivos",
            "Aguarde 48 Horas, Para Expirar As Sessões",
        ]
    }
]