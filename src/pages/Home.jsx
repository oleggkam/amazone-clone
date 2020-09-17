import React from 'react';
import '../css/Home.css';
import Product from '../components/Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="home__image"
      />
      <div className="home__row">
        <Product
          id={12312312}
          title={
            'Apple watch Apple watch Apple watch Apple watch  Apple watch Apple watch Apple watch Apple watchApple watch Apple watch Apple watch Apple watch'
          }
          image={'https://i.pinimg.com/originals/c9/4d/19/c94d193a61739eca6561f0c1e53e8ca8.jpg'}
          price={223}
          rating={4}
        />
        <Product
          id={12312312}
          title={
            'Apple watch Apple watch Apple watch Apple watch  Apple watch Apple watch Apple watch Apple watchApple watch Apple watch Apple watch Apple watch'
          }
          image={'https://i.pinimg.com/originals/c9/4d/19/c94d193a61739eca6561f0c1e53e8ca8.jpg'}
          price={223}
          rating={4}
        />
        <Product
          id={12312312}
          title={
            'Apple watch Apple watch Apple watch Apple watch  Apple watch Apple watch Apple watch Apple watchApple watch Apple watch Apple watch Apple watch'
          }
          image={'https://i.pinimg.com/originals/c9/4d/19/c94d193a61739eca6561f0c1e53e8ca8.jpg'}
          price={223}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={12312315}
          title={
            'Apple watch Apple watch Apple watch Apple watch  Apple watch Apple watch Apple watch Apple watchApple watch Apple watch Apple watch Apple watch'
          }
          image={'https://i.pinimg.com/originals/c9/4d/19/c94d193a61739eca6561f0c1e53e8ca8.jpg'}
          price={223}
          rating={4}
        />
        <Product
          id={12312316}
          title={
            'Apple watch Apple watch Apple watch Apple watch  Apple watch Apple watch Apple watch Apple watchApple watch Apple watch Apple watch Apple watch'
          }
          image={'https://i.pinimg.com/originals/c9/4d/19/c94d193a61739eca6561f0c1e53e8ca8.jpg'}
          price={223}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
