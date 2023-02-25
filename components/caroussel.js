// import Carousel from "nuka-carousel/lib/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Carousell() {
  return (
    <>
   
      {/* <Carousel
        autoplay={true}
        autoplayInterval={3000}
        className="homeCarousel">
        <img
          src="https://a.cdn-hotels.com/gdcs/production196/d1429/5c2581f0-c31d-11e8-87bb-0242ac11000d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
          style={{ height: "531px", width: "1440px", zIndex:"-500"}}
        />
        <img src="/image2.png" />
        <img src="/image3.png" />
        <img src="/image4.png" />
        <img src="/image5.png" />
      </Carousel> */}
      <div  className="carouselContainer" style={{ height: 531 , width : "100%"}}>
      <Carousel showThumbs={false}>
        <div>
        <img src="https://a.cdn-hotels.com/gdcs/production196/d1429/5c2581f0-c31d-11e8-87bb-0242ac11000d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium" style={{ height:531 , width: 1440 }} />

        </div>
        <div>
        <img src="/image2.png" />
        </div>
        <div>
        <img src="/image2.png" />
        </div>
        <div>
        <img src="/image2.png" />
        </div>
      </Carousel>
      </div>
    </>
  );
}
export default Carousell;
