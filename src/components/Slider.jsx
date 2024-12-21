import React from 'react';
import SingleSlide from './SingleSlide';

function Slider() {
  const logos = [
    [
      'https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png',
      'https://ik.imagekit.io/sheryians/FrontEnd%20Donation/react_DTR0KYr0r6.png?updatedAt=1716028589267',
      'https://ik.imagekit.io/sheryians/FrontEnd%20Donation/redux_up-dcIiRNj.png?updatedAt=1716028589303',
      'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/mongodb_4pZPG6IajQ.png',
      'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/express_3JJqkkJ2Qu.png',
      'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/http_TlWFRusFu.png',
      'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/npmicon_YXrunWQuEE.png',
      'https://ik.imagekit.io/sheryians/FrontEnd%20Donation/css_U_x-2yma55.png?updatedAt=1716028589263',
      'https://miro.medium.com/v2/resize:fit:1400/0*LjDWEHCN0v17YOHh',
      'https://static.vecteezy.com/system/resources/thumbnails/022/362/579/small_2x/3d-css-file-icon-illustration-png.png',
      'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/intenet_kkXmpMml9.png',
      'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/gpt_k_3Hosa6ml.png',
    ],
    [
        'https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png',
        'https://ik.imagekit.io/sheryians/FrontEnd%20Donation/react_DTR0KYr0r6.png?updatedAt=1716028589267',
        'https://ik.imagekit.io/sheryians/FrontEnd%20Donation/redux_up-dcIiRNj.png?updatedAt=1716028589303',
        'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/mongodb_4pZPG6IajQ.png',
        'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/express_3JJqkkJ2Qu.png',
        'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/http_TlWFRusFu.png',
        'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/npmicon_YXrunWQuEE.png',
        'https://ik.imagekit.io/sheryians/FrontEnd%20Donation/css_U_x-2yma55.png?updatedAt=1716028589263',
        'https://miro.medium.com/v2/resize:fit:1400/0*LjDWEHCN0v17YOHh',
        'https://static.vecteezy.com/system/resources/thumbnails/022/362/579/small_2x/3d-css-file-icon-illustration-png.png',
        'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/intenet_kkXmpMml9.png',
        'https://ik.imagekit.io/sheryians/BackEnd%20Donation/Icons/gpt_k_3Hosa6ml.png',
      ]
  ];

  return (
    <div className="py-10 m-2 mt-[-7vw] md:mx-2 z-[9] relative overflow-hidden" id="skills">
      {logos.map((item, index) => (
        <SingleSlide direction={index === 0 ? 'left' : 'right'} key={index} imagesurl={item} />
      ))}
    </div>
  );
}

export default Slider;
