
    // const som = document.querySelector('#som');
    // const usd = document.querySelector('#usd');


    // const convert = (elem, target, isTrue) => {
    //     elem.addEventListener("input", () => {
    //         const req = new XMLHttpRequest();
    //         req.open("GET", "data.json");
    //         req.setRequestHeader("Content-type", "application/json");
    //         req.send();
    //         req.addEventListener("load", () => {
    //             const response = JSON.parse(req.response);
    //             isTrue
    //                 ? (target.value = (elem.value / response.usd).toFixed(2))
    //                 : (target.value = (elem.value * response.usd).toFixed(2));
    //
    //             elem.value === "" && (target.value = "");
    //         });
    //     });
    // };
    // convert(som, usd, 42);
    // convert(usd, som, "");

    const inputs = document.querySelectorAll('input');
    const toConvert = (target,input,data) => {
        (target.id === 'som')
            ?input.value = (target.value / data[input.id]).toFixed(2)
            :input.value = (target.value * data[target.id] / data[input.id]).toFixed(2);
    }
    document.body.addEventListener('input',(event) => {
        const req = new XMLHttpRequest();
        req.open('GET','data.json');
        req.setRequestHeader('Content-type','application/json');
        req.send();
        req.addEventListener('load', () => {
            const data = JSON.parse(req.response);
            inputs.forEach((item) => {
                if (item === event.target) return
                (!event.target.value)
                    ?item.value = ''
                    :toConvert(event.target,item,data);
            });
        });
    });
