import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from 'antd';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const members = [
    { id: 1, name: 'John Doe', avatar: '/user.svg', tasks: { tasksAmount: 5, color: '#007AFF' } },
    { id: 2, name: 'Jane Smith', avatar: '/user.svg', tasks: { tasksAmount: 0, color: '#E02020' } },
    { id: 3, name: 'Alice', avatar: '/user.svg', tasks: { tasksAmount: 2, color: '#E02020' } },
    { id: 4, name: 'Bob', avatar: '/user.svg', tasks: { tasksAmount: 4, color: '#007AFF' } },
    { id: 5, name: 'Carol', avatar: '/user.svg', tasks: { tasksAmount: 1, color: '#E02020' } },
    { id: 6, name: 'Alice', avatar: '/user.svg', tasks: { tasksAmount: 3, color: '#007AFF' } },
    { id: 7, name: 'Bob', avatar: '/user.svg', tasks: { tasksAmount: 2, color: '#E02020' } },
    { id: 8, name: 'Carol', avatar: '/user.svg', tasks: { tasksAmount: 1, color: '#E02020' } },
    { id: 9, name: 'Add New', avatar: '/user.svg', tasks: { tasksAmount: 0, color: '#E02020' } },
];

const TeamCarouselSwiper: React.FC = () => {
    const swiperRef = useRef<any>(null);

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };

    return (
        <div className="w-full h-full flex items-center justify-between mx-auto">
            <Button
                type="text"
                shape="circle"
                className="mx-3"
                icon={<GoChevronLeft color="#007AFF" size={28} />}
                onClick={handlePrev}
            />
            <Swiper
                onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
                spaceBetween={45}
                slidesPerView={8}
            >
                {members.map((member) => (
                    <SwiperSlide key={member.id} className="flex justify-center">
                        <div className="relative text-center text-sm">
                            <img className="w-20 h-20 rounded-full" src="/user.svg" alt={member.name} />
                            <p
                                style={{ backgroundColor: member.tasks.color }}
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full text-white w-6 h-6 flex items-center justify-center"
                            >
                                {member.tasks.tasksAmount}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Button
                type="text"
                shape="circle"
                className="mx-3"
                icon={<GoChevronRight color="#007AFF" size={28} />}
                onClick={handleNext}
            />
        </div>
    );
};

export default TeamCarouselSwiper;
