const FILE_STORAGE = {
    file: {
        storedFile: {
            fileId: "storedFile",
            originalName: "foobarbaz.xlsx",
            size: Math.pow(1024, 2)
        }
    },
    save: function (fileId, blobFileInfo) {
        return this.file[fileId] = {
            fileId,
            ...blobFileInfo
        }
    },
    get: function (fileId) {
        return this.file[fileId]
    },
    remove: function (fileId) {
        if (this.file[fileId]) {
            delete this.file[fileId]
        }
    },
    includes: function (fileId) {
        return !!this.file[fileId]
    }
}

module.exports = {
    FILE_STORAGE
}