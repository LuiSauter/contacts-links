import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

export const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export const postNewNote = async (content) => {
  const note = { content, important: false }
  const response = await axios.post(baseUrl, note)
  return response.data
}

export const updateNote = async (note) => {
  const { id } = note
  const response = await axios.put(`${baseUrl}/${id}`, note)
  return response.data
}
