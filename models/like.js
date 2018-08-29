import { HTTP } from '../util/http.js'

class LikeModel extends HTTP{

  like(behavior, argID, category){
    let url = behavior == 'like' ? 'like' : 'like/cancel' 
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: argID,
        type: category
      }
    })
  }

  getClassicLikeStatus(artID, category, callback){
    this.request({
      url: 'classic/' + category + '/' + artID + '/favor',
      success: callback
    })
  }
}

export { LikeModel}