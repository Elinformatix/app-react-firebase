import { useForm } from "react-hook-form";
import { edadValidator } from "./validations";
import logo from "../../assets/logoSK1.png"

const InitForm = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: 'Luis',
            direccion: 'Calle Gran Vía'
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirCPF = watch('incluirCPF');

    return <div>
        
        <form className="bg-[#0f152b84] flex flex-col  rounded-lg shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <img className="w-[150px] m-auto my-6" src={logo}/>
        <h1 className="font-PermanentMarker text-center text-slate-300 text-3xl mb-8 justify-center">Sunset Kiteboarding</h1>
        
            <div className="mb-4">
                <label className="block text-slate-300 text-sm font-bold mb-2" for="nombre">Nome</label>
                <input className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="direccion">Dirección</label>
                <input className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('direccion', {
                    required: true
                })} />
            </div>
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="email">Email</label>
                <input autoComplete="off" className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="edad">Edad</label>
                <input className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('edad', {
                    validate: edadValidator
                })} />
                {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
            </div>
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="pais">País</label>
                <select className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" {...register('pais')}>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                </select>
            </div>
            <div className="mb-4">
            <label className="block text-slate-300 text-sm font-bold mb-2" for="incluirCPF">CPF</label>
                <input type="checkbox" {...register('incluirCPF')} />
            </div>
            {incluirCPF && (
                <div className="mb-4">
                    <label className="block text-slate-300 text-sm font-bold mb-2" for="cpf">CPF</label>
                    <input className="mb-2 shadow appearance-none rounded w-full py-2 px-3 text-gray-400 bg-slate-900 leading-loose focus:outline-none focus:shadow-outline" type="text" {...register('cpf')} />
                </div>
            )}
            <input className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Enviar" />
        </form>
    </div>
}

export default InitForm;