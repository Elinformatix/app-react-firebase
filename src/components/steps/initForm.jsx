import { useForm } from "react-hook-form";
import { edadValidator,enviarform } from "./validations";

import logo from "../../assets/logoSK1.png"
import "./steps.css"
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import {insertNewClient} from "../../firebase/firebase";


const InitForm = () => {

    const steps = ["Contact Info","Address Info","Sunset Partner Code"]
    const [formStep, setFormStep] = useState(0)
    const [effect, setEffect] = useState(false);
    let navigate = useNavigate();


    

    const nextStep = () => {
        if ( formStep < 2 ) setFormStep(formStep + 1)
        setEffect(true);
    }
    const backStep = () => {
        if ( formStep > 0 ) setFormStep(formStep - 1)
        setEffect(true);
    }

    const renderButtons = () => {
        return(
            <div className="flex flex-row" >
                {formStep > 0 && formStep < steps.length-1  && (<button   className="button2" onClick={ backStep }>Back</button>)}
                {formStep < steps.length-1 && ( <button disabled={!isValid} className={`${effect && "animate-wiggle"} button2 ml-auto hover:opacity-80 hover:shadow-xl transition-all`} onClick={() => { nextStep(); }} onAnimationEnd={() => setEffect(false)}>Next</button>)}
         

            </div>
           
        )
    }

    const { register, formState: { errors, isValid }, watch, handleSubmit } = useForm({

        mode: "all",
        
        /*
        defaultValues: {
            nombre: 'David',
            endereço: 'Tatajuba, Alameda Manoel n1',
            telefone: "88999467682",
            email: "brazzz_07@hotmail.com",
            identidade: "750.465.041-20",
            pais: "Brasil",
            estado:"CE",
            cep:"62598-000",
            code:"XDF-$$$",
            contact: "Mark"
        }
        */
    });
  
    const [showModal, setShowModal] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        enviarform(data);
        insertNewClient(data);
    }

    const showConfirmation = () =>{
       
            setShowModal(true);
       
    }

    const handleClick = () => {
        var doc = window.document;
        var docEl = doc.documentElement;
      
        var requestFullScreen =
          docEl.requestFullscreen ||
          docEl.mozRequestFullScreen ||
          docEl.webkitRequestFullScreen ||
          docEl.msRequestFullscreen;
        var cancelFullScreen =
          doc.exitFullscreen ||
          doc.mozCancelFullScreen ||
          doc.webkitExitFullscreen ||
          doc.msExitFullscreen;
      
        if (
          !doc.fullscreenElement &&
          !doc.mozFullScreenElement &&
          !doc.webkitFullscreenElement &&
          !doc.msFullscreenElement
        ) {
          requestFullScreen.call(docEl);
        } else {
          cancelFullScreen.call(doc);
        }
      }

    const incluirCPF = watch('incluirCPF');

    return <div className="w-full max-w-[30rem] place-items-center">
       
        {formStep == 0 && (
           <section className=" text-slate-100 mb-5  p-5">
           <h1 className="font-bold text-left  text-slate-100 text-4xl mb-3 justify-center">{steps[0]}</h1>
            <div className="line-5  mb-5 w-1/3 rounded-full"></div>
            <p>
                Wellcome to Sunset Kiteboarding!
            </p>
            <p>
                We need some informations about you to improve your experience
            </p>
           </section>
        )}
        {formStep == 1 && (
           <section className=" text-slate-100 mb-5  p-5">
           <h1 className="font-bold text-left  text-slate-100 text-4xl mb-3 justify-center">{steps[1]}</h1>
            <div className="line-5  mb-5 w-1/3 rounded-full"></div>
            <p>
                Where are you from?
            </p>
            <p>
                Our instructors speak english, french, spanish & portuguese!
            </p>
           </section>
        )}
        {formStep == 2 && (
           <section className=" text-slate-100 mb-5  p-5">
           <h1 className="font-bold text-left  text-slate-100 text-4xl mb-3 justify-center">{steps[2]}</h1>
            <div className="line-5  mb-5 w-1/3 rounded-full"></div>
            <p>
                Do you have a partner code?
            </p>
            <p>
                If you have a SUNSET PARTNER CODE please send it to us
            </p>
           </section>
        )}
        <form className={`${effect && "animate-wiggle"} bg-[#0f152b3c]  transition ease-in-out delay-150 flex flex-col p-8 rounded-lg shadow-[0px_22px_70px_4px_rgba(0,0,0,0.66)]  mb-4`} onSubmit={handleSubmit(onSubmit)}>
        
            <input type="hidden" name="uuid" value={uuid()} {...register('uuid', {})}/>

            {formStep==0 && ( 
                <>
            
            <div className="mb-4">
                <label className="block text-slate-300 text-sm font-bold mb-2" for="nombre">Nome completo/Full Name</label>
                <input autoComplete="Off" placeholder="John Dow" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p className="text-[#d8d647]">Nome é requerido - Field name required</p>}
               
            </div>
            <div className="mb-4">
                <label className="block text-slate-300 text-sm font-bold mb-2" for="email">Email</label>
                <input autoComplete="Off" placeholder="John Dow" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                 {errors.email?.type === 'pattern' && <p className="text-[#d8d647]">Wrong email - Email invalido</p>}

               
            </div>
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="telefone">Telefone/Phone</label>
                <input autoComplete="Off" placeholder="+(XX) XX XXXXXXXXX" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('telefone', {
                    required: true
                })} />
                {errors.telefone?.type === 'required' && <p className="text-[#d8d647]">Telefone é requerido - Phone number required</p>}

            </div>
           
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="identidade">CPF/Passport</label>
                <input autoComplete="Off" placeholder="XXX.XXX.XXX-XX" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('identidade', {
                    required: true
                })} />
                {errors.identidade?.type === 'required' && <p className="text-[#d8d647]">Identidade é requerido - Identity field required</p>}

            </div>
            </>
            )}
            {formStep==1 && ( 
                <>

            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="pais">Pais/Country</label>
                <input autoComplete="Off" placeholder="Brasil" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('pais', {
                    required: true
                })} />
                {errors.pais?.type === 'required' && <p className="text-[#d8d647]">Identidade é requerido - Identity field required</p>}

            </div>
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="estado">Estado/State</label>
                <input autoComplete="Off" placeholder="CE" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('estado', {
                    required: true
                })} />
                {errors.estado?.type === 'required' && <p className="text-[#d8d647]">Identidade é requerido - Identity field required</p>}

            </div>
     
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="endereço">Endereço/Address</label>
                <input autoComplete="Off" placeholder="Fortaleza, Alameda Manoel n1 apto 25" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('endereço', {
                    required: true
                })} />
                {errors.endereço?.type === 'required' && <p className="text-[#d8d647]">Identidade é requerido - Identity field required</p>}

            </div>
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="cep">CEP/Zip Code</label>
                <input autoComplete="Off" placeholder="6598-000" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('cep', {
                    required: true
                })} />
                {errors.cep?.type === 'required' && <p className="text-[#d8d647]">Identidade é requerido - Identity field required</p>}

            </div>
            </>
            )}
            {formStep == 2 && (
                <>
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2" for="code">Sunset Partner Code</label>
                        <input autoComplete="Off" placeholder="XR7-WW" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('code', {
                            required: true
                        })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-300 text-sm font-bold mb-2" for="contact">Atendente/Atendant</label>
                        <input autoComplete="Off" placeholder="Mark" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('contact', {
                            required: true
                        })} />
                    </div>

                    <input className="button" type="submit" value="Enviar" onClick={showConfirmation} id="open-btn" />
                </>)}


            {renderButtons()}

            
            
        </form>
        <div> <br/></div>
       
   
    <ConfirmationPopup isVisible={showModal} onClose={() => {
        setShowModal(false)
        navigate("/");
    }}/>
        
    </div>
}

export default InitForm;