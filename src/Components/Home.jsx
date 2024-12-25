import React from 'react';
import '../App.css';
import video from '../Images/video.mov';
import mk2 from '../Images/mk2.jpeg';
import kalpu2 from '../Images/kalpu2.jpeg';
import mk1 from '../Images/Mk1.jpeg';
import mk3 from '../Images/mk3.jpeg';
import mk4 from '../Images/mk4.jpeg';
import mk5 from '../Images/mk5.jpeg';
import mk6 from '../Images/mk6.jpg';
import mk7 from '../Images/mk7.jpg';
import mk8 from '../Images/mk8.jpeg';

const Home = () => {
  return (
    <div className="app-container">
      {/* Video Section */}
      <div className="vcontainer">
        {/* Container for image and text */}
        <div className="image-text-container">
          <img src={mk7} alt="Picture 1" className="cat" />
          <div className="text-side">
            <h4 className="h4-tag">My Hero</h4>
            <p className="hero-text">
            Baar baar din ye aaye,

baar baar dil ye gaaye

Tu jiye hazaaron saal,

ye meri hai aarzoo

Happy Birthday to you -

Happy Birthday to you,

Kalpesh, Happy Birthday to you
            </p>
          </div>
        </div>

        <video src={video} className="video" autoPlay loop></video>

        <div className="image-left-container">
          {/* Left side content for paragraph */}
          <p className="mk8-text">
            Bade Acchee lagte hai<br />
              Kyaa ????<br />
              Yeh Dharti ,yeh nadiyaa, yeh rainaa aur ?<br />
              Aur tum<br />
              Bade Acchee lagte hai<br />
              Yeh Dharti ,yeh nadiyaa, yeh rainaa aur ?<br />
              Aur tum mm mmmm<br />
              O o O MAjhi re<br />
              Jaiyo piya ke desh<br />
              Hum tum kitane paas hai

          </p>
          <img src={mk8} alt="dog" className="mk8-image" />
          <h5 className="head-tag">My Support System</h5>
        </div>
      </div>

      {/* Wishes Section */}
      <div className="content-container">
        <div className="wishes">
          <h1>HAPPY BIRTHDAY TO YOU DEAR</h1>
          <p>
            <h3>"Happy Birthday Kalpesh"</h3> You are My lucky one. Your hard work and your Behavior impress me.
            I like your simplicity a lot. You love me but you don't show it to me. But I know that
            you love me a lot. On your birthday, I wish you a lot of happiness and success. May Swami
            Samarth always make you happy. Stay with me like this. Be happy and a little naughty all
            our life.
            <p>I Only have one wish. Sometimes it is very important to express your love. If
              you have any problems with me, tell me and share it with me. I will always be
              with you."</p>
            <h2>"I love you so much Kalpesh "</h2>
          </p>
        </div>

        {/* Picture Gallery Section */}
        <div className="picture-gallery">
          <h2>Our Pictures</h2>
          <div className="pictures">
            <img src={mk2} alt="sunset" />
            <img src={kalpu2} alt="sunrise" />
            <img src={mk1} alt="monika" />
            <img src={mk3} alt="kalpesh" />
            <img src={mk4} alt="mona" />
            <img src={mk5} alt="bhumi" />
            <img src={mk6} alt="pathare" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>Designed with love! ❤️</p>
      </div>
    </div>
  );
};

export default Home;
