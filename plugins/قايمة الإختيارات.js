//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

const sections = [
   {
  title: `*≡ قــايــمة الــاخــتـيارات !*`,
  rows: [
  {title: "🔮 | ترحيب", rowId: `${usedPrefix + command} ترحيب`},
  {title: "🌎 | عام", rowId: `${usedPrefix + command} عام`},
  {title: "🔞 | عيب", rowId: `${usedPrefix + command} عيب`},
  {title: "🧬 | انجليزي", rowId: `${usedPrefix + command} انجليزي`},
  {title: "🔗 | الروابط", rowId: `${usedPrefix + command} الروابط`},
    {title: "🚫 | الحذف", rowId: `${usedPrefix + command} الحذف`},
    {title: "🖼 | الملصق", rowId: `${usedPrefix + command} الملصق`},
  {title: "⏏️ | اللفل", rowId: `${usedPrefix + command} اللفل`},
  {title: "🗣️ | التكلم", rowId: `${usedPrefix + command} التكلم`},
  {title: "🔎 | كشف", rowId: `${usedPrefix + command} كشف`},
  {title: "📑 | الملفات", rowId: `${usedPrefix + command} الملفات`},
  {title: "🛡️ | قيد", rowId: `${usedPrefix + command} قيد`},
  {title: "💬 | خاص", rowId: `${usedPrefix + command} خاص`},
