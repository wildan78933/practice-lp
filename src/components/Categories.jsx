import React from 'react'
import CategoryCard from './CategoryCard'
import {BsVectorPen, BsMusicNoteList, BsClipboard2Data} from 'react-icons/bs'
import {TiHtml5, TiMicrophoneOutline, TiCameraOutline} from 'react-icons/ti'
import {MdOutlineBusinessCenter, MdOutlineAttachMoney, MdOutlineHealthAndSafety, MdDeveloperMode, MdOutlineNightlife} from 'react-icons/md'
import {FaChalkboardTeacher} from 'react-icons/fa'




const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
    <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            
            <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span>
            </h1>
            <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident,</p>
            <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
                <CategoryCard 
                icons={<BsVectorPen size={30} />}
                title={'Design'}
                />

                <CategoryCard 
                icons={<TiHtml5 size={30} />}
                title={'Development'}
                />

                <CategoryCard 
                icons={<TiMicrophoneOutline size={30} />}
                title={'Marketing'}
                />

                <CategoryCard 
                icons={<MdOutlineBusinessCenter size={30} />}
                title={'Business'}
                />
                
                <CategoryCard 
                icons={<MdOutlineNightlife size={30} />}
                title={'Lifestyle'}
                />

                <CategoryCard 
                icons={<TiCameraOutline size={30} />}
                title={'Photography'}
                />

                <CategoryCard 
                icons={<BsMusicNoteList size={30} />}
                title={'Music'}
                />

                <CategoryCard 
                icons={<BsClipboard2Data size={30} />}
                title={'Data Science'}
                />

                <CategoryCard 
                icons={<MdDeveloperMode size={30} />}
                title={'Personal Develop'}
                />

                <CategoryCard 
                icons={<MdOutlineHealthAndSafety size={30} />}
                title={'Health & Fitness'}
                />
                <CategoryCard 
                icons={<MdOutlineAttachMoney size={30} />}
                title={'Finance'}
                />
                <CategoryCard 
                icons={<FaChalkboardTeacher size={30} />}
                title={'Teaching'}
                />

            </div>

    </div>    
    </div>
  )
}

export default Categories