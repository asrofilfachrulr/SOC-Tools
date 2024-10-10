// IP Extractor Functions
function clearIPExt(){
    document.getElementById("ta-rawtext-ip-ext").value = ""
    document.getElementById("ib-output-ip-ext").value = ""
}

function extract(){
    const ipv4Regex = /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g;

    text = document.getElementById("ta-rawtext-ip-ext").value

    const ipAddresses = new Set(text.match(ipv4Regex)) || [];

    const output = [...ipAddresses].join(", ")
    document.getElementById("ib-output-ip-ext").value = output
}

function copyIPExt(){
    const text = document.getElementById("ib-output-ip-ext").value
    navigator.clipboard.writeText(text)
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
}