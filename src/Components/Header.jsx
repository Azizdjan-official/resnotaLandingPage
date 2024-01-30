import logo from "../images/logo.png"
import yulduzcha from "../images/yulduzcha.png"
import korzinka from "../images/korzinka.png"

const Header = () => {
  return (
    <div>
      <nav className="w-[80%] mx-auto flex justify-between py-4">
            <div className="flex gap-8">
                <img src={logo}  />
                <h4 className="text-[#717171]">Колбасы и мясные <br /> деликатесы</h4>
            </div>
            <div className="flex gap-8">
                <img src={yulduzcha}  />
                <img src={korzinka}  />
            </div>
      </nav>
      <div className="bg-[#0E2149] py-3">
        <header className="text-base flex justify-between w-[80%] mx-auto  text-white ">
            <div className="flex items-center gap-8 text-base font-[700] capitalize">
                <h1 >О ресноте</h1>
                <h1 >Каталог</h1>
                <h1 >Наши магазины</h1>
                <h1 >Контакты</h1>
            </div>
            <input className="bg-[#253B6A] px-3 py-2 " type="text" placeholder="Поиск по сайту" />
        </header>
      </div>
    </div>
  )
}

export default Header
