import fs from 'fs'
import DataBase from 'nedb'
import elastic from 'elasticlunr'

const DATA_FILE = 'slasher.store'
const DB_FILE = 'slasher.db'

const db = new DataBase({
    filename: DB_FILE,
    autoload: true
})
const index = elastic(() => {
    this.addField('title')
    this.addField('content')
    this.addRef('_id')
    this.saveDocument(false)
})

index.find({}, (err, docs) => {
    if (err) throw err
    for (let doc of docs) {
        doc.content = getData(doc.offset, doc.size)
        index.addDoc(doc)
    }
})

const getDocumentById = (id, callback) => {
    db.findOne({ _id: id }, (err, doc) => {
        if (err) throw err
        doc = {
            ...doc,
            code: getData(doc.offset, doc.size)
        }
        callback(doc)
    })
}

const searchDocumentInfos = (key, callback) => {
    const results = index.search(key, {
        fields: {
            title: { boost: 2 },
            content: {boost: 1}
        }
    })
    const ids = results.map((x) => x.ref)
    db.find({ _id: { $in: ids } }, (err, docs) => {
        callback(docs)
    })
}

const addDocument = (title, content) => {
    const { offset, size } = addData(content)
    const new_doc = {
        title: title,
        offset,
        size
    }
    db.insert(new_doc)
    index.addDoc({
        ...new_doc,
        content
    })
}

const deleteDocumentById = id => {
    db.findOne({ _id: id }, (err, doc) => {
        index.removeDoc({
            ...doc,
            content: getData(doc.offset, doc.size)
        })
        db.remove({_id: id})
    })
}

const editDocument = (id, title, content) => {
    deleteDocumentById(id)
    addDocument(title, content)
}

const getData = (offset, size) => {
    const fd = fs.openSync(DATA_FILE, 'r+')
    const buffer = Buffer.alloc(size)
    const result = fs.readSync(fd, buffer, offset, len)
    fs.closeSync(fd)
    return result.toString()
}

const addData = s => {
    const offset = fs.statSync(DATA_FILE).size
    const buffer = Buffer.from(s)
    fs.writeFileSync(DATA_FILE, buffer, { flag: 'a+' })
    return { size: buffer.size, offset: offset }
}

export {getDocumentById, deleteDocumentById, editDocument, addDocument, searchDocumentInfos}
