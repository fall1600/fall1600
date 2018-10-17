export default function (API) {
  class RealAPI extends API {
    getStoryById (id) {
      return this._request("PUT", `/story/${id}`)
    }
  }
  return RealAPI
}
