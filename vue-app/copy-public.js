import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(dir, '..')

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return
  fs.mkdirSync(dest, { recursive: true })
  for (const name of fs.readdirSync(src)) {
    const s = path.join(src, name)
    const d = path.join(dest, name)
    if (fs.statSync(s).isDirectory()) copyDir(s, d)
    else fs.copyFileSync(s, d)
  }
}

copyDir(path.join(root, 'images'), path.join(dir, 'public', 'images'))
copyDir(path.join(root, 'css'), path.join(dir, 'public', 'css'))
copyDir(path.join(root, 'videos'), path.join(dir, 'public', 'videos'))
