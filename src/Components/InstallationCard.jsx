import React from 'react';
import downloadIcon from "../assets/icon-downloads.png"
import ratingIcon from "../assets/icon-ratings.png"
import useAppsData from '../hooks/useAppsData';
import Spinner from './Spinner';

const InstallationCard = ({App, handleUninstall}) => {
    const {id, image, title, companyName, ratingAvg, downloads, size } = App;

     const {loading} = useAppsData()

     loading && <Spinner></Spinner>

  return (
    <div>
      <div className="card md:flex md:flex-row justify-between items-center bg-base-100 h-full shadow-xl pb-5 md:pr-10 md:pb-0 ">
              <div className='md:flex flex-row'>
                <figure className="px-5 pt-5  md:w-40 h-full ">
                <img src={image} alt="Shoes" className="rounded-xl h-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title h-full">
                  {title} : {companyName}
                </h2>
                <div className="space-x-5">
                  <button disabled className="btn bg-green-50 text-green-500  ">
                    <img className="w-5" src={downloadIcon} alt="" />
                    {downloads / 1000000}M
                  </button>
                  <button disabled className="btn bg-amber-50 text-orange-300 ">
                    <img className="w-5" src={ratingIcon} alt="" /> {ratingAvg}
                  </button>
                   <button disabled className='btn  bg-red text-gray-500'>{size} MB</button>
                </div>
              </div>
              </div>
              <button onClick={()=>handleUninstall(id)} className='btn  btn-success text-white'>Uninstall</button>
            </div>
    </div>
  );
};

export default InstallationCard;