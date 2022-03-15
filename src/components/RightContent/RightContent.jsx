import './RightContent.css';
// import TwitterLogo from '../../images/twitter-logo.svg';


function RightContent(){
    
    return(
        <>
           <div className='container'>

               <div className='right__header'>
                 <input 
                 className='right__input' 
                 type="text"  
                 placeholder='Search Twitter'/>  
                </div>

                <main className="right__main">
                    <div className='trends__section'>

                    </div>
                </main>

                
           </div>
        </>
    )
    
}

export default RightContent;