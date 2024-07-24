import React from 'react'
import Ticket from "../img/Ticket.png"
import Device from "../img/Device.png"
import Massage from '../img/Massage.png'
import "../styles/main.scss"

const Trophy = () => {
  return (
    <section className="trophy">
        <div className="conti">
            <div className="parts">
                <div className="parts__img">
                    <img src={Ticket} alt="Ticket Picture" className="parts__img--pic" />
                </div>
                <div className="parts__detail">
                    <h2 className="parts__detail--title">رتبه یک سفر</h2>
                    <p className="parts__detail--text">
                        معتبرترین عرضه‌کننده محصولات گردشگری در ایران
                    </p>
                </div>
            </div>
            <div className="parts">
                <div className="parts__img">
                    <img src={Device} alt="Device Picture" className="parts__img--pic" />
                </div>
                <div className="parts__detail">
                    <h2 className="parts__detail--title">همسفر هر سفر</h2>
                    <p className="parts__detail--text">
                        ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)
                    </p>
                </div>
            </div>
            <div className="parts">
                <div className="parts__img">
                    <img src={Massage} alt="massage Picture" className="parts__img--pic" />
                </div>
                <div className="parts__detail">
                    <h2 className="parts__detail--title">همسفر همه لحظات سفر</h2>
                    <p className="parts__detail--text">
                        پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر

                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trophy