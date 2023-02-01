import React, { useState } from 'react';
import plusIcon from '../Images/plusIcon.svg';
import { faq_pricing_page } from '../Utils/Constant';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className='accordian_container text_white'>
      <div className='main-container'>
        <div className='text_center'>
          <p className='heading_1'>Frequently Asked Questions</p>
        </div>
        <div className='acc_container'>
          {faq_pricing_page.map((item, index) => {
            const CustomTag = item.tagName ? `${item.tagName}` : `h${3}`;
            return (
              <div className='' key={index}>
                <div className='wrap' onClick={() => toggle(index)} key={index}>
                  <h3 className=''>{item.question}</h3>
                  <span>
                    {clicked === index ? (
                      <img src={plusIcon.src} alt='' />
                    ) : (
                      <img src={plusIcon.src} alt='' />
                    )}
                  </span>
                </div>
                {clicked === index ? (
                  <div className='dropdown'>
                    <p
                      className='leading-normal'
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
