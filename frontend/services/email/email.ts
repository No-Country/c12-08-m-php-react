import emailjs from '@emailjs/browser';

export const sendEmail = (data:any) => {

    console.log( emailjs.send('service_urbvbz8', 'template_1i2kto5', data, 'S4AyDQGlNquvF7zSo'))
    if(process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID  && process.env.EMAILJS_PUBLIC_KEY ) {
    }else{
        console.log("EmailJS not configured: check .env file")
    }
}