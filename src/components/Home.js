import React from 'react'
import "./Home.css";
const Home = () => {
  return (
    <div className='homeDiv'>
        <div className='homeInnerDiv'>
            <div className='homeFirstContainer'>
                <div className='homeTextDiv'>
                    <p className='homeText1'>
                       Decentralized <br/> Perpetual Exchange
                    </p>
                    <p className='homeText2'>
                        Trade BTC, ETH, AVAX and other top <br/> cryptocurrencies with up to 30x leverage <br/>directly from your wallet
                    </p>
                    <button type='button' className='homeButton' id='launchButton'>Launch Exchange</button>
                </div>
                <div className='data'>
                  <div className='data1'>
                    <img src='./images/trading.svg' alt='image' className='dataImg'/>
                    <div>
                        <p className='dataText1'>Total Trading Volume</p>
                        <p className='dataText2'>$ 0</p>
                    </div>
                  </div>
                  <div className='data1'>
                    <img src='./images/openintrest.svg' alt='image' className='dataImg'/>
                    <div>
                        <p className='dataText1'>Open Interest</p>
                        <p className='dataText2'>$ 0</p>
                    </div>
                  </div>
                  <div className='data1'>
                    <img src='./images/user.svg' alt='image' className='dataImg'/>
                    <div>
                        <p className='dataText1'>Total Users</p>
                        <p className='dataText2'>0</p>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>
        <div className='line'></div>
        <div className='homeInnerDiv'>
            <div className='homeSecondContainer'>
                       <div className='dataDiv'>
                          <div className='data2'>
                            <div className='data2Inner1'>
                                <img src='./images/liquidity.svg' className='dataImg2' alt='image'/>
                                <p>Reduce Liquidation Risks</p>
                            </div>
                            <p className='data2Inner2'>An aggregate of high-quality price <br/>feeds determine when liquidations <br/>occur. This keeps positions safe <br/>from temporary wicks.</p>
                          </div>
                          <div className='data2'>
                            <div className='data2Inner1'>
                                <img src='./images/cost.svg' className='dataImg2' alt='image'/>
                                <p>Save on Costs</p>
                            </div>
                            <p className='data2Inner2'>Enter and exit positions with <br/>minimal spread and zero price <br/>impact. Get the optimal price <br/>without incurring additional costs.</p>
                          </div>
                          <div className='data2'>
                            <div className='data2Inner1'>
                                <img src='./images/simple.svg' className='dataImg2' alt='image'/>
                                <p>Simple Swaps</p>
                            </div>
                            <p className='data2Inner2'>Open positions through a simple <br/>swap interface. Conveniently swap <br/>from any supported asset into the <br/>position of your choice.</p>
                          </div>
                          
                       </div>
                       <div className='secondContainerText'>
                          Two tokens create <br/>our ecosystem
                       </div>
                       <div className='dataDiv3'>
                          <div className='data3'>
                             <div className='data3inner1'><img src='./images/zomi.png' className='data3innerImg' alt='zomi'/>$ZOMI</div>
                             <div className='data3inner2'>$ZOMI is the utility and governance token. Accrues 30% of the <br/>platform's generated fees.</div>
                             <div className='data3inner3'>Ethereum APR: 0.00%</div>
                             <div className='data3inner1'>
                                <button type='button' className='homeButton'>Buy</button>
                                <button type='button' className='readButton'>Read More</button>
                             </div>
                          </div>
                          <div className='data3'>
                             <div className='data3inner1'><img src='./images/zomi.png' className='data3innerImg' alt='zomi'/>$ZOMI</div>
                             <div className='data3inner2'>$ZOMI is the utility and governance token. Accrues 30% of the <br/>platform's generated fees.</div>
                             <div className='data3inner3'>Ethereum APR: 0.00%</div>
                             <div className='data3inner1'>
                                <button type='button' className='homeButton'>Buy</button>
                                <button type='button' className='readButton'>Read More</button>
                             </div>
                          </div>
                          
                       </div>
            </div>
        </div>
    </div>
  )
}

export default Home