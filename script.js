// IP Extractor Functions
function clearIPExt(){
    document.getElementById("ta-rawtext-ip-ext").value = ""
    document.getElementById("ib-output-ip-ext").value = ""
}

function parse(){
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