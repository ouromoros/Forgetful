import DataBase from 'nedb'
import elastic from 'elasticlunr'

const DB_FILE = 'slasher.db'

const db = new DataBase({
    filename: DB_FILE,
    autoload: true
})
const index = elastic(function() {
    this.addField('title')
    this.addField('content')
    this.setRef('_id')
    this.saveDocument(false)
})

db.find({}, (err, docs) => {
    if (err) throw err
    for (let doc of docs) {
        index.addDoc(doc)
    }
})

const getDocumentById = (id, callback) => {
    db.findOne({ _id: id }, (err, doc) => {
        if (err) throw err
        callback(doc)
    })
}

const searchDocumentInfos = (key, callback) => {
    const results = index.search(key, {
        fields: {
            title: { boost: 2 },
            content: { boost: 1 }
        }
    })
    const ids = results.map((x) => x.ref)
    db.find({ _id: { $in: ids } }, (err, docs) => {
        callback(docs)
    })
}

const addDocument = (title, content) => {
    const doc = {
        title: title,
        content: content
    }
    db.insert(doc)
    index.addDoc(doc)
}

const deleteDocumentById = id => {
    db.findOne({ _id: id }, (err, doc) => {
        index.removeDoc(doc)
        db.remove({ _id: id })
    })
}

const editDocument = (id, title, content) => {
    deleteDocumentById(id)
    addDocument(title, content)
}

export { getDocumentById, deleteDocumentById, editDocument, addDocument, searchDocumentInfos }
