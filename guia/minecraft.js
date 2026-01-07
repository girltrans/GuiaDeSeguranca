let currentPageUrl = window.location.pathname;
currentPageUrl = currentPageUrl.substring(0, currentPageUrl.lastIndexOf('/'));

const redirectPage = currentPageUrl + '/2fa.html';
const redirectPage2 = currentPageUrl + '/GerarSenha/index.html';

window.steps = [
    {
        "points": [
            "Entrar Na Sua Conta [Aqui](https://login.live.com/)",
            "Ir Para [Dispositivos](https://account.microsoft.com/devices)",
            "Remova Todos Os Dispositivos e Dê F5"
        ]
    },
    {
        "points": [
            "Abrir Uma Nova Página",
            "Ir Para [Atividade](https://account.live.com/Activity)",
            "Ispecionar Se Tem Novas Sessões Na Sua Conta"
        ]
    },
    {
        "points": [
            "Ir Para [Segurança](https://account.microsoft.com/security)",
            "Clique Em [Gerir Como Inicio Sessão](https://account.live.com/proofs/manage/additional)",
            "Colocar Seu Próprio Email De Recuperação"
        ]
    },
    {
        "points": [
            "Desligue Autenticação De 2 Fatores",
            "Remova Métodos De Recuperação Antigos",
            `Ativar Autenticação De 2 Fatores Com [2FA](${redirectPage})`
        ]
    },
    {
        "points": [
            "Clique Em Sair De Todos Os Locais",
            "Resetar Windows Hello (Exploit/Exploração)",
            "Gerar Um Novo Código De Recuperação"
        ]
    },
    {
        "points": [
            "[Mudar a Sua Senha](https://account.live.com/password/Change)",
            "Certifique-Se Que a Sua Senha é Segura",
            `Clique [Aqui](${redirectPage2}), Para Gerar Uma Nova Senha`,
        ]
    },
    {
        "points": [
            "Desativar o Alerta Em Email Da Sua Conta [Aqui](https://outlook.live.com/mail/options/mail/forwarding)",
            "Ir Para [Seu Perfil](https://account.microsoft.com/profile)",
            "Clique Em [Editar Informações Da Conta](https://account.live.com/names/manage)"
        ]
    },
    {
        "points": [
            "Adicionar Um Novo Endereço De Email",
            "Tornar o Seu Novo Email o Principal",
            "Remova Todos Os Outros Emails"
        ]
    },
    {
        "points": [
            "Mudar o Nome Da Sua Conta [Aqui](https://account.microsoft.com/profile/edit-name)",
            "Mudar a Data e a Localização Da Sua Conta [Aqui](https://account.live.com/editprof.aspx)",
            "Se Remova Da [Microsoft Família](https://account.microsoft.com/family)"
        ]
    },
    {
        "points": [
            "Remova Todos Os Aplicativos Conectados [Aqui](https://account.microsoft.com/privacy/app-access)",
            "Remova Todos Os Dispositivos Conectados [Aqui](https://account.microsoft.com/devices/content)",
            "Verificar Seu Nick e Sua Capa Em [Perfil](https://www.minecraft.net/en-us/msaprofile)"
        ]
    }
]