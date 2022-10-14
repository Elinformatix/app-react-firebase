import React from "react";
import qrcode from "../../assets/qrcode.png"
import confirm from "../../assets/confirm.gif"
import { FaShopware } from 'react-icons/fa';


const ConfirmationPopup = ({isVisible, onClose}) => {
    if ( !isVisible ) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="">
            
                <div className="bg-[#0f152bdd] p-8 flex flex-col items-center  rounded-lg shadow-[0px_22px_70px_4px_rgba(0,0,0,0.66)]">
                <button className="text-white rounded-full bg-[#0f152bdd] py-2 px-4 mb-4 text-center justify-center content-center place-self-end" onClick={() => {
                            onClose()
                        }}><FaShopware></FaShopware></button>
                <img className="mb-10 w-[100px] rounded-lg" src={confirm}/>
                <h1 className="mb-10 font-PermanentMarker text-center text-slate-300 text-xl justify-center">Muito obrigado!</h1>
                        <img className="rounded-lg mb-10" src={qrcode}/>
                        
                </div>
            </div>
        </div>
    )
}
export default ConfirmationPopup;