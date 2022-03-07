import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import Catalog from '../page/Catalog';
import Detail from '../page/detail/Detail';
import Home from '../page/Home';

const Router = () => {
    return (
        <Switch>
            <Route path="/:category/search/:keyword" component={Catalog}></Route>
            <Route path="/:category/:id" component={Detail}></Route>
            <Route path="/:category" component={Catalog}></Route>
            <Route path="/" exact component={Home}></Route>
        </Switch>
    );
};

export default Router;