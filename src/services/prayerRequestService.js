import superagent from 'superagent';

export default class PrayerRequestService {

  getAccountRoles = async () => {
    return await this.request({
      method: 'PUT',
      url: '/api/v1/user',
    });
  }

  getPrayers = async () => {
    return await this.request({
      method: 'GET',
      url: '/api/v1/prayer',
    });
  }

  delay(t, v) {
    return new Promise(function (resolve) {
      setTimeout(resolve.bind(null, v), t);
    });
  }
  
  postPrayerRequest = async payload => {
    return await this.request({
      method: 'POST',
      url: '/api/v1/prayer',
      payload,
    });
  }

  request = async ({method, url, payload}) => {
    url = `${process.env.REACT_APP_DEV_API_URL}${url}`;
    let result;
    if (!payload) {
      result = await superagent[method.toLowerCase()](url);
    } else {
      result = await superagent[method.toLowerCase()](url)
        .send(payload); 
    }
    return result.body;
  }
}