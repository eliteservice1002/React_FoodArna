
import React, { useState, useEffect } from 'react';
import {
    makeStyles,
} from '@material-ui/core/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';
import Slider from "react-slick";
import axios from 'axios';
import Snack from './snackbar';
import { ChangePerFoodId, ChangePerPotion, ChangePerImg, ChangePerCost, ChangePerQuantity, ChangePerFoodIdFlag, ChangePerCuisine, AddCartIcon } from "../../../reducers/action";
const useStyles = makeStyles({
    img: {
        verticalAlign: 'top',
        maxWidth: '100%',
        backfaceVisibility: 'hidden',
        width: '100%',
        height: '130px',
        borderRadius: '10px',
        cursor: 'pointer',
        border: '3px solid #e91e63'
    }
})

function Foodcarousel(props) {
    const [data, setData] = useState([]);
    const [alert, setalert] = useState("");
    const classes = useStyles();

    const change_food = (para) => {
        const dataa = {
            food_id: para
        };
        fetch("http://localhost/api/foods/fooddetail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataa),
        })
            .then(res => res.json())
            .then(function (resp) {
                // props.AddCartIcon(-1);
                props.ChangePerFoodId(resp[0].id);
                props.ChangePerFoodIdFlag(props.per_food_id_flag + resp[0].per_price);
                props.ChangePerPotion(resp[0].portion);
                props.ChangePerImg(resp[0].photo1);
                props.ChangePerCost(resp[0].per_price);
                props.ChangePerQuantity(resp[0].quantity);
                props.ChangePerCuisine(resp[0].cuisine_name);

                const data1 = {
                    id: props.chef_id
                };
                axios.post('http://localhost/api/users/delyfind', data1)
                    .then(function (res) {
                        props.AddCartIcon(props.cartVal);
                        const data3 = {
                            buyer_id: props.user_id,
                            chef_id: props.chef_id,
                            food_id: resp[0].id
                        };
                        axios.post('http://localhost/api/orders/findBCF', data3)
                            .then(function (respon) {
                                console.log("res.data.length" + respon.data.length);
                                if (respon.data.length === 0) {
                                    const data = {
                                        buyer_id: props.user_id,
                                        buyer_name: props.user_name,
                                        address: props.user_address,
                                        city: props.user_city,
                                        country: props.user_country,
                                        postcode: props.user_postcode,
                                        chef_id: props.chef_id,
                                        chef_name: props.chef_name,
                                        chef_address: res.data[0].address,
                                        chef_city: res.data[0].city,
                                        chef_country: res.data[0].country,
                                        chef_postcode: res.data[0].postcode,
                                        cuisine_id: resp[0].id,
                                        cuisine_name: resp[0].cuisine_name,
                                        cuisine_photo: resp[0].photo1,
                                        quantity: 1,
                                        check_state: false,
                                        pay_state: false,
                                        delivery_state: false,
                                        per_price: resp[0].per_price,
                                        total_price: resp[0].per_price,
                                        delivery_price: 10,
                                        tax_price: 5,
                                        comment: props.comment,
                                        chef_rank: props.rating
                                    };
                                    axios.post('http://localhost/api/orders/create', data)
                                        .then(function (res) {
                                            setalert("This food has been added to your cart!");
                                            document.getElementById('snack_success').click();
                                        })
                                        .catch(function (e) {
                                            setalert("Faile");
                                            document.getElementById('snack_warning').click();
                                        })
                                }
                                if (respon.data.length === 1) {
                                    const data = {
                                        order_id: respon.data[0].id
                                    };
                                    axios.post('http://localhost/api/orders/findone', data)
                                        .then(function (res) {
                                            const data = {
                                                order_id: respon.data[0].id,
                                                buyer_id: props.user_id,
                                                address: props.user_address,
                                                city: props.user_city,
                                                country: props.user_country,
                                                postcode: props.user_postcode,
                                                buyer_name: props.user_name,
                                                chef_id: props.chef_id,
                                                chef_name: props.chef_name,
                                                chef_address: res.data[0].address,
                                                chef_city: res.data[0].city,
                                                chef_country: res.data[0].country,
                                                chef_postcode: res.data[0].postcode,
                                                cuisine_id: resp[0].id,
                                                cuisine_name: resp[0].cuisine_name,
                                                cuisine_photo: resp[0].photo1,
                                                quantity: res.data[0].quantity + 1,
                                                check_state: false,
                                                per_price: resp[0].per_price,
                                                total_price: resp[0].per_price * (res.data[0].quantity + 1),
                                                delivery_price: 10,
                                                tax_price: 5,
                                                comment: props.comment,
                                                chef_rank: props.rating
                                            };
                                            axios.put('http://localhost/api/orders/update', data)
                                                .then(function (res) {
                                                    if (res.status === 200) {
                                                        setalert("This food has been added to your cart!");
                                                        document.getElementById('snack_success').click();
                                                    }
                                                })
                                                .catch(function (e) {
                                                    setalert("Faile");
                                                    document.getElementById('snack_warning').click();
                                                })
                                        })
                                }
                            })

                        const data2 = {
                            food_id: props.per_food_id
                        };
                        fetch("http://localhost/api/foods/fooddetail", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data2),
                        })
                            .then(res => res.json())
                            .then(function (res) {
                                const data = {
                                    food_id: props.per_food_id,
                                    sell_flag: res[0].sell_flag + 1
                                };
                                axios.put('http://localhost/api/foods/update', data)
                            })
                    })

            })
    }


    const Article = (props) => {
        var image = props.data.photo1,
            id = props.data.id,
            subtitle = props.data.cuisine_name;
        return (
            <figure className="snip1584">
                <img src={"http://localhost/" + image} className={classes.img} alt="alt" />
                <figcaption style={{ textAligna: 'center' }}>
                    <h5>{subtitle}</h5>
                    <button variant="outlined" className="item-add-button" name={id} onClick={() => { change_food(id) }} style={{ cursor: 'pointer', marginRight: '1%', marginLeft: '1%' }}>Add</button>
                </figcaption>
            </figure>
        )
    };


    const News = (props) => {
        var data = props.data;
        var newsTemplate;
        var settings = {
            // dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                )
            })
        } else {
            newsTemplate = <p>Please add some cards</p>
        }
        return (
            <div className='news'>
                <Slider {...settings}>{newsTemplate}</Slider>
                <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>
                    Total Foods: {data.length}
                </strong>
            </div>
        );
    }

    const init = () => {
        const data = {
            id: props.chef_id
        };
        fetch("http://localhost/api/foods/cheffoodlist", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                setData(res);
                console.log(res);
            })

    }
    useEffect(() => {
        init();
    }, []);
    return (
        <div className='app'>
            <Snack alert={"This food has been added to your cart!"} />
            <h3 style={{ color: '#464646', opacity: '0' }}>Foods</h3>
            <News data={data} />
        </div>
    );
}


function mapStateToProps(state) {
    return {
        user_id: state.id,
        user_email: state.email,
        user_name: state.user_name,
        user_address: state.address,
        user_city: state.city,
        user_country: state.country,
        user_postcode: state.postcode,
        chef_id: state.chef_id,
        chef_name: state.chef_name,
        cartVal: state.addCartIcon,
        per_portion: state.food_per_portion,
        per_food_img: state.food_per_img,
        per_cost: state.food_per_price,
        per_quantity: state.food_per_quantity,
        per_food_id: state.food_per_id,
        per_food_id_flag: state.food_per_id_flag,
        per_food_cuisine: state.food_per_cuisine,
        comment: state.comment_to_chef,
        rating: state.per_rating
    };
}
const mapDispatchToProps = {
    ChangePerFoodId,
    ChangePerPotion,
    ChangePerImg,
    ChangePerCost,
    ChangePerQuantity,
    ChangePerFoodIdFlag,
    ChangePerCuisine,
    AddCartIcon
};
export default connect(mapStateToProps, mapDispatchToProps)(Foodcarousel);