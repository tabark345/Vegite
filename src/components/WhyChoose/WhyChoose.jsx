import 'react'
import { FaBus } from 'react-icons/fa'

const WhyChoose = () => {
return <>
<div className=" py-14 md:py-20  bg-gray-50">
    <div className="container">
        <h1 className='pb-16 tracking-wide text-2xl 
        font-semibold text-dark 
        text-center'
        data-aos="fade"
        >
            Why Choose Us
        </h1>

        <div data-aos="fade"
        data-aos-delay="300">
            <div className='grid grid-cols-2 
            md:grid-cols-4 gap-14 sm:gap-4 '>
                <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                    <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet, </p>
                    <p className=' text-5xl text-primary rotate-90 text-center translate-x-4'>...... </p>
                    <FaBus className='text-5xl text-primary'/>
                </div>
                <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                    <FaBus className='text-5xl text-secondary'/>
                    <p className=' text-5xl text-secondary rotate-90 text-center translate-x-4'>...... </p>
                    <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet, </p>
                </div>
                <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                    <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet, </p>
                    <p className=' text-5xl text-primary rotate-90 text-center translate-x-4'>...... </p>
                    <FaBus className='text-5xl text-primary'/>
                </div>
                <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                    <FaBus className='text-5xl text-secondary'/>
                    <p className=' text-5xl text-secondary rotate-90 text-center translate-x-4'>...... </p>
                    <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet, </p>
                </div>
            </div>
        </div>
    </div>
</div>
</>
}

export default WhyChoose
