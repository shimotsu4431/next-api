import { people } from '../../../data'

/** peopele のリストを一括で取得 */
export default (req, res) => {
  res.status(200).json(people)
}
