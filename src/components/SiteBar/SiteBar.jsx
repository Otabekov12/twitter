import './SiteBar.css';
import TwitterLogo from '../../images/twitter-logo.svg';


import Home from '../../images/nav-icons/home.svg';
import Explore from '../../images/nav-icons/Explore.svg';
import Notifications from '../../images/nav-icons/Notifications.svg';
import Messages from '../../images/nav-icons/Messages.svg';
import Bookmarks from '../../images/nav-icons/Bookmarks.svg';
import Lists from '../../images/nav-icons/Lists.svg';
import profile from '../../images/nav-icons/profile.svg';
import more from '../../images/nav-icons/more.svg';

import FirstUser from '../../images/users-images/first-user.svg';
import points from '../../images/points.svg';


function SiteBar(){
    
    return(
        <>

        <div>
            <nav className='twitter__navbar'>
            <div className='sitebar'>
                <a href="#">

                <img 
                className='sitebar__log' 
                src={TwitterLogo} 
                alt="Twitters" 
                />

                </a>
            </div>
                <ul className='nav__list'>

                    <li className='nav__item  home'>

                     <img className='nav__icons' src={Home} alt="nav icons" />
                     <h3><a className='nav__link' href="#">Home</a></h3>

                    </li>

                    <li className='nav__item Explore'>

                     <img className='nav__icons' src={Explore} alt="nav icons" />
                     <h3><a className='nav__link' href="#">Explore</a></h3> 

                    </li>

                    <li className='nav__item Notifications '>

                     <img className='nav__icons' src={Notifications} alt="nav icons" />
                     <h3><a className='nav__link' href="#">Notifications</a></h3> 

                    </li>

                    <li className='nav__item Messages'>

                     <img className='nav__icons' src={Messages} alt="nav icons" />
                     <h3><a className='nav__link' href="#">Messages</a></h3>
                                     
                    </li>

                    <li className='nav__item Bookmarks'>

                     <img className='nav__icons' src={Bookmarks} alt="nav icons" />
                     <h3><a className='nav__link' href="#">Bookmarks</a></h3>
                                     
                    </li>

                    <li className='nav__item Lists '>

                     <img className='nav__icons' src={Lists} alt="nav icons" />
                     <h3><a className='nav__link' href="#">Lists</a></h3>
                                     
                    </li>

                    <li className='nav__item Profile '>

                     <img className='nav__icons' src={profile} alt="nav icons" />
                     <h3><a className='nav__link' href="#">Profile</a></h3>
                                     
                    </li>

                     <li className='nav__item More '>

                     <img className='nav__icons' src={more} alt="nav icons" />
                     <h3><a className='nav__link' href="#">More</a></h3>
                                     
                    </li>
                   
                </ul>

                <button  className='tweet__button'>Tweet</button>

            </nav>

            <div className='influencer'>
                <img className='first__image' src={FirstUser} alt="FirstUser's image" />
                <div className='influencer__info'>
                    <h3 className='influencer__name'>Bobur</h3>
                    <p className='influencer__text'>@bobur_mavlonov</p>
                </div>

                <img className='points__img' src={points} alt="" />

            </div>

        </div>
        </>
    )
    
}

export default SiteBar;