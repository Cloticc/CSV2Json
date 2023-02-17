var SignupButtons = {
    request: function (element) {
        element.classList.add("-request");
    },

    success: function (element) {
        element.classList.remove("-request");
        element.classList.add("-success");
    },

    reset: function (element) {
        element.classList.remove("-success");
    },

    flow: function (element) {
        SignupButtons.request(element);

        setTimeout(function () {
            SignupButtons.success(element);
        }, 2150);

        setTimeout(function () {
            SignupButtons.reset(element);
        }, 4000);
    },

    init: function () {
        var buttons = document.querySelectorAll("button");

        for (let i = 0; i < buttons.length; i++) {
            var button = buttons[i];

            button.addEventListener("click", function () {
                SignupButtons.flow(button);
            });
        }
    }
};

window.onload = SignupButtons.init;

function convertCSV() {
    const csvText = csv.value;
    const lines = csvText.split("\n");
    const result = [];
    const headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(",");
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    json.value = JSON.stringify(result);
    SignupButtons.success(convert);
}

window.onload = function () {
    SignupButtons.init();

    const convert = document.getElementById("convert");
    convert.addEventListener("click", function () {
        SignupButtons.flow(convert);
        convertCSV();
    });
};
