import React, { useState } from 'react';
import CustomTab from '../components/reusable/CustomTab';
import { courseList } from '../course-list.js';
import CourseCard from '../components/reusable/CourseCard';
import CustomButton from '../components/reusable/Button';


export default function Home() {
    const [displayCount, setDisplayCount] = useState(6); // Initial count to display

    const handleShowMore = () => {
        setDisplayCount(prevCount => prevCount + 6); // Increment display count by 6
    };
    return (
        <>
            <div className='my-20'>
                <CustomTab 
                    allLength={courseList.length}
                    fullStackLength={courseList.filter(course => course.tag === "full-stack-development").length}
                    dataScienceLength={courseList.filter(course => course.tag === "data-science").length}
                    cyberSecurityLength={courseList.filter(course => course.tag === "cyber-security").length}
                    uiUxLength={courseList.filter(course => course.tag === "ui-ux").length}

                />
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex justify-center gap-4 flex-wrap my-10'>
                        {
                            courseList.slice(0, displayCount).map(course => (
                                <CourseCard
                                    key={course.id}
                                    data={course}
                                />
                            ))
                        }
                    </div>
                    {displayCount < courseList.length && <CustomButton onClick={handleShowMore}>Show More</CustomButton>}

                </div>

            </div>
        </>
    )
}
