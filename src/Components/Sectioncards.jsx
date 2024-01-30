import meat from "../images/meat.png"
import meat1 from "../images/gosht1.png"
import meat2 from "../images/gosht2.png"

const Sectioncards = () => {
  return (
    <div>
      <div className='w-[80%] mx-auto flex justify-between'>
            <div className='w-[24%] border p-2'>
                <img src={meat}  />
                <h5 className='text-[#0E2149] font-[700] text-xl'>Говядина, кусок с/к</h5>
                <h6 className='text-sm text-[#111111]'>Свинина, смесь посолочная <br /> (соль, нитрит натрия), коньяк, <br /> натуральные специи, сахар.</h6>
                <p className='text-[#0E2149] font-[700] text-2xl'>500 ₽</p>
                <div className='flex items-center gap-4 justify-between my-3'>
                    <p className='text-[#CFB08B] text-lg font-[500] line-through'>660 ₽</p>
                    <div>
                        <button className='bg-[#CFB08B] text-lg  px-1 h-10'>-15%</button>
                        <button className='border border-[#EFF2F4] px-1 h-10'>Экономия 160 ₽</button>
                    </div>
                </div>
                <div className='flex gap-3 justify-between my-3'>
                    <button className='bg-[#0E2149] text-white text-lg px-8 py-1'>Купить</button>
                    <button className='bg-[#CFB08B] text-white text-lg px-8 py-1'>В 1 клик</button>
                </div>
            </div>
            <div className='w-[24%] border p-2'>
                <img src={meat1}  />
                <h5 className='text-[#0E2149] font-[700] text-xl'>Говядина, кусок с/к</h5>
                <h6 className='text-sm text-[#111111]'>Свинина, смесь посолочная <br /> (соль, нитрит натрия), коньяк, <br /> натуральные специи, сахар.</h6>
                <p className='text-[#0E2149] font-[700] text-2xl'>500 ₽</p>
                <div className='flex items-center gap-4 justify-between my-3'>
                    <p className='text-[#CFB08B] text-lg font-[500] line-through'>660 ₽</p>
                    <div>
                        <button className='bg-[#CFB08B] text-lg  px-1 h-10'>-15%</button>
                        <button className='border border-[#EFF2F4] px-1 h-10'>Экономия 160 ₽</button>
                    </div>
                </div>
                <div className='flex gap-3 justify-between my-3'>
                    <button className='bg-[#0E2149] text-white text-lg px-8 py-1'>Купить</button>
                    <button className='bg-[#CFB08B] text-white text-lg px-8 py-1'>В 1 клик</button>
                </div>
            </div>
            <div className='w-[24%] border p-2'>
                <img src={meat}  />
                <h5 className='text-[#0E2149] font-[700] text-xl'>Говядина, кусок с/к</h5>
                <h6 className='text-sm text-[#111111]'>Свинина, смесь посолочная <br /> (соль, нитрит натрия), коньяк, <br /> натуральные специи, сахар.</h6>
                <p className='text-[#0E2149] font-[700] text-2xl'>500 ₽</p>
                <div className='flex items-center gap-4 justify-between my-3'>
                    <p className='text-[#CFB08B] text-lg font-[500] line-through'>660 ₽</p>
                    <div>
                        <button className='bg-[#CFB08B] text-lg  px-1 h-10'>-15%</button>
                        <button className='border border-[#EFF2F4] px-1 h-10'>Экономия 160 ₽</button>
                    </div>
                </div>
                <div className='flex gap-3 justify-between my-3'>
                    <button className='bg-[#0E2149] text-white text-lg px-8 py-1'>Купить</button>
                    <button className='bg-[#CFB08B] text-white text-lg px-8 py-1'>В 1 клик</button>
                </div>
            </div>
            <div className='w-[24%] border p-2'>
                <img src={meat2}  />
                <h5 className='text-[#0E2149] font-[700] text-xl'>Говядина, кусок с/к</h5>
                <h6 className='text-sm text-[#111111]'>Свинина, смесь посолочная <br /> (соль, нитрит натрия), коньяк, <br /> натуральные специи, сахар.</h6>
                <p className='text-[#0E2149] font-[700] text-2xl'>500 ₽</p>
                <div className='flex items-center gap-4 justify-between my-3'>
                    <p className='text-[#CFB08B] text-lg font-[500] line-through'>660 ₽</p>
                    <div>
                        <button className='bg-[#CFB08B] text-lg  px-1 h-10'>-15%</button>
                        <button className='border border-[#EFF2F4] px-1 h-10'>Экономия 160 ₽</button>
                    </div>
                </div>
                <div className='flex gap-3 justify-between my-3'>
                    <button className='bg-[#0E2149] text-white text-lg px-8 py-1'>Купить</button>
                    <button className='bg-[#CFB08B] text-white text-lg px-8 py-1'>В 1 клик</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Sectioncards
