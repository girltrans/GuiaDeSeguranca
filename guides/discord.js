let currentPageUrl = window.location.pathname
currentPageUrl = currentPageUrl.substring(1, currentPageUrl.lastIndexOf('/'))

const redirectPage = currentPageUrl + './2FA/index.html'
window.steps = [
    {
        "points": [
            "Entrar na sua conta [aqui](https://discord.com/login)",
            "Configurações > Minha conta",
            "Mudar o email se não for o original"
        ]
    },
    {
        "points": [
            "Proteger email original, se fornecido",
            "Ter o email de criação da conta",
            "Ver se as datas de criação correspondem"
        ]
    },
    {
        "points": [
            "Mudar a senha",
            "Certifique-se que a sua senha é segura",
            "Clique [aqui](https://bitwarden.com/password-generator) para gerar uma senha"
        ]
    },
    {
        "points": [
            "Ver se tem um número de telefone",
            "Se existir um número, alterá-lo",
            "Utilize o seu próprio número"
        ]
    },
    {
        "points": [
            "Desativar a Autenticação de 2 Fatores",
            "Remover SMS e as chaves de segurança",
            `Ativar Autenticação de 2 Fatores com [2FA](${redirectPage})`
        ]
    },
    {
        "points": [
            "Volte às configurações",
            "Clique em Aplicativos autorizados",
            "Remova todos os aplicativos de terceiros"
        ]
    },
    {
        "points": [
            "Ir para configurações > Dispositivos",
            "Sair de todos os dispositivos conhecidos",
            "Aguarde 48 horas para expirar as sessões"
        ]
    }
]