import PhotosApi from 'api/photos';
import { useEffect, useState } from 'react';
import { randomIntFromInterval } from 'utils/randomNumber';
import { Card, Container, ImageContainer } from './styles';

const Home = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPhotos = async () => {
      const req = await PhotosApi.getRandomPic();

      return req;
    };

    let photos: any[] = [];

    const promises = [...Array(30)].map(async () => {
      const photo = await getPhotos();

      photos.push(photo);
    });

    setLoading(true);

    Promise.all(promises).then(() => {
      setImages(photos);

      // When we begin, assume no images are loaded.
      var imagesLoaded = 0;
      // Count the total number of images on the page when the page has loaded.
      var totalImages = document.querySelectorAll('img').length;

      // After an image is loaded, add to the count, and if that count equals the
      // total number of images, fire the allImagesLoaded() function.
      document.querySelectorAll('img').forEach((el) => {
        el.addEventListener('load', (e) => {
          imagesLoaded++;
          if (imagesLoaded == totalImages) {
            setLoading(false);
          }
        });
      });
    });
  }, []);

  return (
    <Container>
      <ImageContainer
        style={loading ? { display: 'none' } : { display: 'block' }}
      >
        {images.map((item, idx) => (
          <Card key={idx}>
            <img src={item.url} />
            {idx % 2 <= 0 ? (
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                ab sed tempora assumenda nihil ipsum cupiditate ducimus
              </span>
            ) : (
              <></>
            )}
          </Card>
        ))}
      </ImageContainer>
    </Container>
  );
};

export default Home;
