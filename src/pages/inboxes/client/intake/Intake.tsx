import React, { useState, useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

import Intake1 from './Intake1';
import Intake2 from './Intake2';
import Intake3 from './Intake3';
import Intake4 from './Intake4';
import Intake5 from './Intake5';
import Intake6 from './Intake6';
import Intake7 from './Intake7';
import { Avatar, Input } from 'antd';
import Intake8 from './Intake8';
import Intake9 from './Intake9';
import Intake10 from './Intake10';
import Intake11 from './Intake11';

import Intake13 from './Intake13';
import Intake14 from './Intake14';
import Intake15 from './Intake15';
import Intake16 from './Intake16';
import Intake17 from './Intake17';
import Intake18 from './Intake18';
import Intake19 from './Intake19';
import Intake12 from './Intake12';

const Intake: React.FC = () => {
      const slides = [
            { id: 1, component: <Intake1 /> },
            { id: 2, component: <Intake2 /> },

            { id: 3, component: <Intake3 /> },
            { id: 4, component: <Intake4 /> },
            { id: 5, component: <Intake5 /> },
            { id: 6, component: <Intake6 /> },
            { id: 7, component: <Intake7 /> },
            { id: 8, component: <Intake8 /> },
            { id: 9, component: <Intake9 /> },
            { id: 10, component: <Intake10 /> },
            { id: 11, component: <Intake11 /> },

            //
            { id: 12, component: <Intake12 /> },
            { id: 13, component: <Intake13 /> },
            { id: 14, component: <Intake14 /> },
            { id: 15, component: <Intake15 /> },
            { id: 16, component: <Intake16 /> },
            { id: 17, component: <Intake17 /> },
            { id: 18, component: <Intake18 /> },
            { id: 19, component: <Intake19 /> },
      ];

      const notes = [
            {
                  id: 1,
                  author: 'Carli Bryant',
                  timestamp: 'Today 8:30 AM CT',
                  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                  content: `
            @Cindy Lou Hou Mr. Johnson would like to see the chiropractor as soon as possible. His back is hurting from the car accident. 
            He is also interested in seeing the psychiatrist for his PTSD.
          `,
            },
      ];

      const [activeIndex, setActiveIndex] = useState(0);
      const swiperRef = useRef<any>(null);

      return (
            <div className="">
                  <div className="">
                        <Swiper
                              onSwiper={(swiper) => (swiperRef.current = swiper)}
                              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                              slidesPerView={1}
                              spaceBetween={20}
                              className="h-[calc(100vh-450px)] overflow-auto hide-scrollbar"
                        >
                              {slides.map((slide) => (
                                    <SwiperSlide key={slide.id}>{slide.component}</SwiperSlide>
                              ))}
                        </Swiper>

                        <div className="flex justify-between items-center my-4">
                              <button
                                    className="disabled:opacity-50"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    disabled={activeIndex === 0}
                              >
                                    <CgChevronLeft size={20} />
                              </button>

                              <div className="flex gap-2 justify-center items-center mt-4">
                                    {slides.map((_, index) => (
                                          <button
                                                key={index}
                                                className={`w-3 h-3 rounded-full ${
                                                      activeIndex === index ? 'bg-[#000000]' : 'bg-gray-300'
                                                }`}
                                                onClick={() => {
                                                      swiperRef.current?.slideTo(index);
                                                      setActiveIndex(index);
                                                }}
                                          ></button>
                                    ))}
                              </div>
                              <button
                                    className="disabled:opacity-50"
                                    onClick={() => swiperRef.current?.slideNext()}
                                    disabled={activeIndex === slides.length - 1}
                              >
                                    <CgChevronRight size={20} />
                              </button>
                        </div>
                  </div>

                  <div className="space-y-4">
                        {notes.map((note) => (
                              <div key={note.id} className="flex gap-4">
                                    <div>
                                          <Avatar size={50} src={note.avatar} />
                                    </div>

                                    <div>
                                          <p className="text-sm font-semibold text-gray-800">{note.author}</p>
                                          <p className="text-xs text-secondary">{note.timestamp}</p>

                                          <p className="mt-1 text-sm whitespace-pre-line text-secondary">
                                                {note.content}
                                          </p>
                                    </div>
                              </div>
                        ))}
                  </div>

                  <div className="mt-4">
                        <Input.TextArea
                              style={{ borderRadius: 6 }}
                              placeholder="Write a note..."
                              rows={3}
                              className="rounded-lg"
                        />
                        {/* <Button type="primary" className="mt-4 w-full">
                              Save
                        </Button> */}
                  </div>
            </div>
      );
};

export default Intake;
