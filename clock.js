
    
   

    


    

   
    

function drawClock(){
    
    let canvas = document.getElementById('clock')
let context = canvas.getContext('2d')
let R = 300,
    d, angle, pX, pY, qX, qY, date, hours,
     minutes, seconds, secondsAngle, minutesAngle, hoursAngle , a,b,c

    
let clock = new Path2D()
let riski = new Path2D()
    a = new Path2D()
    c = new Path2D()
    b = new Path2D()
    
    

    context.clearRect(0, 0, 10000, 10000)
    clock.arc(300, 300, 300, 0,2*Math.PI)
    context.lineWidth = 5
    context.strokeStyle = '#000000'
    context.stroke(clock)
  
 

    for(d = 0; d<60; d++){
        angle = (d/60) * (2 * Math.PI)
        pX = Math.cos(angle) * R
        pY = -Math.sin(angle) * R
        qX = 0.9 * pX 
        qY = 0.9 * pY 
        pX += R
        pY += R
        qX += R
        qY += R
        riski.moveTo(pX,pY)
        riski.lineTo(qX,qY) 
        context.stroke(riski)
        
       
    }

    

    
    date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()
    


    

    secondsAngle = (seconds / 60) * (2 * Math.PI)
    minutesAngle = (minutes / 60) * (2 * Math.PI)
    hoursAngle = ((hours % 12) / 12) * (2 * Math.PI)
    
    secondsAngle = Math.PI / 2 - secondsAngle
    minutesAngle = Math.PI / 2 - minutesAngle
    hoursAngle = Math.PI / 2 - hoursAngle

   
    // hX = Math.cos(hoursAngle) * R
    // hY = -Math.sin(hoursAngle) * R
    // HX = 0.9 * hX 
    // HY = 0.9 * hY 
   
    // a.moveTo(300,300)
    // a.lineTo(HX,HY)
    // context.lineWidth = 10
    // context.stroke(a) 
 
    sX = Math.cos(secondsAngle) * R
    sY = -Math.sin(secondsAngle) * R
    SX = 0.9 * sX 
    SY = 0.9 * sY 

    
    

    b.moveTo(300,300)
    b.lineTo(SX,SY)
    b.fillStyle = '#ff0000'
    b.fill
    context.stroke(b)

    // mX = Math.cos(minutesAngle) * R
    // mY = -Math.sin(minutesAngle) * R
    // MX = 0.9 * mX 
    // MY = 0.9 * mY 

    // c.moveTo(300,300)
    // c.lineTo(MX,MY)
    // context.stroke(c)


    
 

    setTimeout(drawClock, 1000)
    
}

         
drawClock()
    
    
  



