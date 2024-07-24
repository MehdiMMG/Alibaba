import React , {useState} from 'react'
import "../styles/main.scss"
import StateAirline from"../img/state-airline-f45c55b2.svg"
import Aria from "../img/aira-682b7c43.png"
import Pssanger from "../img/passenger-rights-48368f81.svg"
import Enamad from "../img/enamad-logo.png"
import Samandehi from "../img/samandehi-6e2b448a.png"
import Ecunion from "../img/ecunion-35c3c933.jpg"
import { BiChevronUp,BiChevronDown } from 'react-icons/bi'

const Footer = () => {
  const [isvisible, setIsVisible] = useState(false);
  const toggleText = () => {
    setIsVisible(!isvisible);
  }
  return (
    <section className='footer'>
        <div className="links">
            <div className="right">
                <div className="link">
                    <ul className='link__nav'>
                        <li className='link__nav--list big-font'>علی بابا</li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">درباره ما</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">تماس با ما</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">چرا علی بابا</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">علی بابا پلاس</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">بیمه مسافرتی</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">مجله علی بابا</a></li>
                    </ul>
                </div>
                <div className="link">
                    <ul className='link__nav'>
                        <li className='link__nav--list big-font'>خدمات مشتریان</li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">مرکز پشتیبانی آنلاین</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">راهنمای خرید</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">راهنمای استرداد</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">قوانین و مقررات</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">پرسش و پاسخ</a></li>
                    </ul>
                </div>
                <div className="link">
                    <ul className='link__nav'>
                        <li className='link__nav--list big-font'>اطلاعات تکمیلی</li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">فروش سازمانی</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">همکاری با آژانس</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">فرصت های شغلی</a></li>
                        <li className="link__nav--list"><a href="#" className="link__nav--add">سنجش رضایتمندی</a></li>
                    </ul>
                </div>
            </div>
            <div className="blit">
                    <ul className='tours'>
                        <li className="tours__list"><a href="#" className='tours__list--link'>بلیط چارتر</a></li>
                        <li className="tours__list"><a href="#" className='tours__list--link'>تور کیش</a></li>
                        <li className="tours__list"><a href="#" className='tours__list--link'>تور استانبول</a></li>
                        <li className="tours__list"><a href="#" className='tours__list--link'>بلیط قطار</a></li>
                        <li className="tours__list"><a href="#" className='tours__list--link'>خرید بلیط هواپیمای خارجی</a></li>
                        <li className="tours__list"><a href="#" className='tours__list--link'>اطلاعات فرودگاهی</a></li>
                    </ul>
                    <button className='tours__btn' onClick={toggleText}>
                        {isvisible ? <div>
                            <p>کمتر</p><BiChevronUp/>
                        </div> : <div>
                            <p>بیشتر</p><BiChevronDown/>
                        </div>}
                    </button>
                    {isvisible && <ul className='tours'>
                            <li className="tours__list"><a href="#" className="tours__list--link">شیوه نامه حقوق مسافر</a></li>
                            <li className="tours__list"><a href="#" className="tours__list--link">رزرو هتل</a></li>
                            <li className="tours__list"><a href="#" className="tours__list--link">هتل مشهد</a></li>
                            <li className="tours__list"><a href="#" className="tours__list--link">هتل کیش</a></li>
                            <li className="tours__list"><a href="#" className="tours__list--link">هتل درویشی مشهد</a></li>
                            <li className="tours__list"><a href="#" className="tours__list--link">هتل شایگان کیش</a></li>
                            <li className="tours__list"><a href="#" className="tours__list--link">بلیط اتوبوس</a></li>
                            <li className="tours__list"><a href="#" className="tours__list--link">بلیط تهران استانبول</a></li>
                            <li className="tours__list"><a href="#" className="tours__list--link">بلیط استانبول به تهران</a></li>                          
                        </ul>}
            </div>
        </div>
        <div className="contact">
            <h2 className="contact__title">TESTING</h2>
            <p className="contact__phone">تلفن پشتیبانی:۰۲۱ - ۴۳۹۰۰۰۰۰</p>
            <p className="contact__address">
                دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1
            </p>
            <div className="contact__img">
                <img src={StateAirline} alt="StateAirline" className="contact__img--pic" />
                <img src={Aria} alt="Aria" className="contact__img--pic" />
                <img src={Pssanger} alt="Passanger" className="contact__img--pic" />
                <img src={Enamad} alt="Enamad" className="contact__img--pic" />
                <img src={Samandehi} alt="Samandehi" className="contact__img--pic" />
                <img src={Ecunion} alt="Ecunion" className="contact__img--pic" />
            </div>
        </div>
    </section>
  )
}

export default Footer