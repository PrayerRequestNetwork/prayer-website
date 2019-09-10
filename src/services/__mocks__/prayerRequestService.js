export const mocks = {
  postPrayerRequest: jest.fn(),
};

export default class PrayerRequestServiceMock {
  postPrayerRequest = mocks.postPrayerRequest;
}