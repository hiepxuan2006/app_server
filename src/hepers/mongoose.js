module.exports = {
<<<<<<< HEAD
    multipleMongooseToObject: function (data) {
        return data.map((item) => item.toObject());
    },
    mongooseToObject: function (data) {
        return data ? data.toObject() : data;
    },
};
=======
    multipleMongooseToObject: function(data) {
        return data.map((item) => item.toObject())
    },
    mongooseToObject: function(data) {
        return data ? data.toObject() : data
    }
}
>>>>>>> 9976f261982f6fd2df5b85cfcaee3acac0ed7665
