import React from 'react'
import Bagage from "../img/baggage@3x-bda919ec.png"
import "../styles/main.scss"

const Details = () => {
  return (
    <section className="details">
            <div className="details__text">
                <h2 className='details__text--title'>بلیط هواپیما</h2>
                <p className="details__text--paragraph">
                    علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛ اما به مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه شد.
                </p>
                <h2 className="details__text--title">مزایای خرید بلیط هواپیما از علی بابا</h2>
                <p className="details__text--paragraph">
                    شما با خرید بلیط هواپیما از علی‌بابا با سامانه مطمئن و معتبری روبه‌رو هستید که تمام نیازهایتان را پاسخ می‌دهد. برای خرید آنلاین بلیط هواپیما در علی‌بابا کافیست مبدا، مقصد و تاریخ پرواز خود را انتخاب کنید. پس از کلیک روی جستجو، لیست قیمت بلیط هواپیما به مقصد مورد نظر شما ظاهر می‌شود. در این لیست، انتخابهای متعددی پیش روی شماست. برای اینکه گزینه‌ ها را برای خرید بلیط هواپیما محدودتر کنید، علی‌بابا ابزارهای مختلفی در اختیار شما می‌گذارد.
                </p>
            </div>
            <div className="details__img">
                <img src={Bagage} alt="Bagage" className="details__img--pic" />
            </div>
    </section>
  )
}

export default Details