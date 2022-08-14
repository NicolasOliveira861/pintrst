import { randomIntFromInterval } from 'utils/randomNumber';

const PhotosApi = {
  async getRandomPic() {
    const randomHeight = randomIntFromInterval(200, 450);
    const randomInt = randomIntFromInterval(1, 10);

    const req = await fetch(
      `https://picsum.photos/200/${randomHeight}?random=${randomInt}`
    );

    return {
      id: req.headers.get('picsum-id'),
      url: req.url,
    };
  },
};

export default PhotosApi;
