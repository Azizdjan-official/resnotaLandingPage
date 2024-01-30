import React from 'react'

const HeaderBgImage = () => {
  return (
    <div className='headerBG h-[75vh] flex items-center'>
      <div className='flex flex-col gap-6 w-[80%] mx-auto'>
        <h4 className='text-5xl font-[700] text-white'>Истина в качестве</h4>
        <h6 className='text-lg text-[#FFFFFF] '>КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ <br /> БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ: <br />
            КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, <br />
            ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ</h6>
        <button className='bg-[#0E2149] text-white text-lg w-[168px] h-[46px]'>Купить</button>
      </div>
    </div>
  )
}

export default HeaderBgImage
