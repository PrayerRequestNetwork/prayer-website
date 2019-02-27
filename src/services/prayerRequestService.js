import superagent from 'superagent';

export default class PrayerRequestService {
  getAccountRoles = async () => {
    return await this.request({
      method: 'PUT',
      url: '/api/v1/user',
    });
  }

  request = async ({method, url, payload}) => {
    url = `${process.env.REACT_APP_DEV_API_URL}${url}`;

    const result = await superagent[method.toLowerCase()](url);
    return result.body;
  }
}