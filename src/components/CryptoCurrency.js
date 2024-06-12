import React, { useState, useEffect, useMemo } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import icon_coin1 from "../assets/img/icon/coin_icon01.svg"
import icon_coin2 from "../assets/img/icon/coin_icon02.svg"
import icon_coin3 from "../assets/img/icon/coin_icon03.svg"
import icon_coin4 from "../assets/img/icon/coin_icon04.svg"
import icon_coin5 from "../assets/img/icon/coin_icon05.svg"
import icon_coin6 from "../assets/img/icon/coin_icon06.svg"
import icon_coin7 from "../assets/img/icon/coin_icon07.svg"

const CryptoCurrency = () => {

    const holdingsData = [
        { id: 'bitcoin', symbol: 'BTC', amount: 0.5, cost_basis: 30000 }, // replace with actual data
        { id: 'ethereum', symbol: 'ETH', amount: 2, cost_basis: 1500 }, // replace with actual data
        { id: 'Tether', symbol: 'USDT', amount: 0.5, cost_basis: 30000 }, // replace with actual data
        { id: 'USD Coin', symbol: 'USDC', amount: 2, cost_basis: 1500 }, // replace with actual data
        { id: 'BNB', symbol: 'BNB', amount: 0.5, cost_basis: 30000 }, // replace with actual data
        { id: 'Cardano', symbol: 'ADA', amount: 2, cost_basis: 1500 }, // replace with actual data
        { id: 'Dogecoin', symbol: 'DOGE', amount: 2, cost_basis: 1500 }, // replace with actual data
    ];

    const [coins, setCoins] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const api_key = 'YOUR_API_KEY'; // replace this with your own API key

    const holdings = useMemo(() => holdingsData, []);

    // useEffect(() => {

    //     axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${holdings.map(holding => holding.id).join(',')}`, {
    //         headers: {
    //             'X-CoinAPI-Key': api_key
    //         }
    //     })
    //         .then(response => {
    //             const updatedHoldings = holdings.map(holding => {
    //                 const coin = response.data.find(coin => coin.id === holding.id);
    //                 return {
    //                     ...holding,
    //                     name: coin.name,
    //                     current_price: coin.current_price,
    //                     price_change_24h: coin.price_change_24h,
    //                     price_change_percentage_24h: coin.price_change_percentage_24h
    //                 };
    //             });
    //             // setCoins(updatedHoldings);
    //             // setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data', error);
    //         });
    // }, [holdings]);

    // console.log('=========== Crypto Currency ============', holdings);
    //   const handleCoinSelect = (id) => {
    //     setLoading(true);
    //     const selected = coins.find(coin => coin.id === id);
    //     setSelectedCoin(selected);

    //     // Fetch historical data for the selected date range
    //     const promises = [];
    //     const date = new Date(startDate);
    //     while (date <= endDate) {
    //       const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    //       const promise = axios.get(`http://localhost:3001/api/v3/coins/${id}/history?date=${formattedDate}`, {
    //         headers: {
    //           'X-CoinAPI-Key': api_key
    //         }
    //       })
    //         .then(response => {
    //           const price = response.data.market_data.current_price.usd;
    //           return [Date.parse(formattedDate), price];
    //         })
    //         .catch(error => {
    //           console.error('Error fetching historical data', error);
    //           return [Date.parse(formattedDate), 0]; // Return a default value
    //         });

    //       promises.push(promise);
    //       date.setDate(date.getDate() + 1); // Increment the date
    //     }

    //     Promise.all(promises)
    //       .then(history => {
    //         setHistory(history);
    //         setLoading(false);
    //       });
    //   };

    //   const totalValue = coins.reduce((total, coin) => total + (coin.current_price * coin.amount), 0);

    //   // Calculate ROI and P&L
    //   const totalInvested = coins.reduce((total, coin) => total + coin.cost_basis, 0);
    //   const roi = ((totalValue - totalInvested) / totalInvested) * 100;
    //   const pnl = totalValue - totalInvested;  

    return (
        <>
                <div class="spotlight-post-item-wrap">
                    <div class="section-title-wrap-three mb-30">
                        <div class="section-title-three">
                            <h6 class="title">Crypto Currency
                                <span class="section-title-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 40" fill="none" preserveAspectRatio="none">
                                        <path d="M10.1448 2.85061C10.6524 1.15867 12.2097 0 13.9761 0H241.624C244.303 0 246.225 2.58294 245.455 5.14939L235.855 37.1494C235.348 38.8413 233.79 40 232.024 40H4.37612C1.69667 40 -0.225117 37.4171 0.544817 34.8506L10.1448 2.85061Z" fill="currentcolor" />
                                    </svg>
                                </span>
                            </h6>
                            <div class="section-title-line-three"></div>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="latest-tab-pane" role="tabpanel" aria-labelledby="latest-tab" tabindex="0">
                            <div class="sidebar-widget sidebar-widget-two">
                                <div class="popular-post popular-post-two">
                                    <div class="thumb">
                                        <img src={icon_coin1} alt="" />
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Bitcoin <span>(BTC)</span></h5>
                                        <span>$ 28,636.00</span>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="popular-post popular-post-two">
                                    <div class="thumb">
                                        <img src={icon_coin2} alt="" />
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Ethereum <span>(ETH)</span></h5>
                                        <span>$ 25,636.00</span>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="popular-post popular-post-two">
                                    <div class="thumb">
                                        <img src={icon_coin3} alt="" />
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Tethereum <span>(USDT)</span></h5>
                                        <span>$ 34,636.00</span>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="popular-post popular-post-two">
                                    <div class="thumb">
                                        <img src={icon_coin4} alt="" />
                                    </div>
                                    <div class="content">
                                        <h5 class="title">USD Coin <span>(USDC)</span></h5>
                                        <span>$ 20,636.00</span>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="popular-post popular-post-two">
                                    <div class="thumb">
                                        <img src={icon_coin5} alt="" />
                                    </div>
                                    <div class="content">
                                        <h5 class="title">BNB <span>(BNB)</span></h5>
                                        <span>$ 26,636.00</span>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="popular-post popular-post-two">
                                    <div class="thumb">
                                        <img src={icon_coin6} alt="" />
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Cardano <span>(ADA)</span></h5>
                                        <span>$ 29,636.00</span>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="popular-post popular-post-two">
                                    <div class="thumb">
                                        <img src={icon_coin7} alt="" />
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Dogecoin <span>(DOGE)</span></h5>
                                        <span>$ 36,456.00</span>
                                        <div class="blog-post-meta">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-calendar"></i>27 August, 2024</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
        </>
    );
};

export default CryptoCurrency;
