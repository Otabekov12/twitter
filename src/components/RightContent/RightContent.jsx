import './RightContent.css';
 import Settings from '../../images/settings.svg';

 import Mushtariy from '../../images/users-images/Mushtariy.svg';
 import Shuhratbek from '../../images/users-images/Shuhratbek.svg';

function RightContent(){
    
    return(
        <>
          <div className='right__side'>

          <div className='container'>
               <div className='right__header'>
                 <input 
                 className='right__input' 
                 type="text"  
                 placeholder='Search Twitter'/>  
                </div>

                <main className="right__main">

                    <section className='trends__section'>
                        <div className='trends__header'>
                            <h3 className='trneds__title'>Trends for you</h3>
                            <img className='trends__image' src={Settings} alt="settings icon" />
                        </div>

                        <div className='trends__box'>
                           <div className='comment__info__box'>
                                <p className='trends__text'>Trending in Germany</p>
                                <h3 className='trneds__titles' >Revolution</h3>
                                <p className='trends__text'>50.4K Tweets</p>

                            </div>
                            <button className='trends__btn' title='more'></button>
                        </div>

                        <div className='trends__box'>
                           <div className='comment__info__box'>
                                <p className='trends__text'>Trending in Germany</p>
                                <h3 className='trneds__titles'>Revolution</h3>
                                <p className='trends__text'>50.4K Tweets</p>

                            </div>
                            <button className='trends__btn' title='more'></button>
                        </div>

                        <div className='trends__box'>
                           <div className='comment__info__box'>
                                <p className='trends__text' >Trending in Germany</p>
                                <h3 className='trneds__titles'>Revolution</h3>
                                <p className='trends__text'>50.4K Tweets</p>

                            </div>
                            <button className='trends__btn' title='more'></button>
                        </div>

                        <a className='trend__link' href="#">Show more</a>
                    </section>

                    <section className='recommended__section'>
                        
                       <div className='recommended__blok'>
                            <div className='recommended__hero'>
                                <h3 className='trneds__title'>You might like</h3>
                            </div>

                            <div className='recommended'>
                                <img className='recommended__users' src={Mushtariy} alt="Mushtariy's profiles" />
                                <div className='recommended__person'>
                                    <h3 className='recommended__user'>Mushtariy</h3>
                                    <p className='recommended__text'>@Mushtar565266</p>
                                </div>

                                <button className='recommended__btn'>Follow</button>
                            </div>

                            <div className='recommended'>
                                <img className='recommended__users' src={Shuhratbek} alt="Mushtariy's profiles" />
                                <div className='recommended__person'>
                                    <h3 className='recommended__user'>Mushtariy</h3>
                                    <p className='recommended__text'>@Mushtar565266</p>
                                </div>

                                <button className='recommended__btn'>Follow</button>
                            </div>

                            <a className='trend__link' href="#">Show more</a>
                       </div>
                    </section>

                </main>

               

                
           </div>

          </div>
        </>
    )
    
}

export default RightContent;