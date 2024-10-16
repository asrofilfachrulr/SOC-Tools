const ipv4Regex = /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g;

// toast message functions
function hideToastSuccess(){
    document
    .getElementById("toast-success")
    .classList
    .add("hidden", "toast-hidden")

    document
    .getElementById("toast-success-msg").innerText = ""
}

function showToast(msg){
    document
    .getElementById("toast-success")
    .classList
    .remove("hidden", "toast-hidden")

    document
    .getElementById("toast-success-msg").innerText = msg

    setTimeout(() => {
        hideToastSuccess()
    }, 3000)
}

// IP Extractor Functions
function clearIPExt(){
    document.getElementById("ta-rawtext-ip-ext").value = ""
    document.getElementById("ib-output-ip-ext").value = ""
}

function extract(){
    text = document.getElementById("ta-rawtext-ip-ext").value

    const ipAddresses = new Set(text.match(ipv4Regex)) || [];

    const output = [...ipAddresses].join(", ")
    document.getElementById("ib-output-ip-ext").value = output
}

function copyIPExt(){
    const text = document.getElementById("ib-output-ip-ext").value
    navigator.clipboard.writeText(text)

    showToast("Berhasil disalin")
}

function extractNCopy() {
    extract()
    copyIPExt()
}

// Defang URL Functions

function clearDefang(){
    document.getElementById("ib-rawtext-url-defang").value = ""
    document.getElementById("ib-output-url-defang").value = ""
}

function defang(){
    text = document.getElementById("ib-rawtext-url-defang").value

    const defang = text.replace(/:/g, '[:]')
                        .replace(/\./g, '[.]')
                        .replace(/\//g, '[/]');


    document.getElementById("ib-output-url-defang").value = defang
}

function copyDefang(){
    const text = document.getElementById("ib-output-url-defang").value
    navigator.clipboard.writeText(text)

    showToast("Berhasil disalin")
}

function defangNCopy() {
    defang()
    copyDefang()
}

// IP Reputation Check Functions
function validateIPv4(text){
    return text.match(ipv4Regex) != null ? true : false
}


function virusTotalCheck() {
    const text = document.getElementById("ib-rawtext-ip-check").value
    if(validateIPv4(text))
        window.open(`https://www.virustotal.com/gui/ip-address/${text}`, '_blank')
}

function abuseIPDBCheck() {
    const text = document.getElementById("ib-rawtext-ip-check").value
    if(validateIPv4(text))
        window.open(`https://www.abuseipdb.com/check/${text}`, '_blank')
}