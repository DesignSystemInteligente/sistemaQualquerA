const msgInput = document.getElementById('GET-name');
const linkEmail = document.getElementById('GET-email-link');

function enviarEmail() {
    linkEmail.href = "mailto:marinamicas@gmail.com?Subject=Contato%20pelo%20Sistema%20Qualquer&Body=" + msgInput.value;
    linkEmail.click();
}