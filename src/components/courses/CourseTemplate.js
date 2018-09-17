import React from 'react';
import Course from './Course';

const CourseTemplate = (props) => {
  let courses = props.course.map((course) => {
    return <Course title={course.title}
                   desc={course.description}
                   img={course.img_src}
                   key={course.id} />
  }); 
  return (
    <div>
      <ul>
        {courses}    
      </ul>
    </div>
  );
};

export default CourseTemplate;