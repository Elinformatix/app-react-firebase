import React from 'react';



const CardSecondary = ({ title, avatar, background, name, views, created_at, duration, index }) => (
    <div className="m-5 w-64 rounded-2xl overflow-hidden relative">
        <img className="h-40" src={background} alt="" />
        <div className="absolute flex items-center justify-center rounded-full right-5 top-32 w-14 h-14">
            <img className="w-12 h-12 rounded-full" src={avatar} alt="" />
            <span className="absolute inset-0 border rounded-full border-white/50" />
            
        </div>
        <span
            className="px-2 py-0.5 absolute right-2 top-2 text-black rounded-lg bg-gray-100/50 text-[0.7rem]"
        >
            { duration }
        </span>
        <div className="px-5 py-5 bg-gray-900">
            <div className="flex items-center">
                <span className="text-xs font-normal tracking-wider text-gray-400">
                    { name }
                </span>
                <span
                    className="w-2 h-2 ml-2 rounded-full  bg-emerald-500"
                />
            </div>
            <h3 className="inline-block pt-1 font-medium leading-relaxed text-gray-200">{ title }</h3>
            <span className="inline-block pt-4 text-sm tracking-wider text-gray-500">
                { views + created_at }
            </span>
        </div>
    </div>
);

export default CardSecondary;