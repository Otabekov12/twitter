import './HomeContent.css';
import HomeIcon from '../../images/home-icon.svg';
import FirstUser from '../../images/users-images/first-user.svg';
import GalireyaIcon from '../../images/user-icons/galireya-icon.svg';
import GifIcon from '../../images/user-icons/gif-icon.svg';
import StatIcon from '../../images/user-icons/statistika-icon.svg';
import EmojiIcon from '../../images/user-icons/emoji-icon.svg';
import DateIcon from '../../images/user-icons/calendar-icon.svg';

import chat from '../../images/comment-icons/chat.svg';
import greenExchange from '../../images/comment-icons/green-exchange.svg';
import exchange  from '../../images/comment-icons/exchange.svg';
import heart from '../../images/comment-icons/heart.svg';
import redHeard from '../../images/comment-icons/red-heard.svg';
import share from '../../images/comment-icons/share.svg';
import statistics from '../../images/comment-icons/statistics.svg';

import Designsta from '../../images/users-images/second-user.svg';
import cloutexhibition from '../../images/users-images/third-user.svg';
import CreativePhoto from '../../images/users-images/fourth-user.svg';
import CreativeImage from '../../images/content.png';

import points from '../../images/points.svg';



function HomeContent(){
    
    return(
        <>
        <div className='container-center'>

            { /* Header Section */ }

            <div className='home__header'>
                    <h2 className='home__title'>Home</h2>
               
              
                <img className='home__icon' src={HomeIcon} alt="Home Content icon" />
               
            </div>

            {/* Users Section */}

                <div className='users'>
                    <div className='first__user'>

                       <div className='first__box'>
                            <img className='user__image' src={FirstUser} alt="User's image" />
                            <p className="users__text">What’s happening</p>
                       </div>

                       <img className='users__icon ico' src={GalireyaIcon} alt="icon" />
                        <img className='users__icon' src={GifIcon} alt="icon" />
                        <img className='users__icon' src={StatIcon} alt="icon" />
                        <img className='users__icon' src={EmojiIcon} alt="icon" />
                        <img className='users__icon' src={DateIcon} alt="icon" />

                        <button className='user__btn'>Tweet</button>
                    </div>


                    {/* Comments */}



            
                </div>
        
                    <section className='comments'>
                        <ul className='comments__list'>
                            <li className='comments__item'>
                                <img className='users__image' src={Designsta} alt="users" width={60} height={60} />

                                <div>
                                   <div className='comment__box'>
                                        <div className='comment__info__box'>
                                            <h3 className='users-name'>Designsta</h3> 
                                            <span>@inner · 25m</span>
                                            <p className='comment__text'>
                                            Twitterdagi ayol-erkak 
                                            qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
                                            </p>
                                        </div>

                                        <button className='comment__btn' title='more'></button>
                                   </div>

                                    <ul className='comment__icon__list'>
                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={chat} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={exchange} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={heart} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={share} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={statistics} alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className='comments__item second'>
                                <img className='users__image' src={cloutexhibition} alt="users"   width={60} height={60}/>

                                <div>
                                    <h3 className='users-name'>cloutexhibition</h3> 
                                    <span>@RajLahoti · 22m</span>
                                    <p className='comment__text'>
                                        YPIP dasturining bu yilgi sezoni ham
                                        o’z nihoyasiga yetmoqda. 
                                        Mentorlik davomida talaba va yangi bitiruvchilarni
                                        o’sayotganini ko’rib hursand bo’ladi odam.
                                    </p>

                                    <ul className='comment__icon__list'>
                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={chat} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={greenExchange} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={redHeard} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={share} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={statistics} alt="" />
                                        </li>
                                    </ul>

                                </div>
                            </li>

                            <li className='comments__item second'>
                                <img className='users__image' src={ CreativePhoto } alt="users"   width={60} height={60}/>

                                <div>
                                    <h3 className='users-name'>CreativePhoto</h3> 
                                    <span>@cloutexhibition · 1h</span>
                                    <p className='comment__text'>
                                        Обетда..... 
                                        <br />
                                        Кечиринглар
                                    </p>

                                    <img 
                                    className='content__image' 
                                    src={CreativeImage} alt="CreativePhoto's image"  
                                    width={679} height={453} 
                                    />

                                    <ul className='comment__icon__list'>
                                        <li className='comment__icon__item'>
                                            <img className='comment__icons'  src={chat} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={exchange} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={heart} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={share} alt="" />
                                        </li>

                                        <li className='comment__icon__item'>
                                            <img className='comment__icons' src={statistics} alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
        </>
    )
    
}

export default HomeContent;