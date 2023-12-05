import React from 'react'
import './ChatApp.css'

function ChatApp() {
   

  return (
    <div className='container bg-black'>
       <div className='row '>
         <div className='col-1'>
             <div>
                <h2 className='logo text-warning'>Logo</h2>
             </div>
         </div>
         <div className='col-2 mt-2'>
             <div>
                <span className='h5 text-warning '><i class="fa-solid fa-house-chimney mx-2"></i>Explore</span>
             </div>
         </div>
         <div className='col-2 mt-2'>
                <span className='h5 text-warning '><i class="fa-solid fa-pencil mx-2"></i>Create</span>
         </div>
         <div className='col-6 mt-2 '>
                <span className='h5  text-warning '><i class="fa-solid fa-wand-magic-sparkles mx-2"></i>Edit</span>
         </div>
         <div className='col mt-2'>
                <button type='button' className='btn btn-warning ml-2'>Login</button>
         </div>
       
       <div className='row mt-5'  >
          <div className='col-4 '>
            <div className='side container bg-secondary py-5'>
                <span className='all m-4 p-2 fs-4 mx-3 text-white '>ALL YOUR CHATS</span>
        
            <div className='mx-2 p-4 px-1 '>
                <button className='bt p-4 py-2 '><i className="fa-solid fa-comment-dots me-2 "></i>Chat Images: ON</button>
            </div>
            <div className='mx-3 fs-6'>
                <span className='text-white '>When a bot sends you images, you will be charged one secondary image</span>
            </div>
              
              <div className='sidechat1 my-4'>
                 <div className='py-3'>
                      <div className=''>
                       <img className='img mx-3 'src='https://images.pexels.com/photos/14928818/pexels-photo-14928818.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' /><span className='text-white fs-4'>Caressa Jessalin</span><br></br>
                        <small className='text-muted px-5 mx-4 '>Lorem ipsum dolor sit am...</small>
                      </div>
                 </div>

                 <div className='py-3'>
                      <div className=''>
                       <img className='img mx-3 'src='https://images.pexels.com/photos/14928818/pexels-photo-14928818.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' /><span className='text-white fs-4'>Caressa Jessalin</span><br></br>
                        <small className='text-muted px-5 mx-4 '>Lorem ipsum dolor sit am...</small>
                      </div>
                 </div>

                 <hr></hr>

                 <div>
                 <i class=" plusicon fa-solid fa-circle-plus fs-1 pt-3"></i><span className='fs-3 mx-4 '>Create new bot</span>
                 </div>

              </div>
           
          </div>
          </div>
         
          

          <div className='col-8'>
               <div className='right container bg-secondary'>
                  <div className=' righthead '>
                     <div className='row'>
                     <div className='col-7'>
                  <img className='img mx-3  my-3'src='https://images.pexels.com/photos/14928818/pexels-photo-14928818.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' /><span className='text-white fs-4'>Caressa Jessalin</span>
      
                  </div>
                     <div className='col-5'>
                        <div className='text-white'>
                        <i class="fa-solid fa-circle-left fs-3 my-3 mx-2"></i><span className='fs-4 mx-1'>Back</span><i class="fa-solid fa-trash-can fs-4 mx-2"></i><span className='fs-4'>Delete</span>
                        </div>
                        
                     </div></div>
                  </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                  <div className='row '>
                     <div className='col-5'>
                  
                  </div>
                  <div className='col-5 '>
                     <div className='msg1 p-3 py-2'>
                    <span>Hello!</span></div><br></br>
                    <div className='msg1 py-1 p-3'><span>Yes, my order according to application.Thankyou</span></div><br></br>
                  </div>
                  <div className='col-1'>
                  <img className='img mx-2'src='https://images.pexels.com/photos/14928818/pexels-photo-14928818.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
                  </div>
                   </div>

                   <div className='row'>
                      <div className='col-1'>
                      <img className='img mx-2'src='https://images.pexels.com/photos/14928818/pexels-photo-14928818.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
                      </div>

                      <div className='col-5'>
                      <div className='msg1 p-3 py-2'>
                           <span>Hello<i class="fa-solid fa-hand text-warning"></i></span></div><br></br>
                          <div className='msg1 py-1 p-3'><span>Your order according to application yes?</span></div>
                      </div> 
                      
                      <div className='col-3'>

                      </div>
                   </div><br></br>

                   <div className='row'>
                   <div className='col-5'>
                  
                  </div>
                  <div className='col-5 '>
                     <div className='msg1 p-3 py-2'>
                    <span>Are you Therese</span></div><br></br>
                    
                  </div>
                  <div className='col-1'>
                  <img className='img mx-2'src='https://images.pexels.com/photos/14928818/pexels-photo-14928818.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
                  </div>
                   </div>

                   <div className='row'>
                   <div className='col-1'>
                      <img className='img mx-2'src='https://images.pexels.com/photos/14928818/pexels-photo-14928818.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
                      </div>

                      <div className='col-5'>
                      <div className='msg1 p-3 py-2'>
                           <span>How can I help you?</span></div><br></br>
                      </div> 
                      
                      <div className='col-3'>

                      </div>
                   </div>



                  <div className='row my-3  '>
                      <div className='text mx-4  col-9 p-2'>
                          <span className='mx-2'>Message</span>
                      </div>
                      <div className='col-2'>
                      <i class="fa-brands fa-telegram fs-1  mx-4"></i>
                      </div>
                  </div>
               </div>

             </div>
          </div>



          <div className='row my-4'>
         <div className='col-7'>
             <div>
                <h2 className='logo text-warning'>Logo</h2>
             </div>
         </div>
         <div className='col-3 mt-2'>
            <span className='text-white'>contact@00000000.tech</span>
         </div>
         <div className=' logs col-2 mt-2 '>
         <i class="fa-brands fa-telegram mx-1 fs-3"></i><i class="fa-brands fa-instagram fs-3 mx-1"></i><i class="fa-brands fa-x-twitter fs-3 mx-1"></i>
         </div></div>
          
          
          </div>
    </div>
  )
}

export default ChatApp