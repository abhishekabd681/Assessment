// import React from 'react';
// import './Navigation.css';
// import man from './man.png';
// import Search from './Search.png';
// import heart from './heart.png';
// import bucket from './bucket.png';



// function Navigation()
// {
//   return(
//     <div className='container-1'>
//         <div className='container-2'>
//             <h3>
//                 AccioJob
//             </h3>
//         </div>
//         <div className='container-3'>
//            <a href='www.homer.com'>Home</a>
//            <a href='www.homer.com'>Shop</a>
//            <a href='www.homer.com'>About</a>
//            <a href='www.homer.com'>Blog</a>
//            <a href='www.homer.com'>Contact</a>
//            <a href='www.homer.com'>Pages</a>
//         </div>
//         <div className='container-4'>
//          <ul>
//             <li><img src={man}></img></li> 
//             <li><a href='www.login.com'>Login/Register</a></li>
//             <li><img src={Search}></img></li> 
            
//             <li ><img src={bucket}/></li> 
//             <li><img src={heart}></img></li> 
//          </ul>
//         </div>

//     </div>


//   )
// }
// export default Navigation;





import React from 'react'
import './Navigation.css'
import img1 from './man.png'
import img2 from './Search.png'
import img3 from './bucket.png'
import img4 from './heart.png'
import {useSelector} from 'react-redux'  




function Navigation() {
    
const count=useSelector(state=>state.count) 


  return (
    <div>
        <div className="main">
        <div className="div1">
            <h3>Acciojob</h3>
        </div>

        <div className="div2">
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>

            </ul>
        </div>
        <div className="div3">
            <ul>
                <li className='cartcount' >
                    
                   <span><img className='p1' src={img1} alt="" /></span>
                   <span className='myClass' > Login/Register</span>
                </li>

                <li>
                    <img className='p2' src={img2}  alt="" />
                </li>
               
                <li  className='cartcount'>
                   <span><img  className='cart' src={img3}  alt="" /> </span>
                   <span className='myClass'  >{count}</span>
         
                </li>

                <li  className='cartcount'>
                   <span><img className='cart' src={img4} alt="" /></span>
                   <span className='myClass'  >1</span>
                </li>
            </ul>
        </div>

        </div>
        
       
      
    </div>
  )
}

export default Navigation;