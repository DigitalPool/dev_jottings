const db = require ('./db.js')

//CREATE

const createItems = (name, description, callback) => {
    const sql = `INSERT INTO items (name, description) VALUES (? , ?)`
    db.run(sql, [name, description], function(error){
        callback(error, {id: this.lastID })
    })

}

//READ
const readItems = (callback) => {
    const sql = `SELECT * FROM items`
    db.all(sql, [], callback)
}

//UPDATE
const updateItems = (id, name, description, callback) => {
    const sql = `UPDATE items SET name = ?, description = ? WHERE id = ?`
    db.run(sql, [name, description, id], callback)
}

//DELETE
const deleteItems = (id, callback) => {
    const sql = `DELETE form items WHERE id = ?`
    db.run(sql, id, callback)
}

module.exports = {createItems, readItems, updateItems, deleteItems};