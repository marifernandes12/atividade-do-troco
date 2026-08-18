function calcular() {
    let preco = Number(document.getElementById("preco").value);
    let quantidade = Number(document.getElementById("quantidade").value);
    let dinheiro = Number(document.getElementById("dinheiro").value);

    let total = preco * quantidade;
    let troco = dinheiro - total;

    if (troco >= 0) {
        document.getElementById("resultado").innerHTML =
            "TROCO = " + troco.toFixed(2);
    } else {
        document.getElementById("resultado").innerHTML =
            "DINHEIRO INSUFICIENTE";
    }}