import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ResultPage from '../pages/ResultPage/ResultPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>

                <Route exact path={'/qrcode/:data'}>
                    <ResultPage />
                </Route>
            </Switch>

        </BrowserRouter>
    )

}

export default Router