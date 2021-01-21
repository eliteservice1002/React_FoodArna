import React, { Component } from "react";
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

class Example extends Component {
    render() {
        return (
            <div style={{ width: '400px', height: '400px' }}>
                <ScrollBar component="div">
                    <div style={{ backgroundColor: 'green', width: '800px', height: '480px' }} />
                </ScrollBar>
            </div>
        );
    }
}

export default Example;



{/* <Grid item xs={12} style={{ maxHeight: '550px' }}>
                    <ScrollBar style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }} onScroll={handleScroll} id="aaa">
                        {
                            data.map((row) => (
                                <div style={{ width: '25%', padding: '0 3% 3% 3%', textAlign: 'center' }}>
                                    <figure className="snip1584">
                                        <img src={"./images/food1.png"} className={classes.img} alt={row.id} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                                        <figcaption style={{ textAligna: 'center' }}>
                                            <h5>{row.name}</h5>
                                            <button variant="outlined" className="item-add-button" name={row.id} style={{ cursor: 'pointer', marginRight: '1%', marginLeft: '1%' }} onClick={add_cart}>Add</button>
                                        </figcaption>
                                    </figure>
                                    <div className={classes.ellipsis}>{row.name}</div>
                                    <div className={classes.ellipsis}>{row.price} SEK</div>
                                </div>
                            ))
                        }
                        {loadingState ? <p className="loading"> loading More Items..</p> : ""}
                    </ScrollBar>
                </Grid> */}