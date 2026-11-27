
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


const appointmentDate = document.getElementById("appointment-date");

// Obtém a data de hoje no horário local
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const todayFormatted = `${year}-${month}-${day}`;

// Impede a seleção de datas anteriores a hoje
appointmentDate.min = todayFormatted;
