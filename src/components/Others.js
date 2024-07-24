import Flypic from "../img/safarcard-3dc2c4c4.svg"
import Insurance from "../img/insurance-icon-bb51c425.svg"
import Visa from "../img/visa-icon-d8507c8e.svg"
import Tour from "../img/gtour-icon-5e641f1b.svg"
import Call from "../img/phone-sales-4af98b55.jpg"
import Perfume from "../img/Safir_Cardview_Banner_Desktop_02_11_25_1385e307de.png"
import SafarKart from "../img/Safar_Card_Cardview_Banner_Desktop_02_09_22_ed374215f4.png"
import Application from "../img/app-mobile@4x-e3e3b7dc.png"
import QrCode from "../img/qrcode-56155e39.png"
import { FaChevronLeft } from "react-icons/fa6";

import "../styles/main.scss"

const Others = () => {
  return (
    <section className="others">
        <h2 className="others__title">سایر خدمات علی بابا</h2>
        <div className="container">
          <div className="container__img">
            <img src={Flypic} alt="Fly pic" className="container__img--pic new"/><span className="container__img--top">جدید</span>
            <p className="container__img--text">سفر کارت</p>
          </div>
          <div className="container__img">
            <img src={Insurance} alt="Insurase Pice" className="container__img--pic"/>
            <p className="container__img--text">بیمه مسافرتی</p>
          </div>
          <div className="container__img">
            <img src={Visa} alt="Visa pic" className="container__img--pic"/>
            <p className="container__img--text">ویزای سفر</p>
          </div>
          <div className="container__img">
            <img src={Tour} alt="Tour pic" className="container__img--pic"/>
            <p className="container__img--text">تور گروهی</p>
          </div>
        </div>
        <img src={Call} alt="Phone Sale" className="others__phone" />
        <div className="others__ad">
          <img src={SafarKart} alt="Safar Kart" className="others__ad--pic" />
          <img src={Perfume} alt="Perfume" className="others__ad--pic" />
        </div>
        <div className="app">
          <div className="app__detail">
            <div className="qr-code">
              <img src={QrCode} alt="Qr Code" className="qr-code__pic"/>
            </div>
            <div className="qr-text">
              <h2 className="qr-text__title">اپلیکیشن علی بابا</h2>
              <h4 className="qr-text__head">سریع و مطمئن تر به سفر بروید</h4>
              <a href="#" className="qr-text__link">مشاهده لینک های دانلود<FaChevronLeft className="qr-text__icon"/></a>
              <p className="qr-text__text">قابلیت نصب روی Android و iOS</p>
            </div>
          </div>
          <div className="app__img">
            <img src={Application} alt="Application" className="app__img--pic"/>
          </div>
        </div>
    </section>
    
  )
}

export default Others