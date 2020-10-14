import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import TeacherList from './pages/teacherList';
import TeacherForm from './pages/teacherForm';

function Routes() {

    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" exact component={TeacherList}/>
            <Route path="/give-classes" exact component={TeacherForm}/>
        </BrowserRouter>
    )
}

export default Routes;