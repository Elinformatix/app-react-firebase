import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Our prices,</h1>
     
    </div>
    <div className="gpt3__whatgpt3-feature pb-10">
      <Feature title="COURSES PRICING" text="The focus of the content depends on the individual learning speed and is adapted to each student We work with helmet, life jacket and radio communication for immediate feedback on the water and fast learning." />
    </div>  
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-sm  uppercase  bg-[#040C18] text-gray-100">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        LESSONS
                    </th>
                    <th scope="col" class="py-3 px-6">
                        DURATION
                    </th>
                    <th scope="col" class="py-3 px-6">
                        HOUR VALUE
                    </th>
                    <th scope="col" class="py-3 px-6">
                        PRICE
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-slate-400">
                        SINGLE HOUR
                    </th>
                    <td class="py-4 px-6">
                        1h
                    </td>
                    <td class="py-4 px-6">
                        R$350
                    </td>
                    <td class="py-4 px-6">
                        R$350
                    </td>

                </tr>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-slate-400">
                        SUNSET EXPERIENCE
                    </th>
                    <td class="py-4 px-6">
                        2,5h
                    </td>
                    <td class="py-4 px-6">
                        R$330
                    </td>
                    <td class="py-4 px-6">
                        R$825
                    </td>

                </tr>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-slate-400">
                        SUNSET START
                    </th>
                    <td class="py-4 px-6">
                        4h
                    </td>
                    <td class="py-4 px-6">
                        R$315
                    </td>
                    <td class="py-4 px-6">
                        R$1260
                    </td>

                </tr>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-slate-400">
                        SUNSET EVOLUTION
                    </th>
                    <td class="py-4 px-6">
                        7,5h
                    </td>
                    <td class="py-4 px-6">
                        R$295
                    </td>
                    <td class="py-4 px-6">
                        R$2213
                    </td>

                </tr>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-slate-400">
                        SUNSET INSIDE
                    </th>
                    <td class="py-4 px-6">
                        10h
                    </td>
                    <td class="py-4 px-6">
                        R$280
                    </td>
                    <td class="py-4 px-6">
                        R$2800
                    </td>

                </tr>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-slate-400">
                        GROUP LESSON
                    </th>
                    <td class="py-4 px-6">
                        2,5h
                    </td>
                    <td class="py-4 px-6">
                        R$230
                    </td>
                    <td class="py-4 px-6">
                        R$575
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
    <div className="gpt3__whatgpt3-feature py-10">
      <Feature title="RENTALS PRICING" text="We have the new core models in different sizes." />
    </div>  
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-sm bg-[#040C18] text-gray-100">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        EQUIPMENT
                    </th>
                    <th scope="col" class="py-3 px-6">
                        DURATION
                    </th>
                    <th scope="col" class="py-3 px-6">
                        HOUR VALUE
                    </th>
                    <th scope="col" class="py-3 px-6">
                        PRICE
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-slate-400">
                        ONLY KITE
                    </th>
                    <td class="py-4 px-6">
                        1h
                    </td>
                    <td class="py-4 px-6">
                        R$150
                    </td>
                    <td class="py-4 px-6">
                        R$150
                    </td>

                </tr>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-slate-400">
                        PACK ONLY KITE
                    </th>
                    <td class="py-4 px-6">
                        All day
                    </td>
                    <td class="py-4 px-6">
                        R$100
                    </td>
                    <td class="py-4 px-6">
                        R$400
                    </td>

                </tr>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-slate-400">
                        FULL EQUIPMENT
                    </th>
                    <td class="py-4 px-6">
                        1h
                    </td>
                    <td class="py-4 px-6">
                        R$250
                    </td>
                    <td class="py-4 px-6">
                        R$250
                    </td>

                </tr>
                <tr class=" border-b bg-gray-900 border-gray-800 hover:bg-gray-600">
                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-slate-400">
                        PACK FULL EQUIPMENT
                    </th>
                    <td class="py-4 px-6">
                        All day
                    </td>
                    <td class="py-4 px-6">
                        R$150
                    </td>
                    <td class="py-4 px-6">
                        R$600
                    </td>

                </tr>

            </tbody>
        </table>
    </div>
  </div>
);

export default WhatGPT3;
