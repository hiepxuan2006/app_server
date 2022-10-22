class menudequy {
    categoryLoop = (data, id, text) => {
        let htmlSelect = [];

        data.forEach((element) => {
            if (element.parent_id === id) {
                htmlSelect += `<option value='${element.id}'> ${text} ${element.name}</option>`;
                data.forEach((e1) => {
                    if (e1.parent_id === element.id) {
                        htmlSelect += `<option value='${e1.id}'> --- ${e1.name}</option>`;
                        data.forEach((e2) => {
                            if (e2.parent_id === e1.id) {
                                htmlSelect += `<option value='${e2.id}'> ------ ${e2.name}</option>`;
                                data.forEach((e3) => {
                                    if (e3.parent_id === e2.id) {
                                        htmlSelect += `<option value='${e3.id}'> --------- ${e3.name}</option>`;
                                    }
                                });
                            }
                        });
                        // categoryLoop(data, id = e1.id, text += '--')
                    }
                });
            }
        });
        return htmlSelect;
    };
    categoryPostLoop = (data) => {
        let htmlSelect = [];
        data.forEach((element) => {
            htmlSelect += `<option value='${element.id}'> ${element.name}</option>`;
        });
        return htmlSelect;
    };
}
module.exports = new menudequy();
