function attachEvents() {
    let inputElement = document.getElementById("location");
    let buttonElement = document.getElementById("submit");
    let currentElement = document.getElementById("current");
    let upcomingElement = document.getElementById("upcoming");
    let forecastElement = document.getElementById("forecast");

    let symbolsMapper = {
        Sunny: "☀",
        "Partly sunny": "⛅",
        Overcast: "☁",
        Rain: "☂",
    };
    const BASE_URL = "http://localhost:3030/jsonstore/forecaster/locations";
    buttonElement.addEventListener("click", displayWeather);

    function displayWeather() {
        fetch(`${BASE_URL}`)
            .then((result) => result.json())
            .then((res) => {
                let locationObject = res.find((x) => x.name === inputElement.value);
                let searchedCode = locationObject.code;
                getCurrentWeather(searchedCode);
                getUpcomingWeather(searchedCode);
            })
            .catch(() => {
                let errorElement = document.createElement("p");
                errorElement.textContent = "Error";
                forecastElement.appendChild(errorElement);
                forecastElement.style.display = "block";

            });
    }

    function getCurrentWeather(code) {
        fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
            .then((result) => result.json())
            .then((res) => {
                let name = res.name;
                let condition = res.forecast.condition;
                let high = res.forecast.high;
                let low = res.forecast.low;
                let dataList = [name, `${low}°/${high}°`, condition];

                let divElement = document.createElement("div");
                divElement.classList.add("forecasts");

                let symbolElement = document.createElement("span");
                symbolElement.classList.add("condition", "symbol");
                symbolElement.textContent = `${symbolsMapper[condition]}`;
                divElement.appendChild(symbolElement);

                let conditionsSpan = document.createElement("span");
                conditionsSpan.classList.add("condition");

                for (data of dataList) {
                    let infoSpan = document.createElement("span");
                    infoSpan.classList.add("forecast-data");
                    infoSpan.textContent = data;
                    conditionsSpan.appendChild(infoSpan);
                }

                divElement.appendChild(conditionsSpan);
                currentElement.appendChild(divElement);
                forecastElement.style.display = "block";
            });
    }

    function getUpcomingWeather(code) {
        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
            .then((result) => result.json())
            .then((res) => {
                let upcomingDivElement = document.createElement("div");
                upcomingDivElement.classList.add("forecast-info");
                for (x of Object.values(res.forecast)) {
                    let upcomingSpanElement = document.createElement("span");
                    upcomingSpanElement.classList.add("upcoming");

                    let symbolElement = document.createElement("span");
                    symbolElement.classList.add("symbol");
                    symbolElement.textContent = symbolsMapper[x.condition];
                    upcomingSpanElement.appendChild(symbolElement);

                    let firstDataElement = document.createElement("span");
                    firstDataElement.classList.add("forecast-data");
                    firstDataElement.textContent = `${x.low}°/${x.high}°`;
                    upcomingSpanElement.appendChild(firstDataElement);

                    let secondDataElement = document.createElement("span");
                    secondDataElement.classList.add("forecast-data");
                    secondDataElement.textContent = x.condition;
                    upcomingSpanElement.appendChild(secondDataElement);

                    upcomingDivElement.appendChild(upcomingSpanElement);
                }
                upcomingElement.appendChild(upcomingDivElement);
            });
    }
}

attachEvents();