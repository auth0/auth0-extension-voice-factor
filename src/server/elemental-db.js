"use strict";

const fs = require("fs");

function JsonFileElementalDB(filePath, schema, seed) {
    schema = schema || {};
    seed = seed || {};

    var db = seed;

    try {
        db = JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
        writeToDisk();
    }

    Object.keys(seed).forEach((key) => db[key] = db[key] || seed[key]);

    this.get = function (collection, callback) {
        if (!callback && typeof collection === "function") {
            callback = collection;
            collection = null;
        }

        if (collection && db[collection]) {
            callback(null, db[collection]);
        } else {
            callback(null, db);
        }
    };

    this.add = function (data, callback) {
        data = data || {};

        doAdd(db, data, schema);

        writeToDisk();

        callback();
    };

    this.remove = function (data, callback) {
        data = data || {};

        doRemove(db, data, schema);

        writeToDisk();

        callback();
    };

    this.update = function (data, callback) {
        data = data || {};

        doUpdate(db, data, schema);

        writeToDisk();

        callback();
    };

    this.mutate = function (changes, callback) {
        changes = changes || {};

        if (changes.update) {
            doUpdate(db, changes.update, schema);
        }

        if (changes.remove) {
            doRemove(db, changes.remove, schema);
        }

        if (changes.add) {
            doAdd(db, changes.add, schema);
        }

        writeToDisk();

        callback();
    };

    function writeToDisk() {
        fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
    }
}

function WebtaskStorageElementalDB(storage, schema, seed) {
    schema = schema || {};
    seed = seed || {};

    var upgraded = false;

    this.get = function (collection, callback) {
        storage.get(function (error, db) {
            if (error) { return callback(error); }

            var promise = Promise.resolve([]);

            if (!db) {
                db = seed;

                promise = new Promise(function (fulfill, reject) {
                    storage.set(db, (error) => {
                        if (error) {
                            return reject(error);
                        }

                        fulfill();
                    });
                });
            } else if (!upgraded) {
                Object.keys(seed).forEach((key) => db[key] = db[key] || seed[key]);

                upgraded = true;
            }

            promise.then(() => {
                if (!callback && typeof collection === "function") {
                    callback = collection;
                    collection = null;
                }

                if (collection && db[collection]) {
                    callback(null, db[collection]);
                } else {
                    callback(null, db);
                }
            }).catch((error) => callback(error));
        });
    };

    this.add = function (data, callback) {
        data = data || {};

        this.get(function (error, db) {
            if (error) { return callback(error); }

            doAdd(db, data, schema);

            storage.set(db, callback);
        });
    };

    this.remove = function (data, callback) {
        data = data || {};

        this.get(function (error, db) {
            if (error) { return callback(error); }

            doRemove(db, data, schema);

            storage.set(db, callback);
        });
    };

    this.update = function (data, callback) {
        data = data || {};

        this.get(function (error, db) {
            if (error) { return callback(error); }

            doUpdate(db, data, schema);

            storage.set(db, callback);
        });
    };

    this.mutate = function (changes, callback) {
        changes = changes || {};

        this.get(function (error, db) {
            if (error) { return callback(error); }

            if (changes.update) {
                doUpdate(db, changes.update, schema);
            }

            if (changes.remove) {
                doRemove(db, changes.remove, schema);
            }

            if (changes.add) {
                doAdd(db, changes.add, schema);
            }

            storage.set(db, callback);
        });
    };
}

function doAdd(db, data, schema) {
    for (var key of Object.keys(data)) {
        var type = (schema[key] && schema[key].type) || "array";

        switch (type) {
            case "map":
                db[key] = db[key] || {};
                data[key].forEach((element) => db[key][element.id] = element.value);
                break;

            case "array":
                db[key] = db[key] || [];
                data[key].forEach((element) => db[key].push(element));
                break;

            case "singleton":
                db[key] = data[key];
                break;

            default:
                break;
        }
    }
}

function doRemove(db, data, schema) {
    for (var key of Object.keys(data)) {
        var type = (schema[key] && schema[key].type) || "array";

        switch (type) {
            case "map":
                db[key] = db[key] || {};
                data[key].forEach((element) => delete db[key][element.id]);
                break;

            case "array":
                db[key] = db[key] || [];
                data[key].forEach((element) => {
                    var index = db[key].indexOf(element);

                    if (index > -1) {
                        db[key].splice(index, 1);
                    }
                });
                break;

            case "singleton":
                delete db[key];
                break;

            default:
                break;
        }
    }
}

function doUpdate(db, data, schema) {
    for (var key of Object.keys(data)) {
        var type = (schema[key] && schema[key].type) || "array";

        switch (type) {
            case "map":
                db[key] = data[key];
                break;

            case "array":
                db[key] = data[key];
                break;

            case "singleton":
                db[key] = data[key];
                break;

            default:
                break;
        }
    }
}

module.exports = {
    JsonFileElementalDB: JsonFileElementalDB,
    WebtaskStorageElementalDB: WebtaskStorageElementalDB
};