import React from 'react'

const Location = () => {
  return (
    <div id='location'>
      <h2 style={{textAlign:"center"}}>Location Advantages</h2>
      <div className='location'>
        
        <div className='box1' >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4169.203759583461!2d77.41578768999486!3d28.513603974286344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9ffff109205%3A0x1d3399ed3185f506!2sFairfox%20EON%20Commercial%20Park%2C%20Noida!5e0!3m2!1sen!2sin!4v1675421849503!5m2!1sen!2sin" width="99%" height="98%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
    <div className='box1'>
       <div style={{display:"block"}}>
        <div>Eon is Located in the bustling sector 140-A Noida,this mixed-use complex is a triump of creativity and craftmanship,featuring an office tower and high street retail zone along with a supercharged fashion and culinary eperience.</div>
         <div style={{marginTop:"5%",fontSize:"1rem",marginLeft:"2%"}}><img src="https://i.imgur.com/DRaVMyS.png" style={{width:"30px"}}/>Walking distance from Metro Station/FnG/Noida Expressway</div>
         <div style={{marginTop:"3%",fontSize:"1rem",marginLeft:"2%"}}><img src="https://i.imgur.com/DRaVMyS.png" style={{width:"30px"}}/>20 mintes drive to Jewar International Airport</div>
         <div style={{marginTop:"3%",fontSize:"1rem",marginLeft:"2%"}}><img src="https://i.imgur.com/DRaVMyS.png" style={{width:"30px"}}/>2-5 Minutes Drive to Nearest Hospital</div>
         <div style={{marginTop:"3%",fontSize:"1rem",marginLeft:"2%"}}><img src="https://i.imgur.com/DRaVMyS.png" style={{width:"30px"}}/>15 minutes drive to DND Flyway</div>
       </div>
    </div>
    
    </div>
    </div>
  )
}

export default Location