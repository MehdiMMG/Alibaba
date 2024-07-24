import '../styles/main.scss'
import { CiCircleQuestion } from "react-icons/ci";
import { BsSuitcase } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";


const Navbar = () => {
  return (
    <section className="container">
      <div className="main-nav">
        <h2 className="main-logo">TESTING</h2>
        <ul className='nav'>
          <li className='nav__list'><a href="#" className='nav__list--link'>بلیط</a><span><GoChevronDown className='nav__list--logo'/></span>
          <ul className='inside'>
            <li className='inside__nav'><a href="#" className='inside__nav--link'>پرواز داخلی</a></li>
            <li className='inside__nav'><a href="#" className='inside__nav--link'>پرواز خارجی</a></li>
            <li className='inside__nav'><a href="#" className='inside__nav--link'>قطار</a></li>
            <li className='inside__nav'><a href="#" className='inside__nav--link'>اتوبوس</a></li>
          </ul>
          </li>
          <li className='nav__list'><a href="#" className='nav__list--link'>اقامت</a><span><GoChevronDown className='nav__list--logo'/></span>
            <ul className='inside'>
            <li className='inside__nav'><a href="#" className='inside__nav--link'>هتل</a></li>
            <li className='inside__nav'><a href="#" className='inside__nav--link'>هتل و اقامتگاه</a></li>
            </ul>
          </li>
          <li className='nav__list'><a href="#" className='nav__list--link'>تور</a></li>
          <li className='nav__list'><a href="#" className='nav__list--link'>ویزا</a></li>
          <li className='nav__list'><a href="#" className='nav__list--link'>بیشتر</a><span><GoChevronDown className='nav__list--logo'/></span>
            <ul className='inside'>
            <li className='inside__nav'><a href="#" className='inside__nav--link'>علی بابا پلاس</a></li>
            <li className='inside__nav'><a href="#" className='inside__nav--link'>مجله علی بابا </a></li>
            <li className='inside__nav'><a href="#" className='inside__nav--link'>بیمه مسافرتی</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <ul className='info'>
        <li className='info__list'><span><CiCircleQuestion className='info__icon'/></span>مرکز پشتیبانی آنلاین</li>
        <li className='info__list'><span><BsSuitcase className='info__icon'/></span>سفرهای من</li>
        <li className='info__list'><span><IoPersonOutline className='info__icon'/></span>ورود یا ثبت نام</li>
      </ul>
    </section>
  )
}

export default Navbar