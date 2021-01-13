import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './hoc/mainlayout';
import { Header, Home, About, Menu, Booking, Login } from './component/index';

const Routes = () => {
    return(
        <>
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/menu' component={Menu}/>
                    <Route path='/booking' component={Booking}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
        </>
    )
}

export default Routes