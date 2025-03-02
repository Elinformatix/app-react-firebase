import React from 'react';



 /*
        <div className={"h-96 rounded-2xl p-10 bg-no-repeat bg-cover overflow-hidden relative " + (index === 0 ? 'w-2/3' : 'w-1/3')}
            style={{
                'background-image': `url(${background})`,
            }}
        >
        */


const CardPrimary = ({ title, avatar, background, name, views, created_at, check_icon, duration, index }) => (
   
    <div className={"h-96 m-10 rounded-2xl p-10 bg-no-repeat bg-cover  overflow-hidden relative w-[350px]  " + (index === 0 ? 'lg:w-2/3' : 'lg:w-1/3')}
    style={{
        'background-image': `url(${background})`,
    }}
>
        <h3 className="text-3xl font-semibold max-w-[15rem]"> {title} </h3>
        <div className="flex flex-wrap-reverse items-center pt-4 pr-24">
            <div className="relative flex items-center justify-center rounded-full w-14 h-14">
                <img className="w-12 h-12 rounded-full" src={avatar} alt="" />
                <span className="absolute inset-0 border rounded-full border-white/50" />
                <component is="content.check_icon" className="absolute bottom-0 right-0" />
            </div>
            <div className="flex flex-col py-4 pl-2">
                <a className="font-medium tracking-wider" href="#"> {name} </a>
                <span className="text-xs tracking-wider text-black">
                    {views + created_at}
                </span>
            </div>
        </div>
        <span
            className="px-2 py-0.5 absolute right-5 bottom-5 rounded-lg text-white bg-gray-900/50 text-xs"
        >
            {duration}
        </span>
    </div>
);

export default CardPrimary;