import React from 'react'
import "../styles/main.scss"
import { BsAirplane } from "react-icons/bs";
import { BsAirplaneEngines } from "react-icons/bs";
import { PiTrain } from "react-icons/pi";
import { IoBusOutline } from "react-icons/io5";
import { GiSchoolBag } from "react-icons/gi";
import { RiBuildingLine } from "react-icons/ri";
import { FaTent } from "react-icons/fa6";


const Search = () => {

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <section className="search-container">
      <div className="type">
        <a href="#" className='type__link active'><BsAirplane className='type__link--icon'/> پرواز داخلی</a>
        <a href="#" className='type__link'><BsAirplaneEngines className='type__link--icon'/>پرواز خارجی</a>
        <a href="#" className='type__link'><PiTrain className='type__link--icon'/>قطار</a>
        <a href="#" className='type__link'><IoBusOutline className='type__link--icon'/>اتوبوس</a>
        <a href="#" className='type__link'><GiSchoolBag className='type__link--icon'/>تور</a>
        <a href="#" className='type__link'><RiBuildingLine className='type__link--icon'/>هتل</a>
        <a href="#" className='type__link'><FaTent className='type__link--icon'/>ویلا و اقامتگاه</a>
      </div>
      <div className="login">
        <form className="login__form">
          <div className="login__form--input">
            <div class="merged-input">
            <input type="text" placeholder="مبدا(شهر)" />
            <input type="text" placeholder="مقصد (شهر)" />
            </div>
            <div className="merged-input">
              <input type="text" placeholder="تاریخ رفت" />
              <input type="text" placeholder="تاریخ برگشت" />
            </div>
            <input type="text" placeholder="تعداد مسافر" value="یک مسافر" />
            <button type="submit" onClick={submitHandler}>جستجو کنید</button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Search