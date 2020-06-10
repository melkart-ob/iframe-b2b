export const getSrcIframe = (name: string): string => {
    console.log("recibiendo parametros: "+name);
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15695.593996283413!2d-66.98689864999999!3d10.4296288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af5301d77af69%3A0xe96465970f816892!2sJefatura%20Civil%20de%20Caricuao!5e0!3m2!1ses!2sve!4v1591809495609!5m2!1ses!2sve"
}

export const initIframe = (id: string) => {
    try {
        let iframe = document.createElement('iframe');
        iframe.style.display = "block";
        iframe.src = getSrcIframe("test");
        let insert_div = document.getElementById(id);
        document.body.appendChild(iframe);
    }catch (e) {
        console.warn(e.message)
    }
}


