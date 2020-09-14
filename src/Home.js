import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Apple iPhone 11 Pro Max (512GB) - Midnight Green"
            price={99990}
            image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Apple AirPods with Wireless Charging Case"
            price={24999}
            image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SX679_.jpg"
            rating={3}
          />
          <Product
            id="4903850"
            title="Apple Watch Series 5 (GPS, 44mm) - Gold Aluminium Case with Pink Sport Band"
            price={43900}
            image="https://images-na.ssl-images-amazon.com/images/I/71H8iifAnzL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12312312"
            title="Marshall Uxbridge Home Voice Speaker with Amazon Alexa Built-in,White"
            price={21999}
            image="https://images-na.ssl-images-amazon.com/images/I/81WIcjaGp2L._SY450_.jpg"
            rating={4}
          />
          <Product
            id="32132132"
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey
"
            price={199900}
            image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={55999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12612612"
            title="Nike Men's Black Training Shoes - 8.5 D(M) US"
            price={12999}
            image="https://images-na.ssl-images-amazon.com/images/I/61JiTAo1HWL._UX625_.jpg"
            rating={4}
          />
          <Product
            id="12512512"
            title="ASUS ROG Strix GL10CS Intel Core i5-9400F 9th Gen Gaming Desktop (8GB RAM/1TB HDD/Windows 10/2GB NVIDIA GeForce GTX 1050 Graphics/Iron Gray), GL10CS-IN063T"
            price={52999}
            image="https://images-na.ssl-images-amazon.com/images/I/71JEcduJrXL._SY450_.jpg"
            rating={4}
          />
          <Product
            id="78978978"
            title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
            price={52999}
            image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="45645648"
            title="Microsoft Xbox One Wireless Controller with Bluetooth (With 3.5 mm Jack) (White)"
            price={5999}
            image="https://images-na.ssl-images-amazon.com/images/I/61cIz9OsQOL._SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
