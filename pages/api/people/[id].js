import { people } from '../../../data'

/** id にあるユーザを取得 or id に合わなければエラーメッセージを返す */
export default function personHandler({ query: { id } }, res) {
  const filtered = people.filter((p) => p.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Ooops!!! User with id: ${id} not found.....` })
  }
}