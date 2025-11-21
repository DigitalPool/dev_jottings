import crypto from 'crypto'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// Database helper functions
export function runQuery(db, query, params = []) {
  return new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) reject(err)
      else resolve(this)
    })
  })
}

export function getQuery(db, query, params = []) {
  return new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) reject(err)
      else resolve(row)
    })
  })
}

export function allQuery(db, query, params = []) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err)
      else resolve(rows)
    })
  })
}

export function validateUsername(username) {
  return typeof username === 'string' && /^[A-Za-z0-9]{3,30}$/.test(username.trim())
}

export function validateEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function validatePassword(password) {
  return typeof password === 'string' && password.length >= 6 && password.length <= 200
}

export function generateSessionToken(userId) {
  const randomPart = crypto.randomBytes(32).toString("hex")
  return `${userId}.${randomPart}`
}

export function generateMatchToken() {
  const randomPart = crypto.randomBytes(24).toString("hex")
  return `mt.${randomPart}`
}

export function generateSafeFilename(mimetype) {
  const extension = mimetype.split('/')[1]
  const random = Math.random().toString(36).substring(2, 15)
  return `${Date.now()}_${random}.${extension}`
}
