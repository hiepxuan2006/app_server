module.exports = {
    multipleMongooseToObject: function (data) {
        return data.map((item) => item.toObject());
    },
    mongooseToObject: function (data) {
        return data ? data.toObject() : data;
    },
};
