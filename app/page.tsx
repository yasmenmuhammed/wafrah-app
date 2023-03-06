import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Logo from '../public/wafrah-logo.png'

import Webinar from '../public/Webinar.png'
import Training from '../public/AA Training.png'
import Payroll from '../public/Payroll Certification.png'
export default function Home() {
  return (
    <main className='w-full h-[100vh] m-0 p-0  bg-gradient-to-l from-[#11171B] to-[#142B3B]'>

      <div className='flex  p-0 m-0 bg-[url(../public/shape-abstract.png)] bg-cover	w-full h-[100vh] '>
        <section id='form-section' className=' m-auto space-y-16 w-1/2   text-center  ' >

          <div className='flex w-full  justify-center '>
            <form className='space-y-4 w-7/12 text-end' >
              <p className='text-shadow-sm  mb-8 text-[#55D48D] text-3xl font-medium'>سجل اهتمامك</p>
              <input name='user_name' className='form-input' placeholder=' اسمك ثلاثي' />
              <input name='position' className='form-input' placeholder=' منصبك ' />
              <input name='investment_price' className='form-input' placeholder='مبلغ الاستثمار ' />
              <input name='phone_number' className='form-input' placeholder=' رقم الجوال ' />
              <input name='email_address' className='form-input' placeholder=' البريد الالكتروني  ' />
              <input name='investment_reason' className='form-input placeholder:text-end h-32 overflow-visible flex break-all ' placeholder='هدف الاستثمار ' />
              <div className='flex justify-start w-full'>
                <button className='   bg-[#55D48D] px-2.5 py-2 text-white rounded-sm w-24' type='submit'>ارسال</button>
              </div>
            </form>

          </div>

        </section>


        <section id='vissin-section ' className='space-y-56 w-1/2'>
          <div className='  flex justify-end relative w-full  p-0 mx-0  mt-8 '>
            <Image alt='logo' src={Logo} className='p-3 absolute mr-20' />

          </div>


          { /** paragraph section */}
          <div className='p-10 text-end  '>
            <p className='text-white  relative text-6xl tracking-tighter	 font-sans mb-6'>
              ! حقق اهدافك المالية مع وفرة
            </p>
            <p className='text-white  relative z-20 text-l font-sans'>نخطط عنك لبناء محفظتك الاستثمارية حسب اهدافك المالية برسوم ادارية مختلفة
            </p>
            { /** icons section */}
            <div className='w-full flex gap-4 justify-evenly mt-14 text-white text-center'>
              <div className='space-y-2'>
                <div className='flex w-full justify-center'>

                  <Image src={Webinar} alt={'Webinar'} />
                </div>
                <p>منتاجات استثمارية متنوعة</p></div>
              <div className='space-y-2'>
                <div className='flex w-full justify-center'>
                  <Image className='block' src={Training} alt={'Training'} />
                </div><p>خطط مالية خاصة بك</p></div>
              <div className='space-y-2'>
                <div className='flex w-full justify-center'>
                  <Image className='block' src={Payroll} alt={'Payroll'} /></div>
                <p>خبراء لادارة اموالك</p></div>
            </div>
          </div>

        </section>
      </div >

    </main >
  )
}
