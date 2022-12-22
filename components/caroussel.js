import Carousel from "nuka-carousel/lib/carousel";

function Carousell(){
    return(
        <>
        <Carousel autoplay={true} autoplayInterval={3000} style={{ height: 531 , width: 1440}} cellAlign={"center"} className="homeCarousel">
  <img src="https://a.cdn-hotels.com/gdcs/production196/d1429/5c2581f0-c31d-11e8-87bb-0242ac11000d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium" style={{ height : 531 , width : 1440}} />
  <img src="/image2.png" />
  <img src="/image3.png" />
  <img src="/image4.png" />
  <img src="/image5.png" />
</Carousel>
        </>
    )
}
export default Carousell