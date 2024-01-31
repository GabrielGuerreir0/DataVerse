const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
let totalColumns = 0;
let totalValues = 0;

function generateTable() {
    totalColumns = parseInt(document.getElementById('numColumns').value);
    const requestedTotalValues = parseInt(document.getElementById('totalValues').value);
    if(totalColumns>26){
        alert("o numero de colunas vele estar entre 1 e 26, por favor tente novamente");
        return false;
    }
    if(requestedTotalValues>100){
        alert("Por favor informe uma quantidae de ate no maximo 100 valores");
        return false;
    }

    // Garante que a quantidade total de valores seja igual à quantidade especificada pelo usuário
    totalValues = requestedTotalValues;

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    // Adicionando contadores de colunas e valores
    const columnCounter = document.getElementById('columnCounter');
    const valueCounter = document.getElementById('valueCounter');

    columnCounter.innerText = `Colunas: ${totalColumns}`;
    valueCounter.innerText = `Valores: ${totalValues}`;

    const valuesDistribution = distributeValuesRandomly(totalValues, totalColumns);

    for (let i = 0; i < totalColumns; i++) {
        const columnId = ALPHABET[i];
        const column = document.createElement('div');
        column.className = 'table-column';
        column.innerHTML = `<p>${columnId}</p>`;
        tableContainer.appendChild(column);

        const valuesInColumn = valuesDistribution[i];

        for (let j = 0; j < valuesInColumn.length; j++) {
            const value = valuesInColumn[j];
            const valueCell = document.createElement('div');
            valueCell.className = 'value-cell';
            valueCell.innerText = value;
            column.appendChild(valueCell);
        }
    }
}

function distributeValuesRandomly(totalValues, totalColumns) {
    const valuesDistribution = [];

    for (let i = 0; i < totalColumns; i++) {
        valuesDistribution.push([]);
    }

    const previousValues = new Set();

    for (let i = 0; i < totalValues; i++) {
        const randomColumnIndex = getRandomNumberInRange(0, totalColumns - 1);
        const randomValue = generateUniqueRandomValue(previousValues);

        valuesDistribution[randomColumnIndex].push(randomValue);
        previousValues.add(randomValue);
    }

    return valuesDistribution;
}

function generateUniqueRandomValue(previousValues) {
    let randomValue;
    do {
        randomValue = Math.floor(Math.random() * 100);
    } while (previousValues.has(randomValue));

    return randomValue;
}

function addSpecificValue() {
    const specifiedValue = parseInt(document.getElementById('specifiedValue').value);

    if (!isNaN(specifiedValue)) {
        const columns = document.querySelectorAll('.table-column');
        let valueExists = false;

        for (const column of columns) {
            const valueCells = column.querySelectorAll('.value-cell');

            for (const valueCell of valueCells) {
                const cellValue = parseInt(valueCell.innerText);

                if (!isNaN(cellValue) && cellValue === specifiedValue) {
                    // Valor já existe em alguma coluna, adiciona à mesma coluna
                    column.appendChild(createValueCell(specifiedValue));
                    valueExists = true;
                    break;
                }
            }

            if (valueExists) {
                break;
            }
        }

        // Se o valor não existe em nenhuma coluna, adiciona aleatoriamente
        if (!valueExists) {
            const randomColumnIndex = getRandomNumberInRange(0, totalColumns - 1);
            const randomColumn = columns[randomColumnIndex];
            randomColumn.appendChild(createValueCell(specifiedValue));
        }

        updateCounters();
    } else {
        alert('Digite um valor numérico válido.');
    }
}

function createValueCell(value) {
    const valueCell = document.createElement('div');
    valueCell.className = 'value-cell';
    valueCell.innerText = value;
    return valueCell;
}

function removeSpecificValue() {
    const specifiedRemoveValue = parseInt(document.getElementById('specifiedRemoveValue').value);
    if (!isNaN(specifiedRemoveValue)) {
        const columns = document.querySelectorAll('.table-column');

        for (const column of columns) {
            const valueCells = column.querySelectorAll('.value-cell');
            for (const valueCell of valueCells) {
                const cellValue = parseInt(valueCell.innerText);
                if (!isNaN(cellValue) && cellValue === specifiedRemoveValue) {
                    column.removeChild(valueCell);
                    updateCounters();
                    return;
                }
            }
        }

        alert('Valor não encontrado na tabela.');
    } else {
        alert('Digite um valor numérico válido.');
    }
}

function searchValue() {
    const searchValueInput = document.getElementById('searchValueInput');
    const searchValue = parseInt(searchValueInput.value);

    if (!isNaN(searchValue)) {
        const columns = document.querySelectorAll('.table-column');
        let found = false;

        for (let i = 0; i < totalColumns; i++) {
            const column = columns[i];
            const valueCells = column.querySelectorAll('.value-cell');

            for (let j = 0; j < valueCells.length; j++) {
                const valueCell = valueCells[j];
                const cellValue = parseInt(valueCell.innerText);

                if (!isNaN(cellValue) && cellValue === searchValue) {
                    // Animação de destaque do valor na coluna
                   setTimeout(() => {
                        highlightColumn(column);
                    }, j * 500);

                    // Animação de destaque da coluna
                    
                    setTimeout(() => {
                        highlightValue(valueCell);
                    }, (j + 1) * 500);

                    found = true;
                    break;
                }
            }

            if (found) {
                break;
            }
        }

        if (!found) {
            alert('Valor não encontrado na tabela.');
        }
    } else {
        alert('Digite um valor numérico válido.');
    }
}

function highlightValue(valueCell) {
    valueCell.style.backgroundColor = 'purple';
    setTimeout(() => {
        valueCell.style.backgroundColor = '';
    }, 3000);
}

function highlightColumn(column) {
    column.classList.add('highlighted-column');
    setTimeout(() => {
        column.classList.remove('highlighted-column');
    }, 4000);
}

function updateCounters() {
    const columnCounter = document.getElementById('columnCounter');
    const valueCounter = document.getElementById('valueCounter');

    const columns = document.querySelectorAll('.table-column');
    columnCounter.innerText = `Colunas: ${columns.length}`;

    let totalValuesCount = 0;
    for (const column of columns) {
        const valueCells = column.querySelectorAll('.value-cell');
        totalValuesCount += valueCells.length;
    }

    valueCounter.innerText = `Valores: ${totalValuesCount}`;
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.addEventListener('DOMContentLoaded', function () {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(function (btn) {
        const panelId = btn.nextElementSibling.id;
        const panel = document.getElementById(panelId);

        panel.style.display = 'none';

        btn.addEventListener('click', function () {
            toggleAccordion(panel);
        });
    });
});

// Adicione a seguinte função para manipular o acordeão
function toggleAccordion(panel) {
    if (window.getComputedStyle(panel).display === 'none') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}