import emailjs from '@emailjs/browser';

export const sendEmail = (data:any) => {
    
    if(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID  && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ) {
        console.log( emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, data, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).then(console.log).catch(console.error))
    }else{
        console.log("EmailJS not configured: check .env file")
    }
}