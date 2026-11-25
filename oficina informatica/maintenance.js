
const device = document.getElementById("device");
const type = document.getElementById("type");
const category = document.getElementById("category");

const options = {
    computador: {
        hardware: [
            "Placa-mãe",
            "Memória RAM",
            "SSD / HD",
            "Placa de vídeo",
            "Fonte de alimentação",
            "Processador"
        ],
        software: [
            "Vírus ou malware",
            "Windows / Sistema operacional",
            "Computador lento",
            "Erro em programas",
            "Problemas com drivers"
        ]
    },

    notebook: {
        hardware: [
            "Tela",
            "Bateria",
            "Teclado",
            "Touchpad",
            "Carregador ou conector",
            "Placa-mãe",
            "Memória RAM",
            "SSD / HD"
        ],
        software: [
            "Vírus ou malware",
            "Windows / Sistema operacional",
            "Notebook lento",
            "Erro em programas",
            "Problemas com drivers"
        ]
    }
};

function updateCategories() {
    const selectedDevice = device.value;
    const selectedType = type.value;

    category.innerHTML = "";

    if (!selectedDevice || !selectedType) {
        category.innerHTML =
            '<option value="">Selecione primeiro o equipamento e o tipo</option>';
        return;
    }

    const categories = options[selectedDevice][selectedType];

    category.innerHTML =
        '<option value="">Selecione o problema</option>';

    categories.forEach(function(item) {
        const option = document.createElement("option");

        option.value = item;
        option.textContent = item;

        category.appendChild(option);
    });
}

device.addEventListener("change", updateCategories);
type.addEventListener("change", updateCategories);
