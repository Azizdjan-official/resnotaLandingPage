import card1 from "../images/card1.png"
import card2 from "../images/card2.png"
import card3 from "../images/card3.png"
import card4 from "../images/card4.png"
import card5 from "../images/card5.png"
import card6 from "../images/card6.png"
import card7 from "../images/card7.png"
import card8 from "../images/card8.png"

const Carts = () => {
  return (
    <div>
      <div className='w-[80%] my-2 mx-auto flex'>
            <div className='card1 w-[33%]'>
                <img src={card1}/>
            </div>
            <div className='card1 w-[33%]'>
                <img src={card2}/>
            </div>
            <div className='card1 w-[33%]'>
                <img src={card3}/>
            </div>
      </div>
      <div className='w-[80%] mx-auto my-2 flex'>
        <div className='card1 w-[50%]'>
                    <img src={card4}/>
                </div>
                <div className='card1 w-[50%]'>
                    <img src={card5}/>
                </div>
        </div>
        <div className='w-[80%] mx-auto flex'>
            <div className='card1 w-[33%]'>
                <img src={card6}/>
            </div>
            <div className='card1 w-[33%]'>
                <img src={card7}/>
            </div>
            <div className='card1 w-[33%]'>
                <img src={card8}/>
            </div>
      </div>
      <div className="flex gap-2 w-[80%] mx-auto items-center justify-center my-4">
        <button className="bg-[#EFF2F4] px-3 py-2">Хиты</button>
        <button className="bg-[#EFF2F4] px-3 py-2">Скидки</button>
        <button className="bg-[#EFF2F4] px-3 py-2">Новинки</button>
      </div>
    </div>
  )
}

export default Carts
