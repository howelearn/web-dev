const CACHE_KEY = "calculation_history";

function checkForStorage() {
    return typeof(Storage) !== "undefined"
}

function putHistory(data) {
    if (checkForStorage()) {
        let hisotryData = null;
            if (localStorage.getItem(CACHE_KEY) === null) {
                hisotryData = [];
            } else {
                hisotryData = JSON.parse(localStorage.getItem(CACHE_KEY));
            }

            hisotryData.unshift(data);

            if (hisotryData.length > 5) {
                hisotryData.pop();
            }

            localStorage.setItem(CACHE_KEY, JSON.stringify(hisotryData));
    }
}

function showHistory() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

function renderHistory() {
    const historyData = showHistory();
    let hisotryData = document.querySelector("#historyList");

    historyList.innerHTML = "";

    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";

        historyList.appendChild(row);

    }
}

renderHistory();