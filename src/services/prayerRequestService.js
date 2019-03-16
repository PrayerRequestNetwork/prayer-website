import superagent from 'superagent';

export default class PrayerRequestService {
  getAccountRoles = async () => {
    return await this.request({
      method: 'PUT',
      url: '/api/v1/user',
    });
  }

  postPrayerRequest = async payload => {
    this.request({
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