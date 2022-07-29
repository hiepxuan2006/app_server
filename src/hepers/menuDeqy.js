class menudequy {
    categoryLoop = (data, id, text) => {
<<<<<<< HEAD
<<<<<<< HEAD
        let htmlSelect = []

        data.forEach(element => {
            if (element.parent_id === id) {
                htmlSelect += `<option value='${element.id}'> ${text} ${element.name}</option>`;
                data.forEach(e1 => {
                    if (e1.parent_id === element.id) {
                        htmlSelect += `<option value='${e1.id}'> --- ${e1.name}</option>`;
                        data.forEach(e2 => {
                            if (e2.parent_id === e1.id) {
                                htmlSelect += `<option value='${e2.id}'> ------ ${e2.name}</option>`;
                                data.forEach(e3 => {
=======
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
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
<<<<<<< HEAD
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
=======
        let htmlSelect = []

        data.forEach(element => {
            if (element.parent_id === id) {
                htmlSelect += `<option value='${element.id}'> ${text} ${element.name}</option>`;
                data.forEach(e1 => {
                    if (e1.parent_id === element.id) {
                        htmlSelect += `<option value='${e1.id}'> --- ${e1.name}</option>`;
                        data.forEach(e2 => {
                            if (e2.parent_id === e1.id) {
                                htmlSelect += `<option value='${e2.id}'> ------ ${e2.name}</option>`;
                                data.forEach(e3 => {
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
        return htmlSelect
    }
    categoryPostLoop = (data) => {
        let htmlSelect = []
        data.forEach(element => {
            htmlSelect += `<option value='${element.id}'> ${element.name}</option>`;

        })
        return htmlSelect
    }
}
module.exports = new menudequy
<<<<<<< HEAD
=======
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
>>>>>>> 824002c33fca7156164424210b4addd4c4fcf576
=======
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
>>>>>>> c8c0431c4f4942e507af55e1cddb489657edc5a1
