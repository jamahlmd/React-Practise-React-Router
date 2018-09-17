import React from 'react';
import {
    NavLink,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import NotFound from './NotFound';
import CourseTemplate from './courses/CourseTemplate';

//Data
import { HTMLCourses } from '../data/courses';
import { CSSCourses } from '../data/courses';
import { JSCourses } from '../data/courses';


const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>

      <Switch>
          <Route exact path={match.path} render={() => <Redirect to={`${match.path}/html`}/>}/>
          <Route path={`${match.path}/html`} render={() => <CourseTemplate course={HTMLCourses} />}/>
          <Route path={`${match.path}/css`} render={() => <CourseTemplate course={CSSCourses} />}/>
          <Route path={`${match.path}/javascript`} render={() => <CourseTemplate course={JSCourses} />}/>
          <Route component={NotFound}/>

      </Switch>
  </div>
);

export default Courses;

