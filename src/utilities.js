export const drawRect = (detection, ctx) =>{
    detection.forEach(prediction=>{
        // get prediction results
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        // set styling
        const color = 'green'
        ctx.strokeSylt = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        //draw retangles and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}