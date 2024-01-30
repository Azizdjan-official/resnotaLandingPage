import pLogo from "../images/pLogo.png"
import facebook from "../images/facebook.png"

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='blueFooter'>
            <div className="flex w-[80%] mx-auto items-center justify-between py-5">
                <div className="text-white">
                    <h4 className='text-4xl font-[700]'>Есть вопросы?</h4>
                    <h5 className='text-lg '>Оставьте свои данные и наш <br /> менеджер свяжется с вами в <br /> ближайшее время.</h5>
                </div>
                <div>
                    <img src={pLogo} />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-3">
                            <input className="py-2 px-3" type="text" placeholder="Ваше имя" />
                            <input className="py-2 px-3" type="text" placeholder="Телефон/E-mail" />
                        </div>
                        <div>
                            <textarea className="h-full" placeholder="Комментарий" cols="30" ></textarea>
                        </div>
                    </div>
                    <label className="flex gap-3 text-white my-2">
                        <input className="w-[18px] h-[18px]"  type="checkbox"/>
                        <h6 className="text-xs">Даю согласие на рассылку рекламных материалов, акций и скидок</h6>
                    </label>
                    <label className="flex gap-3 text-white my-2">
                        <input className="w-[18px] h-[18px]"  type="checkbox"/>
                        <h6 className="text-xs">Даю согласие на обработку моих персональных данных</h6>
                    </label>
                    <button className="bg-[#D79F43] text-lg text-white px-8 py-2">Отправить</button>
                </div>
            </div>
      </div>
      <div>
        <div className="w-[80%] mx-auto flex justify-between py-4">
            <div className="flex flex-col justify-between gap-5">
                <h5 className="text-[#0E2149]"><span className="text-[#0E2149] text-lg font-[700] ">Продукция <br /> </span>  Колбасные и мясные <br /> изделия <br />Молочные продукты</h5>
                <h6 className="text-[#0E2149] text-lg font-[700] ">О компании</h6>
            </div>
            <div className="flex flex-col justify-between gap-5">
                <h5 className="text-[#0E2149]">Морепродукты <br /> Пиво</h5>
                <h6 className="text-[#0E2149] text-lg font-[700] ">Наши магазины</h6>
            </div>
            <div className="flex flex-col justify-between gap-5">
                <h5 className="text-[#0E2149]"> Замороженные продукты <br /> Мед</h5>
                <h6 className="text-[#0E2149] text-lg font-[700] ">Контакты</h6>
            </div>
            <div className="flex flex-col justify-between gap-5">
                <h5 className="text-[#0E2149]"> Свежие овощи <br /> Свежие фрукты</h5>
            </div>
        </div>
      </div>
      <div className="border py-4 ">
         <div className="w-[80%] mx-auto flex justify-between">
            <h6 className="text-[#0E2149] text-sm">2016–2021 © ООО «ПД Реснота»</h6>
            <div>
                <img src={facebook} alt="" />
            </div>
            <h6 className="text-[#0E2149] text-sm">Разработка и продвижение сайта — SEOabsolut</h6>
         </div>
      </div>
    </div>
  )
}

export default Footer
