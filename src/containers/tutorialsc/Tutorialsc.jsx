import React from 'react';
import "./tutorialsc.css"
import CardPrimary from '../../components/Cards/CardPrimary';
import CardSecondary from '../../components/Cards/CardSecundary';

const card = 
    {
      title: "How to do Basic Jumping and how to landing safely",
      avatar: "/tutorials/avatar-3.png",
      background: "/tutorials/bg-1.png",
      name: "Thomas Hope",
      views: "53K views",
      created_at: "2 weeks ago",
      check_icon: "CheckTealIcon",
      duration: "7 min",
      index: 0,
    };

const card2 = {
    title: "Kitesurf Tips You need to know",
    avatar: "/tutorials/avatar-2.png",
    background: "/tutorials/bg-2.png",
    name: "Tony Andrew",
    views: "52K views",
    created_at: "1 weeks ago",
    check_icon: "CheckOrangeIcon",
    duration: "10 min",
    index: 1
  }

  const secondaryCard = [
    {
      title: "Basic how to ride your kite comfortly",
      avatar: "/tutorials/avatar-6.png",
      background: "/tutorials/bg-3.png",
      name: "Andy William",
      views: "53K views",
      created_at: "2 weeks ago",
      color: "green",
      duration: "7 min",
    },
    {
      title: "Prepare for your first kitesurf jump",
      avatar: "/tutorials/avatar-4.png",
      background: "/tutorials/bg-7.png",
      name: "Johny Wise",
      views: "53K views",
      created_at: "2 weeks ago",
      color: "orange",
      duration: "7 min",
    },
    {
      title: "Tips to playing kitesurf on waves",
      avatar: "/tutorials/avatar-8.png",
      background: "/tutorials/bg-6.png",
      name: "Budi Hakim",
      views: "53K views",
      created_at: "2 weeks ago",
      color: "orange",
      duration: "7 min",
    },
    {
      title: "Basic Equipment to play kitesurf safely",
      avatar: "/tutorials/avatar-7.png",
      background: "/tutorials/bg-4.png",
      name: "Wijaya Abadi",
      views: "53K views",
      created_at: "2 weeks ago",
      color: "green",
      duration: "7 min",
    },
  ];

const Tutorialsd = () => (
    
  <div className="sunset__tutorials section__padding" id="blog">
  <div className="sunset__tutorials-heading">
      <h1 className="gradient__text">Great tips, <br /> to become an expert!</h1>
  </div>
  <div className="flex">
      <div className="flex flex-col w-full pl-5 pr-14 py-7">
      <div class="pt-10">
          <h2 class="text-4xl text-white font-semibold">Discover</h2>
          <div className="flex flex-col justify-center items-center  lg:flex-row space-x-6 py-7 ">
              <CardPrimary  {...card} />
              <CardPrimary  {...card2} />
          </div>
      </div>
        <div className="pt-4">
          <h2 className="text-2xl text-white font-medium">Most watched</h2>
          <div className="flex flex-wrap justify-evenly py-6">
            <CardSecondary  {...secondaryCard[0]} />
            <CardSecondary  {...secondaryCard[1]} />
            <CardSecondary  {...secondaryCard[2]} />
            <CardSecondary  {...secondaryCard[3]} />
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Tutorialsd;