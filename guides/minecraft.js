let currentPageUrl = window.location.pathname
currentPageUrl = currentPageUrl.substring(1, currentPageUrl.lastIndexOf('/'))

const redirectPage = currentPageUrl + './2FA/index.html'
window.steps = [
    {
        "points": [
            "Entrar na sua conta [aqui](https://login.live.com/)",
            "Ir para [Dispositivos](https://account.microsoft.com/devices)",
            "Remover todos os dispositivos e F5"
        ]
    },
    {
        "points": [
            "Abrir uma nova página",
            "Ir para [Atividade](https://account.live.com/Activity)",
            "Ispecionar se tem novas sessões"
        ]
    },
    {
        "points": [
            "Ir para [Segurança](https://account.microsoft.com/security)",
            "Clique em [Gerir como inicio sessão](https://account.live.com/proofs/manage/additional)",
            "Colocar seu próprio email de recuperação"
        ]
    },
    {
        "points": [
            "Desligue Autenticação de 2 Fatores",
            "Remover métodos de recuperação antigos",
            `Ativar Autenticação de 2 Fatores com [2FA](${redirectPage})`
        ]
    },
    {
        "points": [
            "Clique em Sair de todos dispositivos",
            "Resetar Windows Hello (Analisar)",
            "Gerar um novo código de recuperação"
        ]
    },
    {
        "points": [
            "[Mudar a senha](https://account.live.com/password/Change)",
            "Certifique-se que a sua senha é segura",
            "Clique [aqui](https://bitwarden.com/password-generator) para gerar uma senha"
        ]
    },
    {
        "points": [
            "Desativar o alerta em email [aqui](https://outlook.live.com/mail/options/mail/forwarding)",
            "Ir para [Seu Perfil](https://account.microsoft.com/profile)",
            "Clique em [Editar informações da conta](https://account.live.com/names/manage)"
        ]
    },
    {
        "points": [
            "Adicionar um novo endereço de email",
            "Tornar o seu novo email o principal",
            "Remover todos os outros emails"
        ]
    },
    {
        "points": [
            "Alterar o nome [aqui](https://account.microsoft.com/profile/edit-name)",
            "Alterar a data e a localização [aqui](https://account.live.com/editprof.aspx)",
            "Se remova de [Microsoft Família](https://account.microsoft.com/family)"
        ]
    },
    {
        "points": [
            "Remover todos os aplicativos [aqui](https://account.microsoft.com/privacy/app-access)",
            "Remover todos os dispositivos [aqui](https://account.microsoft.com/devices/content)",
            "Verificar seu Nick/Capa em [Perfil](https://www.minecraft.net/en-us/msaprofile)"
        ]
    }
]