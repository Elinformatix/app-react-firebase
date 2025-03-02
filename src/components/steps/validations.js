const edadValidator = (value) => {
    return value >= 18 && value <= 65;
}

const enviarform = (values) => {
    const baseURL = "https://script.google.com/macros/s/AKfycbyOGJrhqs6AwTM0YVDnIVAB_CdknJsIFVMCDpMC/exec";
  
    const post_title = values.nombre;
   
    console.log("estamos enviando...")
    console.log(values)
  
    const fortmatResponse = (res) => {
      return JSON.stringify(res, null, 2);
    }
    
    postData();

    async function postData() {
      const postData = {
        nombre: values.nombre,
        email: values.email,
        telefone: values.telefone,
        identidade: values.identidade,
        pais: values.pais,
        estado: values.estado,
        cidade: values.cidade,
        endereço: values.endereço,
        cep: values.cep,
        code: values.code,
        contact: values.contact,  
        uuid: values.uuid
      };
  
      try {
        const res = await fetch(`${baseURL}`, {
          method: "post",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(postData),
        });
  
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
  
        const data = await res.json();
  
        const result = {
          status: res.status + "-" + res.statusText,
          headers: {
            "Content-Type": res.headers.get("Content-Type"),
            "Content-Length": res.headers.get("Content-Length"),
          },
          data: data,
        };
        console.log(result)
        
      } catch (err) {
        console.log(err)

      }
    }
    
    const clearPostOutput = () => {
     
    }
    
    return 1 >= 18 && 1 <= 65;
  }

export { edadValidator, enviarform }