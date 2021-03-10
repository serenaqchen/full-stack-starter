import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import SkillsList from './SkillsList';
import SkillsForm from './SkillsForm';

function Skills(){
    const {path} = useRouteMatch();

    return(
        <Switch>
            <Route exact path={path}>
                <SkillsList />
            </Route>
            <Route path={`${path}/new`}>
                <SkillsForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <SkillsForm />
            </Route>
        </Switch>
    );
}

export default Skills