import React, { useState } from 'react'
import {Routes,Route,NavLink} from 'react-router-dom'
import "./Navbar.css";
import {AiOutlineMenu} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';
import {LuWallet2} from 'react-icons/lu';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {FaEarthAmericas} from 'react-icons/fa6';
import {FiSettings} from 'react-icons/fi';

const Navbar = (props) => {
    const [menuBtn,setMenuBtn]=useState(false);
    const [dropDownBtn,setDropDownBtn]=useState(false);
    const [cartBtn,setCartBtn]=useState(false);
    function cartHandler(event){
        if(cartBtn){
            setCartBtn(false);
        }
        else{
            setCartBtn(true);
        }
    }
    function dropDownHandler(event){
        if(dropDownBtn){
            setDropDownBtn(false);
        }
        else{
            setDropDownBtn(true);
        }
    }
    function menuHandler(event){
        if(menuBtn){
            console.log("if");
            setMenuBtn(false);
        }
        else{
            console.log("else");
            setMenuBtn(true);
        }
        
    }
  return (
    <div className='m'>
     <div className='nav'>
        
        <div className='logoDiv'>
            <label id='icon' onClick={menuHandler}><AiOutlineMenu/></label>
            <img src="./images/logo.jpeg" className='logo' alt='logo'/>
            <p className='logoText'>Romi Finance</p>
        </div>
        
        <ul className={menuBtn?('list show'):('list')}>
                <li className='link'><NavLink to="/" className="navlink">Home</NavLink></li>
                <li className='link'><NavLink to="/dashboard" className="navlink">Dashboard</NavLink></li>
                <li className='link'>NFT</li>
                <li className='link'><NavLink to="/earn" className="navlink">Earn</NavLink></li>
                <li className='link'>Buy</li>
                <li className='link'>Referrals</li>
                <li className='link'>Ecosystem</li>
                <li className='link'>About</li>
        </ul>
        
        <div className='leftContainer'>
            <button type='button' className='button'>Trade</button>
            <button type='button' onClick={cartHandler} className='buttonWallet'><LuWallet2 class='walleticon'/>Connect Wallet</button>
            <button type='button' onClick={dropDownHandler} className='buttonDot'><img src='https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg' alt='img'/> | <BsThreeDotsVertical class='walleticon'/></button>
        </div>
        
        <div className={dropDownBtn?('dropDownBox showDropDownBox'):('dropDownBox')}>
            <p className='network'>Networks</p>
            <div className='etherium'><img src='https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg' alt='img'/>Etherium</div>
            <p className='setting'><FiSettings className='dropIcon'/>Settings</p>
            <p className='language'><FaEarthAmericas className='dropIcon'/>Language</p>
        </div>
        
     </div>
     <div className={cartBtn?('overlay showOverlay'):('overlay')} onClick={cartHandler}>
                
     </div>
     <div className={cartBtn?('sidebar showSidebar'):('sidebar')}>
        <div className='heading1'>Connect Wallet <RxCross1 onClick={cartHandler}/></div>
        <div className='heading2'><img src='./images/metamask.png' className='sidebarImg' alt="metamask"/>MetaMask</div>
        <div className='heading2'><img src='./images/coinbaseWallet.png' alt="metamask" className='sidebarImg'/>Coinbase Wallet</div>
        <div className='heading2'><img src='./images/walletconnect.svg' alt="walletconnect" className='sidebarImg'/>WalletConnect</div>
     </div>
    </div>
  )
}

export default Navbar