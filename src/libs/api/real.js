export default function (API) {
  class RealAPI extends API {
    getStoryById (id) {
      return this.request({
        url: `/story/${id}`,
        type: "GET",
        name: 'story'
      })
    }
    getStories () {
      return this.request({
        url: "/storys",
        type: "GET",
        name: 'story'
      })
    }
  }
  return RealAPI
}
