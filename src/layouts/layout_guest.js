import React from 'react'
import { Route, Switch, Router, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
import { withStyles } from '@material-ui/core/styles';
import {
    MainMenu,
    AuthenticFood,
    FiveStar,
    OnlineCookery,
    TryCook,
    OrderOnline,
    Profile1,
    Profile2,
    OrderStatus,
    OrderPage,
    DeliveryLocation,
    OrderConfirmation,
    Payment,
    Thankyou,
    SellMenu,
    ReSell,
    CookDetail1,
    CookDetail2
} from '../pages';
import Landing from '../pages/Landing';
import OrderStat from '../pages/partPage/Container/OrderStat';
import BrowsePage from "../pages/partPage/Container/BrowsePage";
// 2020.06.07 start
import ProfilePage from "../pages/partPage/profile";
import FoodList from "../pages/partPage/foodlist";
import OnlineChefList from "../pages/partPage/chefListView";
import OnlineFoodList from "../pages/partPage/foodListView";
import DelyList from "../pages/partPage/deliverylist";
import DelyPage from "../pages/partPage/deliverypage";
import Carousel from "../pages/partPage/component/foodcarousel";
import OrderData from "../pages/partPage/component/orderstate";
// 2020.06.07 end
const hist = createBrowserHistory();
const styles = theme => ({
    root: {
        color: theme.palette.textOnPrimary,
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh'
    }
})

const GuestLayout = ({ classes }) => {
    return (
        <div className={classes.root}>

            <div>
                <Router history={hist}>
                    <Switch>
                        <Route path='/' exact component={Landing} />
                        {/*<Route path='/main' exact component={mainMenuView} />*/}
                        {/*<Route path='/profile' exact component={profile1View} />*/}
                        <Route path='/mainMenu' exact component={MainMenu} />
                        <Route path='/authenticFood' exact component={AuthenticFood} />
                        <Route path='/fiveStar' exact component={FiveStar} />
                        <Route path='/onlineCookery' exact component={OnlineCookery} />
                        <Route path='/tryCook' exact component={TryCook} />
                        <Route path='/orderOnline' exact component={OrderOnline} />
                        <Route path='/profile1' exact component={Profile1} />
                        <Route path='/profile2' exact component={Profile2} />
                        <Route path='/orderStatus' exact component={OrderStatus} />
                        <Route path='/deliveryLocation' exact component={DeliveryLocation} />
                        <Route path='/orderConfirmation' exact component={OrderConfirmation} />
                        <Route path='/payment' exact component={Payment} />
                        <Route path='/thankyou' exact component={Thankyou} />
                        <Route path='/sellMenu' exact component={SellMenu} />
                        <Route path='/resell' exact component={ReSell} />
                        <Route path='/cookDetail1' exact component={CookDetail1} />
                        <Route path='/cookDetail2' exact component={CookDetail2} />

                        <Route path="/orderStat" exact component={OrderStat} />
                        <Route path="/browse" exact component={BrowsePage} />
                        {/* 2020.06.07 start */}
                        <Route path="/profile" exact component={ProfilePage} />
                        <Route path="/foodlist" exact component={FoodList} />
                        <Route path="/cheflist" exact component={OnlineChefList} />
                        <Route path='/onlinefoodlist' exact component={OnlineFoodList} />
                        <Route path="/carousel" exact component={Carousel} />
                        <Route path="/deliverylist" exact component={DelyList} />
                        <Route path="/deliverypage" exact component={DelyPage} />
                        <Route path='/orderpage' exact component={OrderPage} />
                        <Route path='/orderstate' exact component={OrderData} />
                        {/* 2020.06.07 end */}
                        <Redirect to='/' />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default withStyles(styles)(GuestLayout)
