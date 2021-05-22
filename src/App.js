import logo from './logo.svg';
import './App.css';
import './ccsconten.css';
import './menu.css';
import {app1} from './app1'
import './part3.css';

import './bottom_video.css';
import './video.css';
import './rac.css'
function App() {
  return (
    <body>
 <header className="section top-header">
     <div className="container ">
         <a href="" className="all-menu all-menu-tablet"><span className="hamburger"></span></a>
         <h1> <a href="/" d="" className="logo" title="VnExpress - Báo tiếng Việt nhiều người xem nhất"
                 onclick="trackingLogoHome('logo-header', this.href)">
                 <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v387/v2_2019/pc/graphics/logo.svg"
                     alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
             </a>
         </h1> <span className="time-now">Chủ nhật, 9/5/2021</span>
         <div className="right">
             <a href="/" className="btn24hqua " title="Mới nhất">
                 <svg className="ic ic-24h">
                     <use href="#time">
                         <svg id="time" viewBox="0 0 32 32">
                             <path
                                 d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16c8.8 0 16-7.2 16-16s-7.2-16-16-16zM16 28c-6.6 0-12-5.4-12-12s5.4-12 12-12c6.6 0 12 5.4 12 12s-5.4 12-12 12z">
                             </path>
                             <path d="M18 8h-4v10h10v-4h-6v-6z"></path>
                         </svg>
                     </use>
                 </svg>Mới nhất</a>
             <a href="/" className="evne" title="VnExpress International"><svg className="ic ic-evne">
                     <use href="#letter-E">
                         <svg id="letter-E" viewBox="0 0 32 32">
                             <path fill="#9f224e"
                                 d="M10.783 7.811h15.652v-4.226h-20.87v24.83h20.87v-4.226h-15.652v-5.811h7.304v-4.755h-7.304v-5.811z">
                             </path>
                             <path fill="#9f224e"
                                 d="M28.5 32c0.828 0 1.5-0.682 1.5-1.524v-28.952c0-0.842-0.672-1.524-1.5-1.524h-25c-0.829 0-1.5 0.682-1.5 1.524v28.952c0 0.842 0.671 1.524 1.5 1.524h25zM26.586 9.396h-14.238v2.642h5.89c0.864 0 1.414 0.765 1.414 1.64v4.755c0 0.875-0.55 1.529-1.414 1.529h-5.89v2.642h14.238c0.864 0 1.414 0.766 1.414 1.64v4.226c0 0.875-0.55 1.529-1.414 1.529h-20.869c-0.865 0-1.717-0.655-1.717-1.529v-24.83c0-0.875 0.852-1.64 1.717-1.64h20.869c0.864 0 1.414 0.765 1.414 1.64v4.226c0 0.875-0.55 1.529-1.414 1.529z">
                             </path>
                             <path fill="#fff"
                                 d="M28 28.471v-4.226c0-0.875-0.55-1.64-1.414-1.64h-14.238v-2.642h5.89c0.864 0 1.414-0.655 1.414-1.529v-4.755c0-0.875-0.55-1.64-1.414-1.64h-5.89v-2.642h14.238c0.864 0 1.414-0.655 1.414-1.529v-4.226c0-0.875-0.55-1.64-1.414-1.64h-20.869c-0.865 0-1.717 0.765-1.717 1.64v24.83c0 0.875 0.852 1.529 1.717 1.529h20.869c0.864 0 1.414-0.655 1.414-1.529zM26.435 7.811h-15.652v5.811h7.304v4.755h-7.304v5.811h15.652v4.226h-20.87v-24.83h20.87v4.226z">
                             </path>
                         </svg>
                     </use>
                 </svg>International</a>

             <from className="search search-vne" action="https://timkiem." id="formSearchHeader">
                 <input id="keywordHeader" type="text" name="q" placeholder="Tìm kiếm" autocomplete="off" />
                 <button type="submit" title="Tìm kiếm" className="btn-search-vne" id="buttonSearchHeader"><svg
                         className="ic ic-search">
                         <use href="#Search">
                             <svg id="Search" viewBox="0 0 32 32">
                                 <path
                                     d="M14 28c-7.72 0-14-6.28-14-14s6.28-14 14-14c7.72 0 14 6.28 14 14s-6.28 14-14 14zM14 4c-5.514 0-10 4.486-10 10s4.486 10 10 10c5.514 0 10-4.486 10-10s-4.486-10-10-10z">
                                 </path>
                                 <path
                                     d="M31.414 28.586l-4.786-4.786c-0.821 1.057-1.771 2.007-2.828 2.828l4.786 4.786c0.185 0.186 0.406 0.334 0.648 0.435s0.503 0.153 0.766 0.153 0.523-0.052 0.766-0.153c0.243-0.101 0.463-0.249 0.648-0.435s0.333-0.406 0.434-0.649 0.152-0.503 0.152-0.765c0-0.263-0.052-0.523-0.152-0.765s-0.248-0.463-0.434-0.649z">
                                 </path>
                             </svg>
                         </use>
                     </svg>
                 </button></from>
             <div id="myvne_taskbar">
                 <div id="myvne" className="myvne_taskbar myvne_login_button"><a href="" className="log_txt"
                         title="Đăng nhập"><svg className="ic ic-user">
                             <use href="#User">
                                 <svg id="User" viewBox="0 0 32 32">
                                     <path
                                         d="M16 16c4.418 0 8-3.582 8-8s-3.582-8-8-8c-4.418 0-8 3.582-8 8s3.582 8 8 8z">
                                     </path>
                                     <path
                                         d="M32 26.4c0.003-0.766-0.214-1.516-0.627-2.161s-1.002-1.157-1.699-1.475c-4.312-1.876-8.972-2.818-13.674-2.764-4.702-0.054-9.362 0.888-13.674 2.764-0.696 0.318-1.286 0.83-1.699 1.475s-0.63 1.395-0.627 2.161v5.6h32v-5.6z">
                                     </path>
                                 </svg>
                             </use>
                         </svg> Đăng nhập</a></div>
                 <div id="g_id_onload"></div>
             </div>
         </div>
     </div>
 </header>

 <section className="section wrap-main-nav">
     <nav className="main-nav">
         <ul className="parent">
             <li className="home">
                 <a href="/" className="flexbox" title="Trang chủ"
                     onclick="trackingLogoHome('logo-header-menu', this.href)">
                     <svg className="ic ic-home">
                         <use href="#Home">
                             <svg id="Home" viewBox="0 0 32 32">
                                 <path
                                     d="M21.909 31.85h4c1.2 0 2-0.8 2-2v-14h2c0.6 0 1.2-0.2 1.6-0.6 0.8-0.8 0.6-2-0.2-2.8l-14-12c-0.8-0.6-1.8-0.6-2.6 0l-14 12c-0.8 0.8-1 2-0.2 2.8 0.2 0.4 0.8 0.6 1.4 0.6h2v14c0 1.2 0.8 2 2 2h4c1.2 0 2-0.8 2-2v-6h8v6c0 1.2 0.8 2 2 2z">
                                 </path>
                             </svg>
                         </use>
                     </svg>
                 </a>
             </li>
             <li className="newlest"><a href="/" title="Mới nhất">Mới nhất</a></li>
             <li className="thoisu">
                 <a title="Thời sự" href="/">
                     Thời sự </a>
             </li>
             <li className="gocnhin">
                 <a title="Góc nhìn" href="/">
                     Góc nhìn </a>
             </li>
             <li className="thegioi">
                 <a title="Thế giới" href="/">
                     Thế giới </a>
             </li>
             <li className="video" d="">
                 <a title="Video" href="">
                     Video </a>
             </li>
             <li className="kinhdoanh">
                 <a title="Kinh doanh" href="/">
                     Kinh doanh </a>
             </li>
             <li className="giaitri">
                 <a title="Giải trí" href="/z">
                     Giải trí </a>
             </li>
             <li className="thethao">
                 <a title="Thể thao" href="/">
                     Thể thao </a>
             </li>
             <li className="phapluat">
                 <a title="Pháp luật" href="/">
                     Pháp luật </a>
             </li>
             <li className="giaoduc">
                 <a title="Giáo dục" href="/">
                     Giáo dục </a>
             </li>
             <li className="suckhoe">
                 <a title="Sức khỏe" href="/">
                     Sức khỏe </a>
             </li>
             <li className="doisong">
                 <a title="Đời sống" href="/">
                     Đời sống </a>
             </li>
             <li className="dulich">
                 <a title="Du lịch" href="/">
                     Du lịch </a>
             </li>
             <li className="khoahoc">
                 <a title="Khoa học" href="/">
                     Khoa học </a>
             </li>
             <li className="sohoa">
                 <a title="Số hóa" href="/">
                     Số hóa </a>
             </li>
             <li className="xe">
                 <a title="Xe" href="/">
                     Xe </a>
             </li>
             <li className="ykien">
                 <a title="Ý kiến" href="/">
                     Ý kiến </a>
             </li>
             <li className="tamsu">
                 <a title="Tâm sự" href="">
                     Tâm sự </a>
             </li>
             <li className="cuoi">
                 <a title="Hài" href="/#">
                     Hài </a>
             </li>
             <li className="all-menu has_transition"><a href="">Tất cả <span className="hamburger"></span></a>
             </li>
         </ul>
     </nav>
 </section>


 <section className="section section_topstory">
     <div className="container flexbox">
         <div className="col-left-top">
             <div
                 className="wrapper-topstory-folder wrapper-topstory-folder-v2 wrapper-topstory-home flexbox width_common">
                 <article className="item-news full-thumb article-topstory">
                     <div className="thumb-art">
                         <a href="" className="thumb thumb-5x3" title="Thêm 16 ca Covid-19 cộng đồng">
                             <picture>
                                 <img itemprop="contentUrl" loading="lazy" intrinsicsize="680x408"
                                     alt="Thêm 16 ca Covid-19 cộng đồng" className="lazy loading"
                                     src="https://i1-suckhoe.vnecdn.net/2021/05/10/HOA1363-1620649396-7747-1620649407.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=oZuj2QEGRCR9J3K9bjImMQ" />
                             </picture>
                         </a></div>
                     <h3 className="title-news"><a href="" title="Thêm 16 ca Covid-19 cộng đồng">Thêm 16 ca Covid-19
                             cộng
                             đồng</a></h3>
                     <p className="description"><a href="" title="Thêm 16 ca Covid-19 cộng đồng">Bộ Y tế chiều 10/5 ghi
                             nhận thêm 17 ca dương tính
                             nCoV, trong đó 16
                             ca
                             lây nhiễm trong nước, một ca nhập cảnh được cách ly ngay.</a></p>
                     <p className="extend-lead description mt5"><a href="" title="Thêm 16 ca Covid-19 cộng đồng">16 ca
                             mới ghi nhận trong nước đều trong khu vực đã
                             được phong tỏa tại
                             Hưng Yên 6, Đà Nẵng 4, Bắc Giang 3, Hà Nội 2 ...</a></p>
                     <p className="meta-news"><span className="time-public"><span datetime="2021-05-10 19:24:56"
                                 timeago-id="380">1h trước</span></span><a className="cat c-parsed" title="Sức khỏe"
                             href="/">Sức khỏe</a>
                         <a className="count_cmt" href=".">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275935-1"></span>
                         </a>
                     </p>
                 </article>
                 <div className="sub-news-top">
                     <div className="inner-sub-news-top">
                         <div className="scroll-sub-featured">
                             <ul className="list-sub-feature">
                                 <li>
                                     <h3 className="title_news"><a href=""
                                             title="Phó thủ tướng: 'Không thay đổi chiến lược chống dịch'">Phó thủ
                                             tướng: 'Không thay đổi chiến lược chống
                                             dịch'</a>
                                     </h3>
                                     <p className="description"><a href=""
                                             title="Phó thủ tướng: 'Không thay đổi chiến lược chống dịch'">Việt Nam
                                             sẽ kiên trì chiến lược chống dịch đã vạch
                                             ra,
                                             "không lung lay, thay đổi mà phải làm tốt hơn, cập nhật theo tình hình",
                                             theo Phó thủ tướng Vũ Đức Đam.</a><span className="meta-news">
                                             <a className="count_cmt" href="#">
                                                 <svg className="ic ic-comment">
                                                     <use href=""></use>
                                                 </svg>
                                                 <span className="font_icon widget-comment-4275865-1">4</span>
                                             </a>
                                         </span></p>
                                 </li>
                                 <li>
                                     <h3 className="title_news"><a href=""
                                             title="Một nhân viên y tế bị phản vệ sau tiêm vaccine Covid-19">Một nhân
                                             viên y tế bị phản vệ sau tiêm vaccine
                                             Covid-19</a></h3>
                                     <p className="description"><a href=""
                                             title="Một nhân viên y tế bị phản vệ sau tiêm vaccine Covid-19">Bộ Y tế
                                             chiều 10/5 công bố một nhân viên y tế tại Đà
                                             Nẵng
                                             bị phản vệ sau khi tiêm vaccine Covid-19 của AstraZeneca.</a><span
                                             className="meta-news">
                                             <a className="count_cmt" href="">
                                                 <svg className="ic ic-comment">
                                                     <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                             <path
                                                                 d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                             </path>
                                                         </svg></use>
                                                 </svg>
                                                 <span className="font_icon widget-comment-4275861-1">10</span>
                                             </a>
                                         </span></p>
                                 </li>
                                 {/*
                                 <!--box góc nhìn--> */}
                                 <li className="item-gocnhin">
                                     <article className="item-news art-top-gn">
                                         <h3 className="title-news"><a href="" title="Tiến về phía trước">Tiến về phía
                                                 trước</a></h3>
                                         <p className="description"><a href="" title="Tiến về phía trước">Thứ sáu tuần
                                                 trước, với tôi cũng như tất
                                                 cả y bác
                                                 sĩ
                                                 Việt Nam, là một ngày rất buồn.</a></p>
                                         <div className="width_common info-author flexbox">
                                             <p className="meta-news">
                                                 <a href="" className="cat" title="Trần Văn Phúc">Trần Văn Phúc</a>
                                                 <a className="count_cmt" href="">
                                                     <svg className="ic ic-comment">
                                                         <use href="#Comment-Reg"><svg id="Comment-Reg"
                                                                 viewBox="0 0 32 32">
                                                                 <path
                                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                                 </path>
                                                             </svg></use>
                                                     </svg>
                                                     <span className="font_icon widget-comment-4275353-1">98</span>
                                                 </a>
                                             </p>
                                             <div className="thumb-art thumb-author-gn">
                                                 <a href="" className="thumb thumb-1x1" title="Trần Văn Phúc">
                                                     <picture>
                                                         <img itemprop="contentUrl" loading="lazy"
                                                             intrinsicsize="100x100" alt="" className="lazy loading"
                                                             src="https://i1-vnexpress.vnecdn.net/2017/03/31/TranVanPhucpng-1490927036.png?w=100&amp;h=100&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bSd7XIwISyPCOEQsLmZazA" />
                                                     </picture>
                                                 </a>
                                             </div>
                                         </div>
                                     </article>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <aside className="col-right-top">
             <div className="box-category">
                 <div className="banner-ads">
                     <div id="_large_1" className="lazier"></div>
                 </div>
             </div>
         </aside>
     </div>
 </section>

 <section className="section section_stream_home section_container">
     <div className="container has_border flexbox">
         <div className="col-left col-small" id="automation_TV0">
             <article className="item-news item-news-common">
                 <h3 className="title-news"><a href=""
                         title="Bắc Ninh kêu gọi y bác sĩ hưu trí, sinh viên tham chiến Covid-19">Bắc Ninh kêu gọi y
                         bác sĩ hưu trí, sinh viên tham chiến Covid-19</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3"
                         title="Bắc Ninh kêu gọi y bác sĩ hưu trí, sinh viên tham chiến Covid-19">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy"
                                 alt="Bắc Ninh kêu gọi y bác sĩ hưu trí, sinh viên tham chiến Covid-19"
                                 className="lazy loading"
                                 src="https://i1-suckhoe.vnecdn.net/2021/05/10/z2468621351214571745605801c0a1-4001-7696-1620644464.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=pS5l5Cv9gvhBz55V3zQWQQ" />
                         </picture>
                     </a></div>
                 <p className="description"><a href=""
                         title="Bắc Ninh kêu gọi y bác sĩ hưu trí, sinh viên tham chiến Covid-19>">Sở Y tế Bắc Ninh
                         ngày 10/5 kêu gọi cán bộ, người lao động trong hệ thống y
                         tế, kể cả đã nghỉ hưu, sinh viên ngành y, tham gia chống Covid-19.</a><span
                         className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275848-1">6</span>
                         </a>
                     </span></p>
             </article>
             <article className="item-news item-news-common">
                 <h3 className="title-news"><a href=""
                         title="Một nhân viên y tế bị phản vệ sau tiêm vaccine Covid-19">Một nhân viên y tế bị phản
                         vệ sau tiêm vaccine Covid-19</a></h3>
                 <div className="thumb-art"><a href="" className="thumb thumb-5x3"
                         title="Một nhân viên y tế bị phản vệ sau tiêm vaccine Covid-19">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="680x408"
                                 alt="Một nhân viên y tế bị phản vệ sau tiêm vaccine Covid-19" className="lazy loading"
                                 src="https://i1-suckhoe.vnecdn.net/2021/05/10/tiemvaccine4-1620645622-6149-1620645652.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=V75oYu_7NSP6QwmO6rTZiQ">
                             </img></picture>
                     </a></div>
                 <p className="description"><a href=""
                         title="Một nhân viên y tế bị phản vệ sau tiêm vaccine Covid-19>">Bộ Y tế chiều 10/5 công bố
                         một nhân viên y tế tại Đà Nẵng bị phản vệ sau
                         khi tiêm vaccine Covid-19 của AstraZeneca.</a><span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275861-1">11</span>
                         </a>
                     </span></p>
             </article>
             <article className="item-news item-news-common ">
                 <h3 className="title-news">
                     <a href="" title="Thanh niên Đà Nẵng khả năng mắc Covid-19 sau khi rời TP HCM"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1">Thanh
                         niên Đà Nẵng khả năng mắc Covid-19 sau khi rời TP HCM</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3"
                         title="Thanh niên Đà Nẵng khả năng mắc Covid-19 sau khi rời TP HCM"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Thanh niên Đà Nẵng khả năng mắc Covid-19 sau khi rời TP HCM"
                                 className="lazy lazied"
                                 src="https://i1-suckhoe.vnecdn.net/2021/05/10/hoa1190-jpg-1620646200-1620646-1637-2911-1620646318.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=CeHueLWuwOJb6I06JSIiIg">
                             </img> </picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Thanh niên Đà Nẵng khả năng mắc Covid-19 sau khi rời TP HCM"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1">Những
                         người tiếp xúc gần "bệnh nhân 3298" - thanh niên từ Đà Nẵng đến du
                         lịch - đều âm tính nCoV, nên khả năng cao anh này lây nhiễm Covid-19 tại Đà Nẵng, sau khi
                         rời
                         TP HCM</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275902-1">8</span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common " data-id="4275892">
                 <h3 className="title-news">
                     <a href="" title="Malaysia hạn chế đi lại toàn quốc" data-medium="Item-7"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1">Malaysia
                         hạn chế đi lại toàn quốc</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Malaysia hạn chế đi lại toàn quốc"
                         data-medium="Item-7"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Malaysia hạn chế đi lại toàn quốc" className="lazy lazied"
                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/malaysiacovid194-1620644892-7697-1620645019.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=yig4xw9_YBcYR7PExxWBtw"
                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/malaysiacovid194-1620644892-7697-1620645019.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=yig4xw9_YBcYR7PExxWBtw">
                             </img> </picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Malaysia hạn chế đi lại toàn quốc" data-medium="Item-7">
                         Malaysia cấm đi lại giữa các bang và quận thuộc bang, do lo ngại nguy cơ
                         Covid-19 làm quá tải hệ thống y tế trước dịp lễ lớn nhất năm.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275892-1"></span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common " data-id="4275374">
                 <h3 className="title-news">
                     <a href="" title="Ông chủ Vinamit chế nước mía đông khô xuất sang Mỹ" data-medium="Item-8"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-8&amp;vn_term=Desktop&amp;vn_thumb=1&amp;vn_zone=585">Ông
                         chủ Vinamit chế nước mía đông khô xuất sang Mỹ</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Ông chủ Vinamit chế nước mía đông khô xuất sang Mỹ"
                         data-medium="Item-8"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-8&amp;vn_term=Desktop&amp;vn_thumb=1&amp;vn_zone=585">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Ông chủ Vinamit chế nước mía đông khô xuất sang Mỹ" className="lazy lazied"
                                 src="https://i1-kinhdoanh.vnecdn.net/2021/05/09/image003-1620565274-9361-16205-9621-6960-1620571761.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=z60tv4DmbRKB03MBh5s7rw"
                                 data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/09/image003-1620565274-9361-16205-9621-6960-1620571761.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=z60tv4DmbRKB03MBh5s7rw">
                             </img> </picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Ông chủ Vinamit chế nước mía đông khô xuất sang Mỹ" data-medium="Item-8"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-8&amp;vn_term=Desktop&amp;vn_thumb=1&amp;vn_zone=585">Chủ
                         tịch Vinamit Nguyễn Lâm Viên nhận bằng sáng chế Mỹ với công nghệ đông
                         khô nước mía, giữ được vị tươi ngon, nguyên chất.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275374-1">43</span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common " data-id="4275915">
                 <h3 className="title-news">
                     <a href="da-nang-tim-400-nguoi-den-du-tiec-cuoi-co-ca-covid-19-4275915.html"
                         title="Đà Nẵng tìm 400 người đến dự tiệc cưới có ca Covid-19" data-medium="Item-9">Đà
                         Nẵng tìm 400 người đến dự tiệc cưới có ca Covid-19</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="da-nang-tim-400-nguoi-den-du-tiec-cuoi-co-ca-covid-19-4275915.html"
                         className="thumb thumb-5x3" title="Đà Nẵng tìm 400 người đến dự tiệc cưới có ca Covid-19"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-9&amp;vn_term=Desktop&amp;vn_thumb=1">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Đà Nẵng tìm 400 người đến dự tiệc cưới có ca Covid-19" className="lazy lazied"
                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/1-1620647110-8655-1620647163.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=c3KTbu7_rO7R5EP5RH3YMA"
                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/1-1620647110-8655-1620647163.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=c3KTbu7_rO7R5EP5RH3YMA">
                             </img> </picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="da-nang-tim-400-nguoi-den-du-tiec-cuoi-co-ca-covid-19-4275915.html"
                         title="Đà Nẵng tìm 400 người đến dự tiệc cưới có ca Covid-19" data-medium="Item-9"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-9&amp;vn_term=Desktop&amp;vn_thumb=1">Sở
                         Y tế Đà Nẵng đề nghị những người đến dự tiệc cưới tại nhà hàng Phì Lũ 3
                         tối 1/5 cần đến cơ sở y tế khai báo, sau khi phát hiện "bệnh nhân 3404" từng đến đây.</a>
                     <span className="meta-news">
                         <a className="count_cmt"
                             href="da-nang-tim-400-nguoi-den-du-tiec-cuoi-co-ca-covid-19-4275915.html">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275915-1">1</span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common " data-id="4275833">
                 <h3 className="title-news">
                     <a href="vinh-phuc-dinh-chi-cong-tac-8-can-bo-trong-10-ngay-4275833.html"
                         title="Vĩnh Phúc đình chỉ công tác 8 cán bộ trong 10 ngày" data-medium="Item-10"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-10&amp;vn_term=Desktop&amp;vn_thumb=1">Vĩnh
                         Phúc đình chỉ công tác 8 cán bộ trong 10 ngày</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="vinh-phuc-dinh-chi-cong-tac-8-can-bo-trong-10-ngay-4275833.html"
                         className="thumb thumb-5x3" title="Vĩnh Phúc đình chỉ công tác 8 cán bộ trong 10 ngày"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-10&amp;vn_term=Desktop&amp;vn_thumb=1">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Vĩnh Phúc đình chỉ công tác 8 cán bộ trong 10 ngày" className="lazy lazied"
                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/184842243110357247680630968363-5785-4672-1620640368.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OHbLynHGQVrdn8GprSMLaQ"
                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/184842243110357247680630968363-5785-4672-1620640368.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OHbLynHGQVrdn8GprSMLaQ">
                             </img></picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="vinh-phuc-dinh-chi-cong-tac-8-can-bo-trong-10-ngay-4275833.html"
                         title="Vĩnh Phúc đình chỉ công tác 8 cán bộ trong 10 ngày" data-medium="Item-10"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-10&amp;vn_term=Desktop&amp;vn_thumb=1">Tỉnh
                         Vĩnh Phúc đã đình chỉ 8 cán bộ trong 10 ngày qua với quan điểm "không
                         chấp nhận sự đủng đỉnh khi phòng, chống dịch bệnh".</a>
                     <span className="meta-news">
                         <a className="count_cmt"
                             href="vinh-phuc-dinh-chi-cong-tac-8-can-bo-trong-10-ngay-4275833.html">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275833-1">10</span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common " data-id="4275866">
                 <h3 className="title-news">
                     <a href="" title="Bốn ca Covid-19 nặng, một người phải can thiệp ECMO" data-medium="Item-11"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-11&amp;vn_term=Desktop&amp;vn_thumb=1">Bốn
                         ca Covid-19 nặng, một người phải can thiệp ECMO</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Bốn ca Covid-19 nặng, một người phải can thiệp ECMO"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-11&amp;vn_term=Desktop&amp;vn_thumb=1">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Bốn ca Covid-19 nặng, một người phải can thiệp ECMO" className="lazy lazied"
                                 src="https://i1-suckhoe.vnecdn.net/2021/05/10/PHAM0563JPG-1620643609-5812-1620643656.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=iQR0bWFH_0WP6NZyPXhslg"
                                 data-src="https://i1-suckhoe.vnecdn.net/2021/05/10/PHAM0563JPG-1620643609-5812-1620643656.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=iQR0bWFH_0WP6NZyPXhslg">
                             </img> </picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Bốn ca Covid-19 nặng, một người phải can thiệp ECMO" data-medium="Item-11"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-11&amp;vn_term=Desktop&amp;vn_thumb=1">Bốn
                         bệnh nhân Covid-19 điều trị tại Bệnh viện Bệnh nhiệt đới Trung ương
                         đều mắc bệnh lý nền, diễn tiến nặng, được các chuyên gia hội chẩn chiều 10/5.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275866-1">1</span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common " data-id="4275678">
                 <h3 className="title-news">
                     <a href="" title="TP HCM tái lập các chốt kiểm soát dịch ở cửa ngõ" data-medium="Item-12"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-12&amp;vn_term=Desktop&amp;vn_thumb=1">TP
                         HCM tái lập các chốt kiểm soát dịch ở cửa ngõ</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="TP HCM tái lập các chốt kiểm soát dịch ở cửa ngõ"
                         data-medium="Item-12"
                         data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-12&amp;vn_term=Desktop&amp;vn_thumb=1">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="TP HCM tái lập các chốt kiểm soát dịch ở cửa ngõ" className="lazy lazied"
                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/chotkiemdichSaiGon-1620632039-5569-1620632071.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=-xfGjQ8UlIXHyzUQeJQEAw"
                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/chotkiemdichSaiGon-1620632039-5569-1620632071.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=-xfGjQ8UlIXHyzUQeJQEAw">
                             </img></picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="TP HCM tái lập các chốt kiểm soát dịch ở cửa ngõ" data-medium="Item-12">Chủ
                         tịch UBND
                         TP HCM Nguyễn Thành Phong chỉ đạo tái lập các chốt kiểm soát
                         dịch tại các cửa ngõ thành phố, giao lực lượng y tế, công an, quân đội duy trì hoạt
                         động.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275678-1">40</span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common ">
                 <h3 className="title-news">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">Tặng khẩu trang, đồ bảo hộ
                         cho viện
                         K Tân Triều</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" className="lazy lazied"
                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/Hinh00000712Still001-162063033-6339-8009-1620630463.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=UeAo3UFflK_p_XBzChSYKw">
                             </img> </picture>
                         < span class="icon_thumb_videophoto"> <svg svg class="ic ic-video">
                                 <use href="#play-1"></use>
                             </svg></span>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" data-medium="Item-13"><span
                             className="location-stamp">Hà Nội</span>Hàng trăm thùng khẩu trang y tế,
                         quần áo bảo hộ được tiếp tế cho y, bác sỹ, bệnh nhân đang cách ly y tế trong viện K Tân
                         Triều, nơi ghi nhận 13 ca nhiễm Covid-19.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275707-1"></span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common ">
                 <h3 className="title-news">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">Tặng khẩu trang, đồ bảo hộ
                         cho viện
                         K Tân Triều</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" className="lazy lazied"
                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/Hinh00000712Still001-162063033-6339-8009-1620630463.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=UeAo3UFflK_p_XBzChSYKw">
                             </img> </picture>
                         < span class="icon_thumb_videophoto"> <svg svg class="ic ic-video">
                                 <use href="#play-1"></use>
                             </svg></span>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" data-medium="Item-13"><span
                             className="location-stamp">Hà Nội</span>Hàng trăm thùng khẩu trang y tế,
                         quần áo bảo hộ được tiếp tế cho y, bác sỹ, bệnh nhân đang cách ly y tế trong viện K Tân
                         Triều, nơi ghi nhận 13 ca nhiễm Covid-19.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275707-1"></span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common ">
                 <h3 className="title-news">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">Tặng khẩu trang, đồ bảo hộ
                         cho viện
                         K Tân Triều</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" className="lazy lazied"
                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/Hinh00000712Still001-162063033-6339-8009-1620630463.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=UeAo3UFflK_p_XBzChSYKw">
                             </img> </picture>
                         < span class="icon_thumb_videophoto">
                             < svg class="ic ic-video">
                                 <use href="#play-1"></use>
                             </ svg></span>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" data-medium="Item-13"><span
                             className="location-stamp">Hà Nội</span>Hàng trăm thùng khẩu trang y tế,
                         quần áo bảo hộ được tiếp tế cho y, bác sỹ, bệnh nhân đang cách ly y tế trong viện K Tân
                         Triều, nơi ghi nhận 13 ca nhiễm Covid-19.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275707-1"></span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common ">
                 <h3 className="title-news">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">Tặng khẩu trang, đồ bảo hộ
                         cho viện
                         K Tân Triều</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" className="lazy lazied"
                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/Hinh00000712Still001-162063033-6339-8009-1620630463.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=UeAo3UFflK_p_XBzChSYKw">
                             </img> </picture> <span className="icon_thumb_videophoto"><svg className="ic ic-video">
                                 <use href="#play-1"></use>
                             </svg></span>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" data-medium="Item-13"><span
                             className="location-stamp">Hà Nội</span>Hàng trăm thùng khẩu trang y tế,
                         quần áo bảo hộ được tiếp tế cho y, bác sỹ, bệnh nhân đang cách ly y tế trong viện K Tân
                         Triều, nơi ghi nhận 13 ca nhiễm Covid-19.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275707-1"></span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common ">
                 <h3 className="title-news">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">Tặng khẩu trang, đồ bảo hộ
                         cho viện
                         K Tân Triều</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" className="lazy lazied"
                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/Hinh00000712Still001-162063033-6339-8009-1620630463.jpg?w=220&amp;h=132&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=UeAo3UFflK_p_XBzChSYKw">
                             </img></picture>
                         < span class="icon_thumb_videophoto"> <svg svg class="ic ic-video">
                                 <use href="#play-1"></use>
                             </svg></span>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" data-medium="Item-13"><span
                             className="location-stamp">Hà Nội</span>Hàng trăm thùng khẩu trang y tế,
                         quần áo bảo hộ được tiếp tế cho y, bác sỹ, bệnh nhân đang cách ly y tế trong viện K Tân
                         Triều, nơi ghi nhận 13 ca nhiễm Covid-19.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275707-1"></span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common hidden">
                 <h3 className="title-news">
                     <a href="" title="Bắc Ninh thêm 13 ca nghi Covid-19" data-medium="Item-18">Bắc Ninh thêm 13 ca
                         nghi
                         Covid-19</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Bắc Ninh thêm 13 ca nghi Covid-19"
                         data-medium="Item-18">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Bắc Ninh thêm 13 ca nghi Covid-19" className="lazy"
                                 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                             </img> </picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Bắc Ninh thêm 13 ca nghi Covid-19" d="">Trưa 10/5, Sở Y tế Bắc Ninh ghi nhận thêm
                         13 ca
                         dương tính mới đều ở huyện
                         Thuận Thành và liên quan đến viện Nhiệt đới Trung ương tại Hà Nội.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275675-1">7</span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common hidden off-thumb" data-id="4275827">
                 <h3 className="title-news">
                     <a href="" title="BioNTech xây cơ sở sản xuất vaccine Covid-19 ở Đông Nam Á"
                         data-medium="Item-19">BioNTech xây cơ sở sản xuất vaccine Covid-19 ở Đông Nam Á</a>
                 </h3>
                 <p className="description">
                     <a href="" title="BioNTech xây cơ sở sản xuất vaccine Covid-19 ở Đông Nam Á"
                         data-medium="Item-19">Hãng
                         sản xuất vaccine Covid-19 BioNTech sẽ đặt trụ sở Đông Nam Á và địa
                         điểm sản xuất tại Singapore để sản xuất hàng trăm triệu liều vaccine mỗi năm.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275827-1"></span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common hidden off-thumb" data-id="4275754">
                 <h3 className="title-news">
                     <a href="" title="Biến thể Ấn Độ né tránh hệ miễn dịch" data-medium="Item-20">Biến thể Ấn Độ né
                         tránh
                         hệ miễn dịch</a>
                 </h3>
                 <p className="description">
                     <a href="" title="Biến thể Ấn Độ né tránh hệ miễn dịch" data-medium="Item-20">Tổ chức Y tế Thế
                         giới
                         (WHO) cho rằng biến thể B.1.617 Ấn Độ có đột biến
                         kép, khả năng lây lan nhanh chóng và làm giảm hiệu quả vaccine Covid-19.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275754-1"></span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common hidden" data-id="4275659">
                 <h3 className="title-news">
                     <a href="" title="'Lót tay' giám đốc ngân hàng 8 tỷ để vay 630 tỷ đồng" data-medium="Item-21">'Lót
                         tay'
                         giám đốc ngân hàng 8 tỷ để vay 630 tỷ đồng</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3"
                         title="'Lót tay' giám đốc ngân hàng 8 tỷ để vay 630 tỷ đồng">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="'Lót tay' giám đốc ngân hàng 8 tỷ để vay 630 tỷ đồng" className="lazy"
                                 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                             </img> </picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="'Lót tay' giám đốc ngân hàng 8 tỷ để vay 630 tỷ đồng" data-medium="Item-21">SCB
                         vừa
                         khuyến cáo khách tránh hối lộ cho cán bộ ngân hàng sau khi một
                         giám đốc chi nhánh bị tố giả hồ sơ cấp tín dụng để nhận 8 tỷ đồng phí "lót tay".</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275659-1">3</span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common hidden" data-id="4275658">
                 <h3 className="title-news">
                     <a href="" title="Thêm 31 ca Covid-19 cộng đồng" data-medium="Item-22">Thêm 31 ca Covid-19 cộng
                         đồng</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Thêm 31 ca Covid-19 cộng đồng" data-medium="Item-22">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Thêm 31 ca Covid-19 cộng đồng" className="lazy"
                                 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                             </img> </picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Thêm 31 ca Covid-19 cộng đồng" data-medium="Item-22">Bộ Y tế trưa 10/5 ghi
                         nhận 32 ca
                         dương tính nCoV, trong đó 31 ca cộng đồng
                         và một ca nhập cảnh được cách ly ngay.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275658-1">41</span>
                         </a>
                     </span>
                 </p>
             </article>
             <article className="item-news item-news-common hidden">
                 <h3 className="title-news">
                     <a href="" title="Thêm hàng loạt địa phương dừng hoạt động du lịch">Thêm hàng loạt địa phương
                         dừng hoạt
                         động du lịch</a>
                 </h3>
                 <div className="thumb-art">
                     <a href="" className="thumb thumb-5x3" title="Thêm hàng loạt địa phương dừng hoạt động du lịch">
                         <picture>
                             <img itemprop="contentUrl" loading="lazy" intrinsicsize="220x132"
                                 alt="Thêm hàng loạt địa phương dừng hoạt động du lịch" className="lazy"
                                 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                             </img></picture>
                     </a>
                 </div>
                 <p className="description">
                     <a href="" title="Thêm hàng loạt địa phương dừng hoạt động du lịch" data-medium="Item-23">Phú
                         Yên, TP
                         Hải Phòng dừng hoạt động đón khách tham quan tại các di tích,
                         danh thắng và khu, điểm du lịch để phòng chống Covid-19.</a>
                     <span className="meta-news">
                         <a className="count_cmt" href="">
                             <svg className="ic ic-comment">
                                 <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                         <path
                                             d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                         </path>
                                     </svg></use>
                             </svg>
                             <span className="font_icon widget-comment-4275505-1">2</span>
                         </a>
                     </span>
                 </p>
             </article>
         </div>
         <div className="col-right col-medium">

             <div className="box-category box-cate-featured box-covid-2021 has-border">
                 <article className="item-news item-news-common hidden" id="live_topic_covid">
                 </article>
                 <div className="inner-box-cv flexbox width_common">
                     <div className="header-cv flexbox">
                         <p className="txt-head">
                             <strong>Số ca nhiễm tại Việt Nam</strong>
                             <span>Lây nhiễm cộng đồng từ 27/4</span>
                         </p>
                         <div className="width_common box-count-head flexbox">
                             <a href="/covid-19/covid-19-viet-nam" className="link-to-page"></a>
                             <div className="item-count-head">
                                 <span className="txt-ch">Tổng</span>
                                 <span className="number-count">458</span>
                             </div>
                             <div className="item-count-head">
                                 <span className="txt-ch">Ca nhiễm<br />theo ngày</span>
                                 <div className="width_common chart-by-date chart-by-date" id="chart-by-date">

                                     <li className="flex">
                                         <div className="td"><svg className="spl" width="88" height="30"
                                                 stroke-width="1.5" stroke="rgb(243, 88, 91)"
                                                 fill="rgb(243, 88, 91, 0.2)">
                                                 <path className="sparkline--fill"
                                                     d="M4 26.32 L 4 26.32 L 10.153846153846153 26.5 L 16.307692307692307 25.4 L 22.461538461538463 25.21 L 28.615384615384617 25.95 L 34.769230769230774 25.03 L 40.92307692307693 24.66 L 47.07692307692308 25.95 L 53.23076923076923 23.19 L 59.38461538461539 14.72 L 65.53846153846155 18.96 L 71.6923076923077 11.78 L 77.84615384615385 9.57 L 84 3.5 V 30 L 4 30 Z"
                                                     stroke="none"></path>
                                                 <path className="sparkline--line"
                                                     d="M4 26.32 L 4 26.32 L 10.153846153846153 26.5 L 16.307692307692307 25.4 L 22.461538461538463 25.21 L 28.615384615384617 25.95 L 34.769230769230774 25.03 L 40.92307692307693 24.66 L 47.07692307692308 25.95 L 53.23076923076923 23.19 L 59.38461538461539 14.72 L 65.53846153846155 18.96 L 71.6923076923077 11.78 L 77.84615384615385 9.57 L 84 3.5"
                                                     fill="none"></path>
                                                 <line className="sparkline--cursor" x1="-1000" x2="-1000" y1="0"
                                                     y2="30" stroke-width="2"></line>
                                                 <circle className="sparkline--spot" cx="-1000" cy="-1000" r="2">
                                                 </circle>
                                                 <rect width="88" height="30" className="sparkline--interaction-layer">
                                                 </rect>
                                             </svg><span className="tooltip" hidden="true"></span></div>
                                     </li>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="wrap-slide-cv">
                         <div className="textlink-to-page flexbox">
                             <a href="covid-19/covid-19-viet-nam" className="flexbox" title="Số liệu Covid-19"><span
                                     className="ico-cv ico-tracking"></span><span className="txt-cv">Số liệu
                                     Covid-19</span></a>
                             <a href="covid-19/tin-tuc" className="flexbox" title="Tin tức cập nhật"><span
                                     className="ico-cv ico-news"></span><span className="txt-cv">Tin tức cập
                                     nhật</span></a>
                         </div>
                         <div className="width_common table-cv">
                             <table className="tbl-cv" cellspacing="0" cellpadding="0">
                                 <thead>
                                     <tr>
                                         <th className="col-prov">Tỉnh</th>
                                         <th className="col-today">Hôm nay</th>
                                         <th className="col-all">Tổng</th>
                                     </tr>
                                 </thead>
                             </table>
                             <div className="width_common wrap-scroll-tb scrollbar-inner ss-container">
                                 <div className="ss-wrapper">
                                     <div className="ss-content">
                                         <table className="tbl-cv tbl-sort" cellspacing="0" cellpadding="0">
                                             <tbody>
                                             </tbody>
                                             <tbody>
                                                 <tr>
                                                     <td className="col-prov">Hà Nội <span>(Cộng đồng: 51)</span>
                                                     </td>
                                                     <td className="col-today number-up">+32</td>
                                                     <td className="col-all"><strong>143</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Bắc Ninh</td>
                                                     <td className="col-today number-up">+27</td>
                                                     <td className="col-all"><strong>85</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Vĩnh Phúc</td>
                                                     <td className="col-today number-up">+20</td>
                                                     <td className="col-all"><strong>53</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Đà Nẵng</td>
                                                     <td className="col-today number-up">+18</td>
                                                     <td className="col-all"><strong>53</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Bắc Giang</td>
                                                     <td className="col-today number-up">+15</td>
                                                     <td className="col-all"><strong>47</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Hưng Yên</td>
                                                     <td className="col-today number-up">+6</td>
                                                     <td className="col-all"><strong>19</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Hoà Bình</td>
                                                     <td className="col-today number-up">+3</td>
                                                     <td className="col-all"><strong>5</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Hải Dương</td>
                                                     <td className="col-today number-up">+1</td>
                                                     <td className="col-all"><strong>5</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Lạng Sơn</td>
                                                     <td className="col-today number-up">+1</td>
                                                     <td className="col-all"><strong>4</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Điện Biên</td>
                                                     <td className="col-today number-up">+1</td>
                                                     <td className="col-all"><strong>2</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Đăk Lăk</td>
                                                     <td className="col-today number-up">+1</td>
                                                     <td className="col-all"><strong>2</strong></td>
                                                 </tr>
                                                 <tr>
                                                     <td className="col-prov">Hà Nam</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>16</strong></td>
                                                 </tr>
                                                 <tr data-score="6">
                                                     <td className="col-prov">Thái Bình</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>6</strong></td>
                                                 </tr>
                                                 <tr data-score="3">
                                                     <td className="col-prov">Quảng Nam</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>3</strong></td>
                                                 </tr>
                                                 <tr data-score="3">
                                                     <td className="col-prov">Thừa Thiên Huế</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>3</strong></td>
                                                 </tr>
                                                 <tr data-score="2">
                                                     <td className="col-prov">Nam Định</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>2</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">TP HCM</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Yên Bái</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Đồng Nai</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Quảng Ngãi</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Thanh Hóa</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Nghệ An</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Phú Thọ</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Quảng Ninh</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Hải Phòng</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                                 <tr data-score="1">
                                                     <td className="col-prov">Quảng Trị</td>
                                                     <td className="col-today number-up">-</td>
                                                     <td className="col-all"><strong>1</strong></td>
                                                 </tr>
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                                 <div className="ss-scroll ss-hidden"></div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="box-category box-cate-featured box-cate-featured-v2 has-border">
                 <hgroup className="width_common title-box-category kinhdoanh">
                     <h2 className="parent-cate"><a href="/" className="inner-title" title="Kinh doanh">Kinh
                             doanh</a></h2><span className="sub-cate"><a href="//quoc-te" title="Quốc tế">Quốc
                             tế</a></span><span className="sub-cate"><a href="//doanh-nghiep" title="Doanh nghiệp">Doanh
                             nghiệp</a></span><span className="sub-cate"><a href="//chung-khoan"
                             title="Chứng khoán">Chứng khoán</a></span><span className="sub-cate"><a
                             href="//bat-dong-san" title="Bất động sản">Bất động
                             sản</a></span><span className="sub-cate"><a href="https://startup./"
                             title="Startup">Startup</a></span>
                     <span className="sub-cate"><a href="//bao-hiem" title="Bảo hiểm">Bảo hiểm</a></span>
                     <span className="sub-cate"><a
                             href="https://vhome.?utm_source=VnExpress_Desktop&amp;utm_medium=Home_Menu&amp;utm_campaign=HaVien_KinhDoanh"
                             title="Vhome">Vhome</a></span>
                 </hgroup>
                 <div className="width_common content-box-category flexbox">
                     <article className="item-news full-thumb flexbox ">
                         <div className="thumb-art">
                             <a href="gia-ca-leo-thang-bua-vay-nguoi-my-4275588.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Giá cả leo thang bủa vây người Mỹ">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228" alt="Giá cả leo thang bủa vây người Mỹ"
                                         className="lazy lazied"
                                         src="https://i1-kinhdoanh.vnecdn.net/2021/05/10/im335914-1620619489-8938-1620619825.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=GV6AEtTSVhvT4V0RqUb6eQ"
                                         data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/10/im335914-1620619489-8938-1620619825.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=GV6AEtTSVhvT4V0RqUb6eQ">
                                     </img> </picture>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a href="gia-ca-leo-thang-bua-vay-nguoi-my-4275588.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Giá cả leo thang bủa vây người Mỹ">Giá cả leo thang
                                     bủa
                                     vây người Mỹ</a></h3>
                             <p className="description">
                                 <a href="gia-ca-leo-thang-bua-vay-nguoi-my-4275588.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Giá cả leo thang bủa vây người Mỹ">
                                     Sau nhiều năm quen với lạm phát thấp, người Mỹ đang bắt đầu phải trả tiền nhiều
                                     hơn cho hàng hóa và dịch vụ khi nền kinh tế phục hồi.
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt" href="gia-ca-leo-thang-bua-vay-nguoi-my-4275588.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275588-1">33</span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                     <article className="item-news article-sub-right">
                         <h3 className="title-news"><a href="thoi-trang-viet-lep-ve-truoc-dai-gia-ngoai-4275612.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0">Thời
                                 trang Việt lép vế trước đại gia ngoại</a></h3>
                         <p className="description">
                             <a href="thoi-trang-viet-lep-ve-truoc-dai-gia-ngoai-4275612.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0"
                                 title="Thời trang Việt lép vế trước đại gia ngoại">
                                 Sự “đổ bộ” của nhiều thương hiệu nước ngoài đã đẩy ngành thời trang nội vốn chỉ có
                                 thị
                                 phần nhỏ giờ càng thu hẹp hơn.
                             </a>
                             <span className="meta-news">
                                 <a className="count_cmt"
                                     href="thoi-trang-viet-lep-ve-truoc-dai-gia-ngoai-4275612.html">
                                     <svg className="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275612-1">96</span>
                                 </a>
                             </span>
                         </p>
                     </article>
                     <div className="sub-news-cate flexbox">
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="vasep-kien-nghi-tp-hcm-hoan-thu-phi-ha-tang-cang-bien-4276356.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="VASEP kiến nghị TP HCM hoãn thu phí hạ tầng cảng biển">VASEP kiến nghị TP
                                     HCM hoãn thu phí hạ tầng cảng
                                     biển</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="vasep-kien-nghi-tp-hcm-hoan-thu-phi-ha-tang-cang-bien-4276356.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276356-1"></span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a href="vietravel-tinh-ban-co-phan-hang-bay-4276337.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="Vietravel tính bán cổ phần hãng bay">Vietravel tính
                                     bán
                                     cổ phần hãng bay</a><span className="meta-news">
                                     <a className="count_cmt" href="vietravel-tinh-ban-co-phan-hang-bay-4276337.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276337-1"></span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="ap-luc-ban-bluechip-khien-vn-index-giam-diem-4276433.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KinhDoanh&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="Áp lực bán bluechip khiến VN-Index giảm điểm">Áp lực
                                     bán
                                     bluechip khiến VN-Index giảm điểm</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="ap-luc-ban-bluechip-khien-vn-index-giam-diem-4276433.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276433-1"></span>
                                     </a>
                                 </span></h3>
                         </article>
                     </div>
                 </div>
             </div>
             {/*
             <!-- giá vàng --> */}
             <div className="box-category box-tygia-vietllot has-border">
                 <div className="left box_left">
                     <div className="box_giavang">
                         <a href="/chu-de/gia-vang-hom-nay-1403" title="Giá vàng" className="link-all-table"></a>
                         <table border="0" cellpadding="0" cellspacing="0" width="100%">
                             <tbody>
                                 <tr>
                                     <td>
                                         <a href="/chu-de/gia-vang-hom-nay-1403" title="Giá vàng"><strong>Giá
                                                 vàng</strong></a>
                                     </td>
                                     <td>Mua</td>
                                     <td>Bán</td>
                                 </tr>
                                 <tr>
                                     <td>Vàng SJC (triệu đồng/lượng)</td>
                                     <td>55,88</td>
                                     <td>56,23</td>
                                 </tr>
                                 <tr>
                                     <td>Thế giới (USD/ounce)</td>
                                     <td>1.824</td>
                                     <td>1.824,5</td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                 </div>
                 <div className="right box_right">
                     <div className="box_giavang">
                         <a href="/chu-de/lai-suat-ngan-hang-3210" title="Lãi suất tiết kiệm"
                             className="link-all-table"></a>
                         <table border="0" cellpadding="0" cellspacing="0" width="100%">
                             <tbody>
                                 <tr>
                                     <td><a href="/chu-de/lai-suat-ngan-hang-3210"
                                             title="Lãi suất tiết kiệm"><strong>Lãi suất tiết
                                                 kiệm</strong></a></td>
                                     <td>1</td>
                                     <td>3</td>
                                     <td>6</td>
                                     <td>9</td>
                                     <td>12</td>
                                 </tr>
                                 <tr>
                                     <td>Online (%/năm)</td>
                                     <td>4</td>
                                     <td>4</td>
                                     <td>6,45</td>
                                     <td>6,6</td>
                                     <td>6,8</td>
                                 </tr>
                                 <tr>
                                     <td>Tại quầy (%/năm)</td>
                                     <td>4</td>
                                     <td>4</td>
                                     <td>6,25</td>
                                     <td>6,35</td>
                                     <td>6,8</td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                 </div>
             </div>
             <div className="box-category box-cate-featured box-cate-featured-v2 has-border">
                 <hgroup className="width_common title-box-category thethao">
                     <h2 className="parent-cate"><a href="/" className="inner-title" title="Thể thao">Thể thao</a>
                     </h2><span className="sub-cate"><a href="/bong-da" title="Bóng đá">Bóng đá</a></span><span
                         className="sub-cate"><a href="//du-lieu-bong-da" title="Lịch thi đấu">Lịch thi
                             đấu</a></span><span className="sub-cate"><a href="//tennis"
                             title="Tennis">Tennis</a></span><span className="sub-cate"><a href="https://vm./"
                             title="VM 2021">VM 2021</a></span><span className="sub-cate"><a href="https://vrace./"
                             title="V-Race">V-Race</a></span>
                 </hgroup>
                 <div className="width_common content-box-category flexbox">
                     <article className="item-news full-thumb flexbox ">
                         <div className="thumb-art">
                             <a href="hlv-park-hang-seo-chi-day-rieng-cho-cong-phuong-4275929.html"
                                 className="thumb thumb-5x3" title="HLV Park Hang-seo chỉ dạy riêng cho Công Phượng">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="HLV Park Hang-seo chỉ dạy riêng cho Công Phượng" className="lazy lazied"
                                         src="https://i1-vnexpress.vnecdn.net/2021/05/10/LVT-7448-1620646929.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=N4Dcrapk5zaHMiTzf6q-aw">
                                     </img></picture>
                                 <span className="icon_thumb_videophoto"><svg className="ic ic-camera">
                                         <use href="#Camera"></use>
                                     </svg></span>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a
                                     href="hlv-park-hang-seo-chi-day-rieng-cho-cong-phuong-4275929.html"
                                     title="HLV Park Hang-seo chỉ dạy riêng cho Công Phượng">HLV
                                     Park Hang-seo chỉ dạy riêng cho Công Phượng</a></h3>
                             <p className="description">
                                 <a href="hlv-park-hang-seo-chi-day-rieng-cho-cong-phuong-4275929.html"
                                     title="HLV Park Hang-seo chỉ dạy riêng cho Công Phượng">
                                     <span className="location-stamp">Hà Nội</span>Thầy Park tranh thủ lúc giải lao
                                     trong
                                     buổi tập chiều 10/5 để hướng dẫn tiền đạo Nguyễn Công Phượng cách che chắn bóng,
                                     qua người ...
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt"
                                         href="hlv-park-hang-seo-chi-day-rieng-cho-cong-phuong-4275929.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275929-3">4</span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                     <article className="item-news article-sub-right">
                         <h3 className="title-news"><a
                                 href="malaysia-goi-cuu-tuyen-thu-chau-au-dau-viet-nam-4275853.html">Malaysia
                                 gọi cựu tuyển thủ châu Âu đấu Việt Nam</a></h3>
                         <p className="description">
                             <a href="malaysia-goi-cuu-tuyen-thu-chau-au-dau-viet-nam-4275853.html"
                                 title="Malaysia gọi cựu tuyển thủ châu Âu đấu Việt Nam">
                                 Đội tuyển Malaysia hôm nay 10/5 công bố danh sách 25 cầu thủ sẽ đến UAE đấu ba trận
                                 còn lại ở vòng loại ...
                             </a>
                             <span className="meta-news">
                                 <a className="count_cmt"
                                     href="malaysia-goi-cuu-tuyen-thu-chau-au-dau-viet-nam-4275853.html">
                                     <svg className="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275853-1">12</span>
                                 </a>
                             </span>
                         </p>
                     </article>
                     <div className="sub-news-cate flexbox">
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="ronaldo-nhan-diem-thap-nhat-tran-thua-tham-milan-4275864.html"
                                     title="Ronaldo nhận điểm thấp nhất trận thua thảm Milan">Ronaldo nhận điểm thấp
                                     nhất trận thua thảm Milan</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="ronaldo-nhan-diem-thap-nhat-tran-thua-tham-milan-4275864.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275864-1">157</span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="truyen-thong-phap-nen-dung-ca-tung-neymar-la-thien-tai-4275831.html"
                                     title="Truyền thông Pháp: 'Nên dừng ca tụng Neymar là thiên tài'">Truyền thông
                                     Pháp: 'Nên dừng ca tụng Neymar là thiên
                                     tài'</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="truyen-thong-phap-nen-dung-ca-tung-neymar-la-thien-tai-4275831.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275831-1">45</span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a href="barca-can-lam-gi-de-cuu-lo-la-masia-4271067.html"
                                     title="Barca cần làm gì để cứu lò La Masia">Barca cần làm gì
                                     để cứu lò La Masia</a><span className="meta-news">
                                     <a className="count_cmt" href="barca-can-lam-gi-de-cuu-lo-la-masia-4271067.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4271067-1">72</span>
                                     </a>
                                 </span></h3>
                         </article>
                     </div>
                 </div>
             </div>
             <div className="box-category box-cate-featured box-cate-featured-v2 has-border">
                 <hgroup className="width_common title-box-category giaitri">
                     <h2 className="parent-cate"><a href="/giai-tri" className="inner-title" title="Giải trí">Giải
                             trí</a>
                     </h2><span className="sub-cate"><a href="/giai-tri/gioi-sao" title="Giới sao">Giới
                             sao</a></span><span className="sub-cate"><a href="/giai-tri/phim"
                             title="Phim">Phim</a></span><span className="sub-cate"><a href="/giai-tri/nhac"
                             title="Nhạc">Nhạc</a></span><span className="sub-cate"><a href="/giai-tri/thoi-trang"
                             title="Thời trang">Thời trang</a></span><span className="sub-cate"><a href="/giai-tri/sach"
                             title="Sách">Sách</a></span>
                 </hgroup>
                 <div className="width_common content-box-category flexbox">
                     <article className="item-news full-thumb flexbox ">
                         <div className="thumb-art">
                             <a href="phong-cach-nang-tho-moi-cua-truong-nghe-muu-4275700.html"
                                 className="thumb thumb-5x3" title="Phong cách nàng thơ mới của Trương Nghệ Mưu">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="Phong cách nàng thơ mới của Trương Nghệ Mưu" className="lazy lazied"
                                         src="https://i1-giaitri.vnecdn.net/2021/05/10/top-luu-hao-ton-1.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=2oWMTvZZln0Y5gYQyHg2eA">
                                     </img> </picture>
                                 <span className="icon_thumb_videophoto"><svg className="ic ic-camera">
                                         <use href="#Camera"></use>
                                     </svg></span>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a
                                     href="phong-cach-nang-tho-moi-cua-truong-nghe-muu-4275700.html"
                                     title="Phong cách nàng thơ mới của Trương Nghệ Mưu">Phong cách
                                     nàng thơ mới của Trương Nghệ Mưu</a></h3>
                             <p className="description">
                                 <a href="phong-cach-nang-tho-moi-cua-truong-nghe-muu-4275700.html"
                                     title="Phong cách nàng thơ mới của Trương Nghệ Mưu">
                                     Lưu Hạo Tồn, diễn viên đóng chính các phim của Trương Nghệ Mưu, chuộng váy xếp
                                     tầng, áo sơ mi.
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt"
                                         href="phong-cach-nang-tho-moi-cua-truong-nghe-muu-4275700.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275700-3"></span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                     <article className="item-news article-sub-right">
                         <h3 className="title-news"><a href="soan-gia-ha-nam-quang-qua-doi-4275941.html">Soạn giả Hà
                                 Nam Quang qua đời</a></h3>
                         <p className="description">
                             <a href="soan-gia-ha-nam-quang-qua-doi-4275941.html" title="Soạn giả Hà Nam Quang qua đời">
                                 <span className="location-stamp">An Giang</span>Hà Nam Quang - nữ soạn giả của hơn 500
                                 bài vọng cổ - qua đời vì bệnh tiểu đường, thọ 67 tuổi, chiều 10/5.
                             </a>
                             <span className="meta-news">
                                 <a className="count_cmt" href="soan-gia-ha-nam-quang-qua-doi-4275941.html">
                                     <svg className="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275941-1"></span>
                                 </a>
                             </span>
                         </p>
                     </article>
                     <div className="sub-news-cate flexbox">
                         <article className="item-news">
                             <h3 className="title-news"><a href="vuon-hoa-cua-phuong-hong-thuy-4275549.html"
                                     title="Vườn hoa của Phương Hồng Thủy">Vườn hoa của Phương Hồng
                                     Thủy</a><span className="meta-news">
                                     <a className="count_cmt" href="vuon-hoa-cua-phuong-hong-thuy-4275549.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275549-1"></span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="khanh-van-khoe-duong-cong-trong-vay-hoa-sung-4275767.html"
                                     title="Khánh Vân khoe đường cong trong váy hoa súng">Khánh Vân
                                     khoe đường cong trong váy hoa súng</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="khanh-van-khoe-duong-cong-trong-vay-hoa-sung-4275767.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275767-1">13</span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a href="chong-cu-chung-han-dong-tram-cam-4275742.html"
                                     title="Chồng cũ Chung Hân Đồng trầm cảm">Chồng cũ Chung Hân
                                     Đồng trầm cảm</a><span className="meta-news">
                                     <a className="count_cmt" href="chong-cu-chung-han-dong-tram-cam-4275742.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275742-1">10</span>
                                     </a>
                                 </span></h3>
                         </article>
                     </div>
                 </div>
             </div>
             <div className="box-category box-cate-featured box-cate-featured-v2 has-border">
                 <hgroup className="width_common title-box-category suckhoe">
                     <h2 className="parent-cate"><a href="/" className="inner-title" title="Sức khỏe">Sức khỏe</a>
                     </h2><span className="sub-cate"><a href="//tin-tuc" title="Tin tức">Tin tức</a></span><span
                         className="sub-cate"><a href="//dinh-duong" title="Dinh dưỡng">Dinh
                             dưỡng</a></span><span className="sub-cate"><a href="//khoe-dep" title="Khỏe đẹp">Khỏe
                             đẹp</a></span><span className="sub-cate"><a href="//cac-benh" title="Các bệnh">Các
                             bệnh</a></span><span className="sub-cate"><a href="//ung-thu" title="Ung thư">Ung
                             thư</a></span><span className="sub-cate"><a href="//vaccine"
                             title="Vaccine">Vaccine</a></span>
                 </hgroup>
                 <div className="width_common content-box-category flexbox">
                     <article className="item-news full-thumb flexbox ">
                         <div className="thumb-art">
                             <a href="o-dich-tai-benh-vien-k-co-ban-duoc-kiem-soat-4275731.html"
                                 className="thumb thumb-5x3" title="'Ổ dịch tại Bệnh viện K cơ bản được kiểm soát'">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="'Ổ dịch tại Bệnh viện K cơ bản được kiểm soát'" className="lazy lazied"
                                         src="https://i1-suckhoe.vnecdn.net/2021/05/10/12-jpg-1620644077-1620644090-3512-1620644107.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=vBG3EdsA-225REO8Zn9UgQ">
                                     </img> </picture>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a
                                     href="o-dich-tai-benh-vien-k-co-ban-duoc-kiem-soat-4275731.html"
                                     title="'Ổ dịch tại Bệnh viện K cơ bản được kiểm soát'">'Ổ dịch
                                     tại Bệnh viện K cơ bản được kiểm soát'</a></h3>
                             <p className="description">
                                 <a href="o-dich-tai-benh-vien-k-co-ban-duoc-kiem-soat-4275731.html"
                                     title="'Ổ dịch tại Bệnh viện K cơ bản được kiểm soát'">
                                     <span className="location-stamp">Hà Nội</span>Các ca nghi nhiễm tại Bệnh viện K
                                     được
                                     cách ly ngay, kiểm soát yếu tố nguy cơ, toàn bộ người cách ly tại viện được lấy
                                     mẫu xét ...
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt"
                                         href="o-dich-tai-benh-vien-k-co-ban-duoc-kiem-soat-4275731.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275731-1"></span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                     <article className="item-news article-sub-right">
                         <h3 className="title-news"><a
                                 href="chu-tich-ubnd-tp-hcm-covid-19-la-mot-cuoc-chien-thuc-su-4275613.html">Chủ
                                 tịch UBND TP HCM: 'Covid-19 là một cuộc chiến thực sự'</a>
                         </h3>
                         <p className="description">
                             <a href="chu-tich-ubnd-tp-hcm-covid-19-la-mot-cuoc-chien-thuc-su-4275613.html"
                                 title="Chủ tịch UBND TP HCM: 'Covid-19 là một cuộc chiến thực sự'">
                                 Chủ tịch UBND TP HCM yêu cầu tất cả các đơn vị phải dồn toàn lực chống dịch, "bên
                                 cạnh phòng thủ thì ...
                             </a>
                             <span className="meta-news">
                                 <a className="count_cmt"
                                     href="chu-tich-ubnd-tp-hcm-covid-19-la-mot-cuoc-chien-thuc-su-4275613.html">
                                     <svg className="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275613-1"></span>
                                 </a>
                             </span>
                         </p>
                     </article>
                     <div className="sub-news-cate flexbox">
                         <article className="item-news">
                             <h3 className="title-news"><a href="" title="Biến thể Ấn Độ né tránh hệ miễn dịch">Biến thể
                                     Ấn Độ né
                                     tránh hệ miễn dịch</a><span className="meta-news">
                                     <a className="count_cmt" href="">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275754-1"></span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a href="" title="Bắc Ninh thêm 13 ca nghi Covid-19">Bắc Ninh
                                     thêm 13 ca
                                     nghi Covid-19</a><span className="meta-news">
                                     <a className="count_cmt" href="">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275675-1">7</span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="450-nguoi-tp-hcm-tiep-xuc-ca-tai-duong-tinh-4275618.html"
                                     title="450 người TP HCM tiếp xúc ca tái dương tính">450 người
                                     TP HCM tiếp xúc ca tái dương tính</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="450-nguoi-tp-hcm-tiep-xuc-ca-tai-duong-tinh-4275618.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275618-1">5</span>
                                     </a>
                                 </span></h3>
                         </article>
                     </div>
                 </div>
             </div>
             <div className="box-category box-cate-featured box-cate-featured-v2 has-border">
                 <hgroup className="width_common title-box-category doisong">
                     <h2 className="parent-cate"><a href="/"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Title-DoiSong&amp;vn_term=Desktop"
                             className="inner-title" title="Đời sống">Đời sống</a></h2><span className="sub-cate"><a
                             href="//bai-hoc-song"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Title-BaiHocSong&amp;vn_term=Desktop"
                             title="Bài học sống">Bài học sống</a></span><span className="sub-cate"><a href="//to-am"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Title-ToAm&amp;vn_term=Desktop"
                             title="Tổ ấm">Tổ ấm</a></span><span className="sub-cate"><a href="//nha"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Title-Nha&amp;vn_term=Desktop"
                             title="Nhà">Nhà</a></span><span className="sub-cate"><a href="//tieu-dung"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Title-TieuDung&amp;vn_term=Desktop"
                             title="Tiêu dùng">Tiêu dùng</a></span>
                 </hgroup>
                 <div className="width_common content-box-category flexbox">
                     <article className="item-news full-thumb flexbox ">
                         <div className="thumb-art">
                             <a href="salat-xoai-kieu-thai-4270272.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Salat xoài kiểu Thái">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228" alt="Salat xoài kiểu Thái"
                                         className="lazy lazied"
                                         src="https://i1-giadinh.vnecdn.net/2021/04/29/Untitled-1619667392-6755-1619668987.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=NnlJROPoPIJ_R56_E8t6WA"
                                         data-src="https://i1-giadinh.vnecdn.net/2021/04/29/Untitled-1619667392-6755-1619668987.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=NnlJROPoPIJ_R56_E8t6WA">
                                     </img> </picture>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a href="salat-xoai-kieu-thai-4270272.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Salat xoài kiểu Thái">Salat xoài kiểu Thái</a></h3>
                             <p className="description">
                                 <a href="salat-xoai-kieu-thai-4270272.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Salat xoài kiểu Thái">
                                     Đang mùa xoài, bạn có thể dễ dàng trổ tài món salat hấp dẫn, lạ miệng dành cho
                                     bạn bè, gia đình.
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt" href="salat-xoai-kieu-thai-4270272.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4270272-1"></span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                     <article className="item-news article-sub-right">
                         <h3 className="title-news"><a href="nha-chan-de-bo-trong-tang-tret-de-lay-view-4275712.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0">Nhà
                                 chân đê bỏ trống tầng trệt để lấy 'view'</a></h3>
                         <p className="description">
                             <a href="nha-chan-de-bo-trong-tang-tret-de-lay-view-4275712.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0"
                                 title="Nhà chân đê bỏ trống tầng trệt để lấy 'view'">
                                 <span className="location-stamp">Hà Nội</span>Để xóa bỏ tình trạng bí bách của những
                                 ngôi nhà chân đê, kiến trúc sư quyết định "bỏ trống" tầng trệt, chuyển toàn bộ ...
                             </a>
                             <span className="meta-news">
                                 <a className="count_cmt"
                                     href="nha-chan-de-bo-trong-tang-tret-de-lay-view-4275712.html">
                                     <svg className="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275712-1">4</span>
                                 </a>
                             </span>
                         </p>
                     </article>
                     <div className="sub-news-cate flexbox">
                         <article className="item-news">
                             <h3 className="title-news"><a href="10-dieu-nen-lam-de-khong-do-vo-hon-nhan-4275531.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="10 điều nên làm để không đổ vỡ hôn nhân">10 điều nên
                                     làm để không đổ vỡ hôn nhân</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="10-dieu-nen-lam-de-khong-do-vo-hon-nhan-4275531.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275531-3">8</span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="nhung-ngay-cuoi-cua-chu-lon-noi-tieng-nhat-trung-quoc-4276040.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="Những ngày cuối của chú lợn nổi tiếng nhất Trung Quốc">Những ngày cuối
                                     của chú lợn nổi tiếng nhất Trung
                                     Quốc</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="nhung-ngay-cuoi-cua-chu-lon-noi-tieng-nhat-trung-quoc-4276040.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276040-1">5</span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a href="ly-hon-o-tuoi-xe-chieu-4273609.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DoiSong&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="Ly hôn ở tuổi xế chiều">Ly hôn ở tuổi xế
                                     chiều</a><span className="meta-news">
                                     <a className="count_cmt" href="ly-hon-o-tuoi-xe-chieu-4273609.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4273609-1">58</span>
                                     </a>
                                 </span></h3>
                         </article>
                     </div>
                 </div>
             </div>
             <div className="box-category box-cate-featured box-cate-featured-v2 has-border">
                 <hgroup className="width_common title-box-category khoahoc">
                     <h2 className="parent-cate"><a href="/"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Title-KhoaHoc&amp;vn_term=Desktop"
                             className="inner-title" title="Khoa học">Khoa học</a></h2><span className="sub-cate"><a
                             href="//tin-tuc"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Title-TinTuc&amp;vn_term=Desktop"
                             title="Tin tức">Tin tức</a></span><span className="sub-cate"><a href="//phat-minh"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Title-PhatMinh&amp;vn_term=Desktop"
                             title="Phát minh">Phát minh</a></span><span className="sub-cate"><a href="//ung-dung"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Title-UngDung&amp;vn_term=Desktop"
                             title="Ứng dụng">Ứng dụng</a></span><span className="sub-cate"><a href="//-tu-nhien"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Title-TheGioiTuNhien&amp;vn_term=Desktop"
                             title="Thế giới tự nhiên">Thế giới tự nhiên</a></span><span className="sub-cate"><a
                             href="//thuong-thuc"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Title-ThuongThuc&amp;vn_term=Desktop"
                             title="Thường thức">Thường thức</a></span><span className="sub-cate"><a
                             href="https://ai4vn./"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Title-Ai4vn&amp;vn_term=Desktop"
                             title="AI4VN">AI4VN</a></span>
                 </hgroup>
                 <div className="width_common content-box-category flexbox">
                     <article className="item-news full-thumb flexbox ">
                         <div className="thumb-art">
                             <a href="tai-phat-hien-san-ho-tuong-da-tuyet-chung-273-trieu-nam-4276024.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3"
                                 title="Tái phát hiện san hô tưởng đã tuyệt chủng 273 triệu năm">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="Tái phát hiện san hô tưởng đã tuyệt chủng 273 triệu năm"
                                         className="lazy lazied"
                                         src="https://i1-vnexpress.vnecdn.net/2021/05/11/Huebienset-1620724887-5781-1620725409.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=jdLAwKEgtGL_3tA5hYeTlA"
                                         data-src="https://i1-vnexpress.vnecdn.net/2021/05/11/Huebienset-1620724887-5781-1620725409.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=jdLAwKEgtGL_3tA5hYeTlA" />
                                 </picture>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a
                                     href="tai-phat-hien-san-ho-tuong-da-tuyet-chung-273-trieu-nam-4276024.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Tái phát hiện san hô tưởng đã tuyệt chủng 273 triệu năm">Tái phát hiện
                                     san hô tưởng đã tuyệt chủng 273 triệu năm</a>
                             </h3>
                             <p className="description">
                                 <a href="tai-phat-hien-san-ho-tuong-da-tuyet-chung-273-trieu-nam-4276024.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Tái phát hiện san hô tưởng đã tuyệt chủng 273 triệu năm">
                                     Các nhà khoa học tìm thấy hai loài san hô hiếm cộng sinh với huệ biển ở độ sâu
                                     hơn 100 m dưới vùng biển Nhật Bản.
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt"
                                         href="tai-phat-hien-san-ho-tuong-da-tuyet-chung-273-trieu-nam-4276024.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276024-1"></span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                     <article className="item-news article-sub-right">
                         <h3 className="title-news"><a href="100-trieu-buom-buom-dong-loat-chui-khoi-ken-4276059.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0">100
                                 triệu bươm bướm đồng loạt chui khỏi kén</a></h3>
                         <p className="description">
                             <a href="100-trieu-buom-buom-dong-loat-chui-khoi-ken-4276059.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0"
                                 title="100 triệu bươm bướm đồng loạt chui khỏi kén">
                                 <span className="location-stamp">Trung Quốc</span>Vào tháng 5 đến tháng 6 hàng năm,
                                 những con bướm đồng loạt chui ra khỏi kén tạo nên cảnh tượng rất ngoạn mục ở tỉnh
                                 ...
                             </a>
                             <span className="meta-news">
                                 <a className="count_cmt"
                                     href="100-trieu-buom-buom-dong-loat-chui-khoi-ken-4276059.html">
                                     <svg className="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276059-1"></span>
                                 </a>
                             </span>
                         </p>
                     </article>
                     <div className="sub-news-cate flexbox">
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="y-tuong-dung-nha-choc-troi-bang-cay-bien-doi-gene-4276063.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="Ý tưởng dựng nhà chọc trời bằng cây biến đổi gene">Ý
                                     tưởng dựng nhà chọc trời bằng cây biến đổi gene</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="y-tuong-dung-nha-choc-troi-bang-cay-bien-doi-gene-4276063.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276063-1"></span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="tau-nasa-bay-tu-tieu-hanh-tinh-ve-trai-dat-4276017.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="Tàu NASA bay từ tiểu hành tinh về Trái Đất">Tàu NASA
                                     bay từ tiểu hành tinh về Trái Đất</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="tau-nasa-bay-tu-tieu-hanh-tinh-ve-trai-dat-4276017.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276017-1">5</span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a href="cau-lua-ruc-sang-tren-bau-troi-4276055.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-KhoaHoc&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="Cầu lửa rực sáng trên bầu trời">Cầu lửa rực sáng trên
                                     bầu trời</a><span className="meta-news">
                                     <a className="count_cmt" href="cau-lua-ruc-sang-tren-bau-troi-4276055.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276055-1"></span>
                                     </a>
                                 </span></h3>
                         </article>
                     </div>
                 </div>
             </div>
             <div className="box-category box-cate-featured box-cate-featured-v2 box-last">
                 <hgroup className="width_common title-box-category giaoduc">
                     <h2 className="parent-cate"><a href="/"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Title-GiaoDuc&amp;vn_term=Desktop"
                             className="inner-title" title="Giáo dục">Giáo dục</a></h2><span className="sub-cate"><a
                             href="//tuyen-sinh"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Title-TuyenSinh&amp;vn_term=Desktop"
                             title="Tuyển sinh">Tuyển sinh</a></span><span className="sub-cate"><a
                             href="https://diemthi."
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Title-DiemThi&amp;vn_term=Desktop"
                             title="Điểm thi">Điểm thi</a></span><span className="sub-cate"><a
                             href="https://diemthi./diem-chuan-tuyen-sinh-dai-hoc"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Title-TraCuuDaiHoc&amp;vn_term=Desktop"
                             title="Tra cứu đại học">Tra cứu đại học</a></span><span className="sub-cate"><a
                             href="//du-hoc"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Title-DuHoc&amp;vn_term=Desktop"
                             title="Du học">Du học</a></span><span className="sub-cate"><a href="//hoc-tieng-anh"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Title-HocTiengAnh&amp;vn_term=Desktop"
                             title="Học tiếng Anh">Học tiếng Anh</a></span><span className="sub-cate"><a
                             href="https://kidlab./"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Title-Kidlab&amp;vn_term=Desktop"
                             title="Kid-lab">Kid-lab</a></span><span className="sub-cate"><a href="//-40"
                             data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Title-GiaoDuc40&amp;vn_term=Desktop"
                             title="Giáo dục 4.0">Giáo dục 4.0</a></span>
                 </hgroup>
                 <div className="width_common content-box-category flexbox">
                     <article className="item-news full-thumb flexbox ">
                         <div className="thumb-art">
                             <a href="thu-gui-em-be-co-me-nhiem-covid-19-gianh-giai-nhat-viet-thu-upu-4276544.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3"
                                 title="Thư gửi em bé có mẹ nhiễm Covid-19 giành giải nhất Viết thư UPU">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="Thư gửi em bé có mẹ nhiễm Covid-19 giành giải nhất Viết thư UPU"
                                         className="lazy lazied"
                                         src="https://i1-vnexpress.vnecdn.net/2021/05/11/dao-anh-thu-giai-nhat-jpeg-162-2232-3813-1620739501.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=XIEcAkZLCl2M4YaH0Wf6kQ"
                                         data-src="https://i1-vnexpress.vnecdn.net/2021/05/11/dao-anh-thu-giai-nhat-jpeg-162-2232-3813-1620739501.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=XIEcAkZLCl2M4YaH0Wf6kQ" />
                                 </picture>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a
                                     href="thu-gui-em-be-co-me-nhiem-covid-19-gianh-giai-nhat-viet-thu-upu-4276544.html"
                                     title="Thư gửi em bé có mẹ nhiễm Covid-19 giành giải nhất Viết thư UPU">Thư gửi
                                     em bé có mẹ nhiễm Covid-19 giành giải nhất Viết thư
                                     UPU</a></h3>
                             <p className="description">
                                 <a href="thu-gui-em-be-co-me-nhiem-covid-19-gianh-giai-nhat-viet-thu-upu-4276544.html"
                                     title="Thư gửi em bé có mẹ nhiễm Covid-19 giành giải nhất Viết thư UPU">
                                     <span className="location-stamp">Hà Nội</span>Bức thư gửi em bé sinh ra trong bệnh
                                     viện, nơi người mẹ đang điều trị Covid-19 của Đào Anh Thư giành ...
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt"
                                         href="thu-gui-em-be-co-me-nhiem-covid-19-gianh-giai-nhat-viet-thu-upu-4276544.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276544-1"></span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                     <article className="item-news article-sub-right">
                         <h3 className="title-news"><a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0">Hơn
                                 một triệu thí sinh đăng ký dự thi tốt nghiệp THPT</a></h3>
                         <p className="description">
                             <a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0"
                                 title="Hơn một triệu thí sinh đăng ký dự thi tốt nghiệp THPT">
                                 Đến 17h ngày 11/5, cả nước có hơn một triệu thí sinh đăng ký dự thi tốt nghiệp THPT,
                                 trong đó gần ...
                             </a>
                             <span className="meta-news">
                                 <a className="count_cmt" href="">
                                     <svg className="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276484-1"></span>
                                 </a>
                             </span>
                         </p>
                     </article>
                     <div className="sub-news-cate flexbox">
                         <article className="item-news">
                             <h3 className="title-news"><a href="rao-riet-on-thi-cho-hoc-sinh-cuoi-cap-4276297.html"
                                     title="Ráo riết ôn thi cho học sinh cuối cấp">Ráo riết ôn thi
                                     cho học sinh cuối cấp</a><span className="meta-news">
                                     <a className="count_cmt" href="rao-riet-on-thi-cho-hoc-sinh-cuoi-cap-4276297.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276297-1">1</span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="ca-lop-di-cach-ly-trong-dem-vi-ban-hoc-nhiem-ncov-4276232.html"
                                     title="Cả lớp đi cách ly trong đêm vì bạn học nhiễm nCoV">Cả
                                     lớp đi cách ly trong đêm vì bạn học nhiễm nCoV</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="ca-lop-di-cach-ly-trong-dem-vi-ban-hoc-nhiem-ncov-4276232.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276232-1">40</span>
                                     </a>
                                 </span></h3>
                         </article>
                         <article className="item-news">
                             <h3 className="title-news"><a
                                     href="co-gai-tu-hoc-tieng-anh-gianh-ba-hoc-bong-toan-phan-4275877.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-GiaoDuc&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=0"
                                     title="Cô gái tự học tiếng Anh giành ba học bổng toàn phần">Cô gái tự học tiếng
                                     Anh giành ba học bổng toàn phần</a><span className="meta-news">
                                     <a className="count_cmt"
                                         href="co-gai-tu-hoc-tieng-anh-gianh-ba-hoc-bong-toan-phan-4275877.html">
                                         <svg className="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4275877-1">17</span>
                                     </a>
                                 </span></h3>
                         </article>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </section>

 <section className="section section_topic mt20">
     <div className="container animated animatedFadeInUp fadeInUp">
         <div className="width_common box-slide-topic">
             <span className="txt-topic"><svg className="ic ic-trend">
                     <use href="#Trend">
                         <svg id="Trend" viewBox="0 0 32 32">
                             <path
                                 d="M24 6v3.2h2.56l-8.96 8.96-6.4-6.4-11.2 11.2 2.24 2.24 8.96-8.96 6.4 6.4 11.2-11.2v2.56h3.2v-8h-8z">
                             </path>
                         </svg>
                     </use>
                 </svg>Chủ đề</span>
             {/*
             <!-- Add Arrows --> */}
             <div className="swiper-button-box swiper-button-box-next swiper-button-next-topic">
                 <svg className="ic ic-arrow-right">
                     <use href="#Arrow-Right-1"></use>
                 </svg>
             </div>
             <div className="swiper-button-box swiper-button-box-prev swiper-button-prev-topic">
                 <svg className="ic ic-arrow-left">
                     <use href="#Arrow-Left-1">
                     </use>
                 </svg>
             </div>
             <div className="swiper-container" id="js_slider_topic">
                 <div className="swiper-wrapper check-width-chirld">
                     <article className="swiper-slide item-news">
                         <h3 className="title-news"><a href="/chu-de/covid-19-an-do-3343"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Topic&amp;vn_medium=Item-1&amp;vn_term=Desktop"
                                 title="Covid-19 nhấn chìm Ấn Độ">Covid-19 nhấn chìm Ấn Độ</a>
                         </h3>
                     </article>
                     <article className="swiper-slide item-news">
                         <h3 className="title-news"><a href="/topic/mat-tien-vi-app-coolcat-25382"
                                 title="Mất tiền vì app Coolcat">Mất tiền vì app Coolcat</a></h3>
                     </article>
                     <article className="swiper-slide item-news">
                         <h3 className="title-news"><a href="/topic/co-nen-rut-bao-hiem-xa-hoi-mot-lan-25378"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Topic&amp;vn_medium=Item-3&amp;vn_term=Desktop"
                                 title="Có nên rút bảo hiểm xã hội một lần?">Có nên rút bảo hiểm
                                 xã
                                 hội một lần?</a></h3>
                     </article>
                 </div>
             </div>
         </div>
     </div>
     <div id="_hottopic" className="lazier hidden"></div>
 </section>
 <section class="section section_container section_video">
     <div class="container animated animatedFadeInUp fadeInUp" id="automation_Video">
         <div class="width_common inner-section-video">
             <hgroup class="width_common title-box-category">
                 <h2 class="parent-cate"><a href="//video." class="inner-title" title="Video">Video</a></h2>
                 <span class="sub-cate"><a href="https://video./" title="Thời sự">Thời sự</a></span>
                 <span class="sub-cate"><a href="https://video./nhip-song" title="Nhịp sống">Nhịp sống</a></span>
                 <span class="sub-cate"><a href="https://video./food" title="Food">Food</a></span>
                 <span class="sub-cate"><a href="https://video./cuoc-song-4-0" title="Cuộc sống 4.0">Cuộc sống
                         4.0</a></span>
                 <span class="sub-cate"><a href="https://video./toi-ke" title="Tôi kể">Tôi kể</a></span>
                 <span class="sub-cate"><a href="https://video./chuyen-nui-rung" title="Chuyện núi rừng">Chuyện núi
                         rừng</a></span>
                 <span class="sub-cate"><a href="https://video./topic/nguy-co-24988" title="Nguy-Cơ">Nguy-Cơ</a></span>
                 <a rel="nofollow" href="https://www.youtube.com/channel/UCVRqZH5QnrnbMWhElPBD-MQ?sub_confirmation=1"
                     class="youtube_subcribe right">Theo dõi trên</a>
             </hgroup>
             <div class="width_common wrapper-box-video">
                 <div class="box-player-video" id="video_list_0">
                     <div class="thumb-video thumb thumb-16x9"><span class="play-icon"><svg class="ic ic-play">
                                 <use href="#play-1">
                                     <svg id="play-1" viewBox="0 0 32 32">
                                         <path
                                             d="M27.2 14.4l-20-14c-1.4-1-3.2 0-3.2 1.6v28c0 1.6 1.8 2.6 3.2 1.6l20-14c1-0.8 1-2.4 0-3.2z">
                                         </path>
                                     </svg>
                                 </use>
                             </svg></span>
                         <video loop="" muted="" playsinline="" preload="auto"
                             poster="https://i1-vnexpress.vnecdn.net/2021/05/11/Dung-1620745927-1816-1620745931.gif?w=750&amp;h=450&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qvK9I6Z5uzDVfAyQ51BTsQ&amp;t=image"
                             class="lazy thumb-gif lazied"
                             src="https://i1-vnexpress.vnecdn.net/2021/05/11/Dung-1620745927-1816-1620745931.gif?w=750&amp;h=450&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=zjJwRmN2nsQiRYY3aaAtKg&amp;t=video">

                         </video></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="Nước ngập gần mét trong nhà sau mưa dông"
                                 href="https://video./tin-tuc//nuoc-ngap-gan-met-trong-nha-sau-mua-dong-4276572.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 Nước ngập gần mét trong nhà sau mưa dông
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt"
                                     href="https://video./tin-tuc//nuoc-ngap-gan-met-trong-nha-sau-mua-dong-4276572.html"
                                     style={{ display: 'none'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4276572-1"></span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-player-video" id="video_list_1" style={{display: 'none'}}>
                     <div class="thumb-video thumb thumb-16x9"></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="300 suất cơm tặng bác sĩ, bệnh nhân viện K" href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 300 suất cơm tặng bác sĩ, bệnh nhân viện K
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt" href="" style={{display: 'inline-block'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4275889-1">14</span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-player-video" id="video_list_2" style={{display: 'none'}}>
                     <div class="thumb-video thumb thumb-16x9"></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="Trắng đêm đưa 3 toa metro về depot"
                                 href="https://video./tin-tuc//trang-dem-dua-3-toa-metro-ve-depot-4276006.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 Trắng đêm đưa 3 toa metro về depot
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt"
                                     href="https://video./tin-tuc//trang-dem-dua-3-toa-metro-ve-depot-4276006.html"
                                     style={{ display: 'none'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4276006-1">5</span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-player-video" id="video_list_3" style={{display: 'none'}}>
                     <div class="thumb-video thumb thumb-16x9"></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="Nổ bom bi để di dời bom Mỹ 340 kg"
                                 href="https://video./tin-tuc//no-bom-bi-de-di-doi-bom-my-340-kg-4275912.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 Nổ bom bi để di dời bom Mỹ 340 kg
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt"
                                     href="https://video./tin-tuc//no-bom-bi-de-di-doi-bom-my-340-kg-4275912.html"
                                     style={{ display: 'none'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4275912-1">6</span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-player-video" id="video_list_4" style={{display: 'none'}}>
                     <div class="thumb-video thumb thumb-16x9"></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="Hà Nội phong tỏa xã hơn 11.000 dân"
                                 href="https://video./tin-tuc//ha-noi-phong-toa-xa-hon-11-000-dan-4275923.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 Hà Nội phong tỏa xã hơn 11.000 dân
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt"
                                     href="https://video./tin-tuc//ha-noi-phong-toa-xa-hon-11-000-dan-4275923.html"
                                     style={{ display: 'none'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4275923-1">2</span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-player-video" id="video_list_5" style={{display: 'none'}}>
                     <div class="thumb-video thumb thumb-16x9"></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="4 giờ bốc dỡ toa tàu metro ở cảng Khánh Hội"
                                 href="https://video./tin-tuc//4-gio-boc-do-toa-tau-metro-o-cang-khanh-hoi-4275823.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 4 giờ bốc dỡ toa tàu metro ở cảng Khánh Hội
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt"
                                     href="https://video./tin-tuc//4-gio-boc-do-toa-tau-metro-o-cang-khanh-hoi-4275823.html"
                                     style={{display: 'inline-block'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4275823-1">10</span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-player-video" id="video_list_6" style={{display: 'none'}}>
                     <div class="thumb-video thumb thumb-16x9"></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt" href="" style={{ display: 'none'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4275707-1">1</span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-player-video" id="video_list_7" style={{display: 'none'}}>
                     <div class="thumb-video thumb thumb-16x9"></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="Khói lửa bao trùm cửa hàng sơn"
                                 href="https://video./tin-tuc//khoi-lua-bao-trum-cua-hang-son-4275677.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-8&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 Khói lửa bao trùm cửa hàng sơn
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt"
                                     href="https://video./tin-tuc//khoi-lua-bao-trum-cua-hang-son-4275677.html"
                                     style={{ display: 'none'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4275677-1">6</span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-player-video" id="video_list_8" style={{display: 'none'}}>
                     <div class="thumb-video thumb thumb-16x9"></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="'Rừng' kiểng lá trong căn hộ tầng 18"
                                 href="https://video./tin-tuc/nhip-song/rung-kieng-la-trong-can-ho-tang-18-4274782.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-9&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 'Rừng' kiểng lá trong căn hộ tầng 18
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt"
                                     href="https://video./tin-tuc/nhip-song/rung-kieng-la-trong-can-ho-tang-18-4274782.html"
                                     style={{display: 'inline-block'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4274782-1">30</span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-player-video" id="video_list_9" style={{display: 'none'}}>
                     <div class="thumb-video thumb thumb-16x9"></div>
                     <div class="item-news">
                         <h4 class="title-news">
                             <a title="Bữa tối bất ngờ của Tổng thống Obama trong quán bún chả"
                                 href="bua-toi-bat-ngo-cua-tong-thong-obama-trong-quan-bun-cha-4274999.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-10&amp;vn_term=Desktop&amp;vn_thumb=1">
                                 Bữa tối bất ngờ của Tổng thống Obama trong quán bún chả
                             </a>
                             <span class="meta-news">
                                 <a class="count_cmt"
                                     href="bua-toi-bat-ngo-cua-tong-thong-obama-trong-quan-bun-cha-4274999.html"
                                     style={{display: 'inline-block'}}>
                                     <svg class="ic ic-comment">
                                         <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span class="font_icon widget-comment-4274999-1">33</span>
                                 </a>
                             </span>
                         </h4>
                     </div>
                 </div>
                 <div class="box-scroll-video scrollbar-inner ss-container" style={{height: '458px'}}>
                     <div class="ss-wrapper">
                         <div class="ss-content">
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="300 suất cơm tặng bác sĩ, bệnh nhân viện K" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="0">
                                         <picture>
                                             alt="300 suất cơm tặng bác sĩ, bệnh nhân viện K" class="lazy lazied"
                                             src="https://i1-vnexpress.vnecdn.net/2021/05/11/183337319293769541314251031841-5514-3091-1620719519.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=lA5ei-GlTZJQcQWH39ZpvQ"
                                             data-src="https://i1-vnexpress.vnecdn.net/2021/05/11/183337319293769541314251031841-5514-3091-1620719519.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=lA5ei-GlTZJQcQWH39ZpvQ"&gt;
                                         </picture>
                                         <span class="duration-video has_transition">02:06</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="300 suất cơm tặng bác sĩ, bệnh nhân viện K"
                                         href="https://video./tin-tuc//300-suat-com-tang-bac-si-benh-nhan-vien-k-4275889.html"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         300 suất cơm tặng bác sĩ, bệnh nhân viện K
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./" title="Thời sự"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-ThoiSu&amp;vn_term=Desktop"
                                         class="cat">Thời sự</a>
                                     <a class="count_cmt"
                                         href="https://video./tin-tuc//300-suat-com-tang-bac-si-benh-nhan-vien-k-4275889.html"
                                         style={{display: 'inline-block'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4275889-1">14</span>
                                     </a>
                                 </p>
                             </article>
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="Trắng đêm đưa 3 toa metro về depot" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="1">
                                         <picture>
                                             <img loading="lazy" intrinsicsize="120x72"
                                                 alt="Trắng đêm đưa 3 toa metro về depot" class="lazy lazied"
                                                 src="https://i1-vnexpress.vnecdn.net/2021/05/11/58a95b80af8e5ad0039f1620690789-8325-7490-1620694955.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=chV1P8U6LnS8Zq6_dMFeew"
                                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/11/58a95b80af8e5ad0039f1620690789-8325-7490-1620694955.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=chV1P8U6LnS8Zq6_dMFeew">
                                             </img></picture>
                                         <span class="duration-video has_transition">02:22</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="Trắng đêm đưa 3 toa metro về depot"
                                         href="https://video./tin-tuc//trang-dem-dua-3-toa-metro-ve-depot-4276006.html"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         Trắng đêm đưa 3 toa metro về depot
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./" title="Thời sự"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-ThoiSu&amp;vn_term=Desktop"
                                         class="cat">Thời sự</a>
                                     <a class="count_cmt"
                                         href="https://video./tin-tuc//trang-dem-dua-3-toa-metro-ve-depot-4276006.html"
                                         style={{ display: 'none'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4276006-1">5</span>
                                     </a>
                                 </p>
                             </article>
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="Nổ bom bi để di dời bom Mỹ 340 kg" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="2">
                                         <video loop="" muted="" playsinline="" preload="auto"
                                             poster="https://i1-vnexpress.vnecdn.net/2021/05/10/ezgifcomvideotogif-1620646063-7918-1620646167.gif?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=F-_VvJ_7d9r8UQ8Y8C2New&amp;t=image"
                                             class="lazy thumb-gif lazied"
                                             src="https://i1-vnexpress.vnecdn.net/2021/05/10/ezgifcomvideotogif-1620646063-7918-1620646167.gif?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=EtJLPTpDxUNmveIKizTPpg&amp;t=video">
                                         </video>
                                         <span class="duration-video has_transition">01:14</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="Nổ bom bi để di dời bom Mỹ 340 kg"
                                         href="https://video./tin-tuc//no-bom-bi-de-di-doi-bom-my-340-kg-4275912.html"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         Nổ bom bi để di dời bom Mỹ 340 kg
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./" title="Thời sự"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-ThoiSu&amp;vn_term=Desktop"
                                         class="cat">Thời sự</a>
                                     <a class="count_cmt"
                                         href="https://video./tin-tuc//no-bom-bi-de-di-doi-bom-my-340-kg-4275912.html"
                                         style={{ display: 'none'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4275912-1">6</span>
                                     </a>
                                 </p>
                             </article>
                             <article class="item-news item-news-common"><ins class="adsbyeclick" data-zone="7088"
                                     data-ad-ivid="0"></ins></article>
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="Hà Nội phong tỏa xã hơn 11.000 dân" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="3">
                                         <picture>
                                             <img loading="lazy" intrinsicsize="120x72"
                                                 alt="Hà Nội phong tỏa xã hơn 11\.000 dân" class="lazy lazied"
                                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/at-1620647573-2672-1620647576.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=h2yDdCGPTFMmycmC-cU36Q"
                                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/at-1620647573-2672-1620647576.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=h2yDdCGPTFMmycmC-cU36Q">
                                             </img></picture>
                                         <span class="duration-video has_transition">01:41</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="Hà Nội phong tỏa xã hơn 11.000 dân"
                                         href="https://video./tin-tuc//ha-noi-phong-toa-xa-hon-11-000-dan-4275923.html"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         Hà Nội phong tỏa xã hơn 11.000 dân
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./" title="Thời sự"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-ThoiSu&amp;vn_term=Desktop"
                                         class="cat">Thời sự</a>
                                     <a class="count_cmt"
                                         href="https://video./tin-tuc//ha-noi-phong-toa-xa-hon-11-000-dan-4275923.html"
                                         style={{ display: 'none'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4275923-1">2</span>
                                     </a>
                                 </p>
                             </article>
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="4 giờ bốc dỡ toa tàu metro ở cảng Khánh Hội" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="4">
                                         <picture>
                                             <img loading="lazy" intrinsicsize="120x72"
                                                 alt="4 giờ bốc dỡ toa tàu metro ở cảng Khánh Hội" class="lazy lazied"
                                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/anhtop-1620637551-5962-1620637-8753-9546-1620638140.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=nrC8iroAWzvhpKKpPXTHcg"
                                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/anhtop-1620637551-5962-1620637-8753-9546-1620638140.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=nrC8iroAWzvhpKKpPXTHcg">
                                             </img> </picture>
                                         <span class="duration-video has_transition">02:45</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="4 giờ bốc dỡ toa tàu metro ở cảng Khánh Hội"
                                         href="https://video./tin-tuc//4-gio-boc-do-toa-tau-metro-o-cang-khanh-hoi-4275823.html"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         4 giờ bốc dỡ toa tàu metro ở cảng Khánh Hội
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./" title="Thời sự"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-ThoiSu&amp;vn_term=Desktop"
                                         class="cat">Thời sự</a>
                                     <a class="count_cmt"
                                         href="https://video./tin-tuc//4-gio-boc-do-toa-tau-metro-o-cang-khanh-hoi-4275823.html"
                                         style={{display: 'inline-block'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4275823-1">10</span>
                                     </a>
                                 </p>
                             </article>
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="5">
                                         <picture>
                                             <img loading="lazy" intrinsicsize="120x72"
                                                 alt="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều"
                                                 class="lazy lazied"
                                                 src="https://i1-vnexpress.vnecdn.net/2021/05/10/Hinh00000712Still001-162063033-6339-8009-1620630463.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=3ZrIhJHR4vfgQmaIs3CS8Q"
                                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/Hinh00000712Still001-162063033-6339-8009-1620630463.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=3ZrIhJHR4vfgQmaIs3CS8Q">
                                             </img> </picture>
                                         <span class="duration-video has_transition">01:38</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều" href=""
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         Tặng khẩu trang, đồ bảo hộ cho viện K Tân Triều
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./" title="Thời sự"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-ThoiSu&amp;vn_term=Desktop"
                                         class="cat">Thời sự</a>
                                     <a class="count_cmt" href="" style={{ display: 'none'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4275707-1">1</span>
                                     </a>
                                 </p>
                             </article>
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="Khói lửa bao trùm cửa hàng sơn" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="6">
                                         <video loop="" muted="" playsinline="" preload="auto"
                                             poster="https://i1-vnexpress.vnecdn.net/2021/05/10/HD31-1620627164-5318-1620627169.gif?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=vWtsJT-Rhe5oCoScgV05lA&amp;t=image"
                                             class="lazy thumb-gif lazied"
                                             src="https://i1-vnexpress.vnecdn.net/2021/05/10/HD31-1620627164-5318-1620627169.gif?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=E12-Tl383j9MyIN5o_pdTA&amp;t=video">
                                         </video>
                                         <span class="duration-video has_transition">00:52</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="Khói lửa bao trùm cửa hàng sơn"
                                         href="https://video./tin-tuc//khoi-lua-bao-trum-cua-hang-son-4275677.html"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         Khói lửa bao trùm cửa hàng sơn
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./" title="Thời sự"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-ThoiSu&amp;vn_term=Desktop"
                                         class="cat">Thời sự</a>
                                     <a class="count_cmt"
                                         href="https://video./tin-tuc//khoi-lua-bao-trum-cua-hang-son-4275677.html"
                                         style={{ display: 'none'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4275677-1">6</span>
                                     </a>
                                 </p>
                             </article>
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="'Rừng' kiểng lá trong căn hộ tầng 18" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="7">
                                         <picture>
                                             <img loading="lazy" intrinsicsize="120x72"
                                                 alt="'Rừng' kiểng lá trong căn hộ tầng 18" class="lazy lazied"
                                                 src="https://i1-vnexpress.vnecdn.net/2021/05/08/STREAM00021321Still001-1620445-5446-2846-1620445606.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=RzHi8CTyM-hWWNynVQi5wg"
                                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/08/STREAM00021321Still001-1620445-5446-2846-1620445606.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=RzHi8CTyM-hWWNynVQi5wg">
                                             </img> </picture>
                                         <span class="duration-video has_transition">02:40</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="'Rừng' kiểng lá trong căn hộ tầng 18"
                                         href="https://video./tin-tuc/nhip-song/rung-kieng-la-trong-can-ho-tang-18-4274782.html"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-8&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         'Rừng' kiểng lá trong căn hộ tầng 18
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./nhip-song" title="Nhịp sống"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-NhipSong&amp;vn_term=Desktop"
                                         class="cat">Nhịp sống</a>
                                     <a class="count_cmt"
                                         href="https://video./tin-tuc/nhip-song/rung-kieng-la-trong-can-ho-tang-18-4274782.html"
                                         style={{display: 'inline-block'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4274782-1">30</span>
                                     </a>
                                 </p>
                             </article>
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="Bữa tối bất ngờ của Tổng thống Obama trong quán bún chả" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="8">
                                         <picture>
                                             <img loading="lazy" intrinsicsize="120x72"
                                                 alt="Bữa tối bất ngờ của Tổng thống Obama trong quán bún chả"
                                                 class="lazy lazied"
                                                 src="https://i1-dulich.vnecdn.net/2021/05/08/bunchaHL-1620485192-2104-1620485260.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=llo-qCt1ZsIOPmmUeuMGcw"
                                                 data-src="https://i1-dulich.vnecdn.net/2021/05/08/bunchaHL-1620485192-2104-1620485260.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=llo-qCt1ZsIOPmmUeuMGcw">
                                             </img> </picture>
                                         <span class="duration-video has_transition">05:32</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="Bữa tối bất ngờ của Tổng thống Obama trong quán bún chả"
                                         href="bua-toi-bat-ngo-cua-tong-thong-obama-trong-quan-bun-cha-4274999.html"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-9&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         Bữa tối bất ngờ của Tổng thống Obama trong quán bún chả
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./dau-chan" title="Dấu chân"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-DauChan&amp;vn_term=Desktop"
                                         class="cat">Dấu chân</a>
                                     <a class="count_cmt"
                                         href="bua-toi-bat-ngo-cua-tong-thong-obama-trong-quan-bun-cha-4274999.html"
                                         style={{display: 'inline-block'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4274999-1">33</span>
                                     </a>
                                 </p>
                             </article>
                             <article class="item-news item-news-common">
                                 <div class="thumb-art">
                                     <a title="Chuỗi lây nhiễm làm 9 bệnh viện bị cách ly, phong tỏa" href=""
                                         class="thumb thumb-16x9 play_video_list" data-id="9">
                                         <picture>
                                             <img loading="lazy" intrinsicsize="120x72"
                                                 alt="Chuỗi lây nhiễm làm 9 bệnh viện bị cách ly, phong tỏa"
                                                 class="lazy lazied"
                                                 src="https://i1-vnexpress.vnecdn.net/2021/05/09/bnhvinphongta-1620575024-8122-1620577540.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ndwkK20xyNxLYFwfvQyHJA"
                                                 data-src="https://i1-vnexpress.vnecdn.net/2021/05/09/bnhvinphongta-1620575024-8122-1620577540.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ndwkK20xyNxLYFwfvQyHJA">
                                             </img></picture>
                                         <span class="duration-video has_transition">02:20</span>
                                         <span class="playing-txt has_transition" style={{display: 'none'}}>Đang
                                             phát</span>
                                     </a>
                                 </div>
                                 <h3 class="title-news">
                                     <a title="Chuỗi lây nhiễm làm 9 bệnh viện bị cách ly, phong tỏa"
                                         href="https://video./tin-tuc//chuoi-lay-nhiem-lam-9-benh-vien-bi-cach-ly-phong-toa-4275142.html"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Item-10&amp;vn_term=Desktop&amp;vn_thumb=1">
                                         Chuỗi lây nhiễm làm 9 bệnh viện bị cách ly, phong tỏa
                                     </a>
                                 </h3>
                                 <p class="meta-news">
                                     <a href="https://video./" title="Thời sự"
                                         data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Video&amp;vn_medium=Title-ThoiSu&amp;vn_term=Desktop"
                                         class="cat">Thời sự</a>
                                     <a class="count_cmt"
                                         href="https://video./tin-tuc//chuoi-lay-nhiem-lam-9-benh-vien-bi-cach-ly-phong-toa-4275142.html"
                                         style={{ display: 'none'}}>
                                         <svg class="ic ic-comment">
                                             <use href="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span class="font_icon widget-comment-4275142-1">3</span>
                                     </a>
                                 </p>
                             </article>
                         </div>
                     </div>
                     <div class="ss-scroll" style={{height: '46.2626%', top: '0%', right: '-375px'}}></div>
                 </div>
             </div>
         </div>
     </div>
     <div id="_videos" class="lazier hidden"></div>
 </section>
 <section className="section section_container">
     <section className="section section_container">
         <div className="container has_border">
             <hgroup className="width_common title-box-category dulich">
                 <h2 className="parent-cate"><a href="/" className="inner-title" title="Du lịch">Du lịch</a></h2><span
                     className="sub-cate"><a href="//dau-chan" title="Dấu chân">Dấu chân</a></span><span
                     className="sub-cate"><a href="//tu-van" title="Tư vấn">Tư vấn</a></span><span
                     className="sub-cate"><a href="//safe-go" title="Safe Go">Safe Go</a></span><span
                     className="sub-cate"><a href="//diem-den" title="Điểm đến">Điểm đến</a></span><span
                     className="sub-cate"><a href="//anh-video" title="Ảnh">Ảnh</a></span><span className="sub-cate"><a
                         href="//an-va-choi" title="Ăn và chơi">Ăn và chơi</a></span>
             </hgroup>
             <div className="width_common section_box_cate flexbox">
                 <div className="col-boxcate colbox-left">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="cuoc-song-o-noi-khong-co-covid-19-4276752.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Cuộc sống ở nơi không có Covid-19">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="500x300" alt="Cuộc sống ở nơi không có Covid-19"
                                         className="lazy lazied"
                                         src="https://i1-dulich.vnecdn.net/2021/05/12/3-1620797454-1217-1620797470-1-1666-5897-1620823220.jpg?w=500&amp;h=300&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=TbYW57SU1jCx2G6acn6L7A"
                                         data-src="https://i1-dulich.vnecdn.net/2021/05/12/3-1620797454-1217-1620797470-1-1666-5897-1620823220.jpg?w=500&amp;h=300&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=TbYW57SU1jCx2G6acn6L7A">
                                     </img></picture>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a href="cuoc-song-o-noi-khong-co-covid-19-4276752.html"
                                     data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                     title="Cuộc sống ở nơi không có Covid-19">Cuộc sống ở nơi
                                     không
                                     có Covid-19</a></h3>
                             <p className="description">
                                 <a href="cuoc-song-o-noi-khong-co-covid-19-4276752.html"
                                     title="Cuộc sống ở nơi không có Covid-19">
                                     <span className="location-stamp">Italy</span>Khi châu Âu dự định mở cửa biên giới
                                     vào
                                     mùa hè này, Capri đã "đi trước một bước" với lời giới thiệu hấp dẫn: hòn đảo
                                     không
                                     có Covid-19.
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt" href="cuoc-song-o-noi-khong-co-covid-19-4276752.html"
                                         style={{display: 'none'}}>
                                         <svg className="ic ic-comment">
                                             <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276752-1"></span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                 </div>
                 <div className="col-boxcate colbox-center">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="ca-ran-chin-mieng-con-dop-mang-phap-phong-4275626.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Cá rán chín miệng còn đớp, mang phập phồng">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="Cá rán chín miệng còn đớp, mang phập phồng" className="lazy lazied"
                                         src="https://i1-dulich.vnecdn.net/2021/05/11/yin-and-yang-fish-1620710008-4218-1620710365.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qhE6dxsq798QyTgcsUS8og"
                                         data-src="https://i1-dulich.vnecdn.net/2021/05/11/yin-and-yang-fish-1620710008-4218-1620710365.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qhE6dxsq798QyTgcsUS8og">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href="ca-ran-chin-mieng-con-dop-mang-phap-phong-4275626.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Cá rán chín miệng còn đớp, mang phập phồng">Cá rán chín
                                 miệng
                                 còn đớp, mang phập phồng</a><span className="meta-news">
                                 <a className="count_cmt" href="ca-ran-chin-mieng-con-dop-mang-phap-phong-4275626.html"
                                     style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275626-1">33</span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Bị đuổi khỏi công viên vì quần quá ngắn">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="Bị đuổi khỏi công viên vì quần quá ngắn" className="lazy lazied"
                                         src="https://i1-dulich.vnecdn.net/2021/05/12/khachdulichquanshort-162081274-2105-9029-1620820658.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=4TkiNMl-sZBDfOA5CGjPbQ"
                                         data-src="https://i1-dulich.vnecdn.net/2021/05/12/khachdulichquanshort-162081274-2105-9029-1620820658.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=4TkiNMl-sZBDfOA5CGjPbQ">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Bị đuổi khỏi công viên vì quần quá ngắn">Bị đuổi khỏi công
                                 viên vì quần quá ngắn</a><span className="meta-news">
                                 <a className="count_cmt" href="" style={{display: 'none'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276806-1"></span>
                                 </a>
                             </span></h3>
                     </article>
                 </div>
                 <div className="col-boxcate colbox-right">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="5-trai-nghiem-tron-nong-he-o-pu-luong-4274204.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="5 trải nghiệm trốn nóng hè ở Pù Luông">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="5 trải nghiệm trốn nóng hè ở Pù Luông" className="lazy lazied"
                                         src="https://i1-dulich.vnecdn.net/2021/05/12/tran-huy-thang-3-5529-15392249-9639-2286-1620805124.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=wcoiCMYJIBgxWcle2iY4FQ"
                                         data-src="https://i1-dulich.vnecdn.net/2021/05/12/tran-huy-thang-3-5529-15392249-9639-2286-1620805124.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=wcoiCMYJIBgxWcle2iY4FQ">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href="5-trai-nghiem-tron-nong-he-o-pu-luong-4274204.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="5 trải nghiệm trốn nóng hè ở Pù Luông">5 trải nghiệm trốn
                                 nóng
                                 hè ở Pù Luông</a><span className="meta-news">
                                 <a className="count_cmt" href="5-trai-nghiem-tron-nong-he-o-pu-luong-4274204.html"
                                     style={{display: 'none'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4274204-1"></span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="hon-9-000-co-so-luu-tru-danh-gia-an-toan-covid-19-4276545.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Hơn 9.000 cơ sở lưu trú đánh giá an toàn Covid-19">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="Hơn 9\.000 cơ sở lưu trú đánh giá an toàn Covid-19"
                                         className="lazy lazied"
                                         src="https://i1-dulich.vnecdn.net/2021/05/11/VnExpressDamSen28621596447586-5192-3205-1620747350.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=mv-9zRuxuwzkJmn_XayeZQ"
                                         data-src="https://i1-dulich.vnecdn.net/2021/05/11/VnExpressDamSen28621596447586-5192-3205-1620747350.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=mv-9zRuxuwzkJmn_XayeZQ">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a
                                 href="hon-9-000-co-so-luu-tru-danh-gia-an-toan-covid-19-4276545.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Hơn 9.000 cơ sở lưu trú đánh giá an toàn Covid-19">Hơn
                                 9.000
                                 cơ sở lưu trú đánh giá an toàn Covid-19</a><span className="meta-news">
                                 <a className="count_cmt"
                                     href="hon-9-000-co-so-luu-tru-danh-gia-an-toan-covid-19-4276545.html"
                                     style={{display: 'none'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276545-1"></span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="lam-gi-cho-do-buon-khi-phai-cach-ly-qua-lau-4276363.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Làm gì cho 'đỡ buồn' khi phải cách ly quá lâu?">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="Làm gì cho 'đỡ buồn' khi phải cách ly quá lâu\?" className="lazy lazied"
                                         src="https://i1-dulich.vnecdn.net/2021/05/11/2-1620721569-2861-1620721598.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=sRNYk3l99Ou0RmLKcimK9Q"
                                         data-src="https://i1-dulich.vnecdn.net/2021/05/11/2-1620721569-2861-1620721598.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=sRNYk3l99Ou0RmLKcimK9Q">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href="lam-gi-cho-do-buon-khi-phai-cach-ly-qua-lau-4276363.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Làm gì cho 'đỡ buồn' khi phải cách ly quá lâu?">Làm gì cho
                                 'đỡ
                                 buồn' khi phải cách ly quá lâu?</a><span className="meta-news">
                                 <a className="count_cmt"
                                     href="lam-gi-cho-do-buon-khi-phai-cach-ly-qua-lau-4276363.html"
                                     style={{display: 'none'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276363-1">5</span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc" className="lazy lazied"
                                         src="https://i1-dulich.vnecdn.net/2021/05/12/tienson7-1620631838-1620753729.png?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=0sS-KHtNGX-Eoigd2K8y6g"
                                         data-src="https://i1-dulich.vnecdn.net/2021/05/12/tienson7-1620631838-1620753729.png?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=0sS-KHtNGX-Eoigd2K8y6g">
                                     </img></picture>
                                 <span className="icon_thumb_videophoto"><svg className="ic ic-camera">
                                         <use></use>
                                     </svg></span>
                             </a>
                         </div>
                         <h3 className="title-news"><a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-DuLich&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Hang động '99
                                 núi, 99 hồ' giữa rừng Tây Bắc</a><span className="meta-news">
                                 <a className="count_cmt" href="" style={{display: 'none'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275791-3">4</span>
                                 </a>
                             </span></h3>
                     </article>
                 </div>
             </div>
         </div>
     </section>
     <section className="section section_container">
         <div className="container has_border">
             <hgroup className="width_common title-box-category xe">
                 <h2 className="parent-cate"><a href="/" className="inner-title" title="Xe">Xe</a></h2><span
                     className="sub-cate"><a href="//thi-truong" title="Thị trường">Thị trường</a></span><span
                     className="sub-cate"><a href="//tu-van" title="Tư vấn">Tư vấn</a></span><span
                     className="sub-cate"><a href="//danh-gia" title="Đánh giá">Đánh giá</a></span><span
                     className="sub-cate"><a href="//dien-dan" title="Diễn đàn">Diễn đàn</a></span><span
                     className="sub-cate"><a href="//video" title="Video">Video</a></span><span className="sub-cate"><a
                         href="//bang-gia" title="Bảng giá ôtô">Bảng giá ôtô</a></span><span className="sub-cate"><a
                         href="//xe-dien" title="Xe điện">Xe điện</a></span><span className="sub-cate"><a
                         href="//thi-bang-lai" title="Thi bằng lái">Thi bằng lái</a></span><span className="sub-cate"><a
                         href="" title="Mua bán">Mua bán</a></span>
             </hgroup>
             <div className="width_common section_box_cate flexbox">
                 <div className="col-boxcate colbox-left">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Xe&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Mua cùng lúc 3 siêu xe bằng tiền hỗ trợ Covid-19">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="500x300"
                                         alt="Mua cùng lúc 3 siêu xe bằng tiền hỗ trợ Covid-19" className="lazy lazied"
                                         src="https://i1-vnexpress.vnecdn.net/2021/05/12/Lamborghini1-1620794615-4961-1620794871.jpg?w=500&amp;h=300&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Ega3jq4u6eTBU14iHNwiyQ"
                                         data-src="https://i1-vnexpress.vnecdn.net/2021/05/12/Lamborghini1-1620794615-4961-1620794871.jpg?w=500&amp;h=300&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Ega3jq4u6eTBU14iHNwiyQ">
                                     </img></picture>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a href=""
                                     title="Mua cùng lúc 3 siêu xe bằng tiền hỗ trợ Covid-19">Mua
                                     cùng
                                     lúc 3 siêu xe bằng tiền hỗ trợ Covid-19</a></h3>
                             <p className="description">
                                 <a href="" title="Mua cùng lúc 3 siêu xe bằng tiền hỗ trợ Covid-19">
                                     <span className="location-stamp">Mỹ</span>Một người đàn ông ở California bị bắt khi
                                     tiêu
                                     hàng triệu USD được hỗ trợ để mua một chiếc Ferrari, một Lamborghini và một
                                     Bentley.
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                         <svg className="ic ic-comment">
                                             <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276799-1">19</span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                 </div>
                 <div className="col-boxcate colbox-center">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Xe&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="10 ôtô bán nhiều nhất tháng 4 - Accent vượt Vios">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="10 ôtô bán nhiều nhất tháng 4 - Accent vượt Vios" className="lazy lazied"
                                         src="https://i1-vnexpress.vnecdn.net/2021/05/12/settop-jpeg.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=IpDp_y1DcUNCbadiy_EJVQ"
                                         data-src="https://i1-vnexpress.vnecdn.net/2021/05/12/settop-jpeg.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=IpDp_y1DcUNCbadiy_EJVQ">
                                     </img></picture>
                                 <span className="icon_thumb_videophoto"><svg className="ic ic-infographic">
                                         <use></use>
                                     </svg></span>
                             </a>
                         </div>
                         <h3 className="title-news"><a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Xe&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="10 ôtô bán nhiều nhất tháng 4 - Accent vượt Vios">10 ôtô
                                 bán
                                 nhiều nhất tháng 4 - Accent vượt Vios</a><span className="meta-news">
                                 <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276686-4">253</span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="10-oto-it-khach-viet-nhat-thang-4-4276858.html" className="thumb thumb-5x3"
                                 title="10 ôtô ít khách Việt nhất tháng 4">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228" alt="10 ôtô ít khách Việt nhất tháng 4"
                                         className="lazy lazied"
                                         src="https://i1-vnexpress.vnecdn.net/2021/05/12/settop-jpeg_1620795640.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ytNAO53U1hcB8EWeJ20EiQ"
                                         data-src="https://i1-vnexpress.vnecdn.net/2021/05/12/settop-jpeg_1620795640.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ytNAO53U1hcB8EWeJ20EiQ">
                                     </img></picture>
                                 <span className="icon_thumb_videophoto"><svg className="ic ic-infographic">
                                         <use></use>
                                     </svg></span>
                             </a>
                         </div>
                         <h3 className="title-news"><a href="10-oto-it-khach-viet-nhat-thang-4-4276858.html"
                                 title="10 ôtô ít khách Việt nhất tháng 4">10 ôtô ít khách Việt
                                 nhất
                                 tháng 4</a><span className="meta-news">
                                 <a className="count_cmt" href="10-oto-it-khach-viet-nhat-thang-4-4276858.html"
                                     style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276858-4">24</span>
                                 </a>
                             </span></h3>
                     </article>
                 </div>
                 <div className="col-boxcate colbox-right">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="" className="thumb thumb-5x3"
                                 title="Bị xe tải lôi đi, tài xế xe ba bánh tuyệt vọng cầu cứu">
                                 <video loop="" muted="" playsinline="" preload="auto"
                                     poster="https://i1-vnexpress.vnecdn.net/2021/05/12/ezgif25ca391ee4f08-1620789141-4716-1620790017.gif?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=3hPH1RqJBQXkurGp9bbokQ&amp;t=image"
                                     className="lazy thumb-gif lazied"
                                     src="https://i1-vnexpress.vnecdn.net/2021/05/12/ezgif25ca391ee4f08-1620789141-4716-1620790017.gif?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qhsPtRQOn6Mngk70xkZGnA&amp;t=video">
                                 </video>
                             </a>
                         </div>
                         <h3 className="title-news"><a href=""
                                 title="Bị xe tải lôi đi, tài xế xe ba bánh tuyệt vọng cầu cứu">Bị
                                 xe
                                 tải lôi đi, tài xế xe ba bánh tuyệt vọng cầu cứu</a><span className="meta-news">
                                 <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276724-1">17</span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="t"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Xe&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Tham vọng 'trùm' xe điện của Trung Quốc">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="Tham vọng 'trùm' xe điện của Trung Quốc" className="lazy lazied"
                                         src="https://i1-vnexpress.vnecdn.net/2021/05/11/XEDIENTRUNGQUOCVNE-1620730798-7216-1620732002.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=dQTHly1t6TN6CHst80kYnA"
                                         data-src="https://i1-vnexpress.vnecdn.net/2021/05/11/XEDIENTRUNGQUOCVNE-1620730798-7216-1620732002.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=dQTHly1t6TN6CHst80kYnA">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href="t"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Xe&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Tham vọng 'trùm' xe điện của Trung Quốc">Tham vọng 'trùm'
                                 xe
                                 điện của Trung Quốc</a><span className="meta-news">
                                 <a className="count_cmt" href="t" style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276125-1">46</span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="xe-dien-se-re-hon-xe-xang-vao-2027-4275950.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Xe&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Xe điện sẽ rẻ hơn xe xăng vào 2027">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72" alt="Xe điện sẽ rẻ hơn xe xăng vào 2027"
                                         className="lazy lazied"
                                         src="https://i1-vnexpress.vnecdn.net/2021/05/12/erally-geiranger-norway-photo-8464-1250-1620752894.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=91Q9u223rEXk_QRm4A_8fg"
                                         data-src="https://i1-vnexpress.vnecdn.net/2021/05/12/erally-geiranger-norway-photo-8464-1250-1620752894.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=91Q9u223rEXk_QRm4A_8fg">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href="xe-dien-se-re-hon-xe-xang-vao-2027-4275950.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Xe&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Xe điện sẽ rẻ hơn xe xăng vào 2027">Xe điện sẽ rẻ hơn xe
                                 xăng
                                 vào 2027</a><span className="meta-news">
                                 <a className="count_cmt" href="xe-dien-se-re-hon-xe-xang-vao-2027-4275950.html"
                                     style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4275950-1">24</span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Xe&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3"
                                 title="Hơn 1,1 triệu xe Honda Accord bị điều tra lỗi mất lái">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="Hơn 1,1 triệu xe Honda Accord bị điều tra lỗi mất lái"
                                         className="lazy lazied"
                                         src="https://i1-vnexpress.vnecdn.net/2021/05/12/HondaAccord1-1620791165-1620-1620791414.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ZPGNGBBLqQ8MyvCEFRQ3aA"
                                         data-src="https://i1-vnexpress.vnecdn.net/2021/05/12/HondaAccord1-1620791165-1620-1620791414.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ZPGNGBBLqQ8MyvCEFRQ3aA">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Xe&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Hơn 1,1 triệu xe Honda Accord bị điều tra lỗi mất lái">Hơn
                                 1,1
                                 triệu xe Honda Accord bị điều tra lỗi mất lái</a><span className="meta-news">
                                 <a className="count_cmt" href="" style={{display: 'none'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276415-1">3</span>
                                 </a>
                             </span></h3>
                     </article>
                 </div>
             </div>
         </div>
     </section>
     <section className="section section_container">
         <div className="container has_border">
             <hgroup className="width_common title-box-category sohoa">
                 <h2 className="parent-cate"><a href="/" className="inner-title" title="Số hóa">Số hóa</a></h2><span
                     className="sub-cate"><a href="//cong-nghe" title="Công nghệ">Công nghệ</a></span><span
                     className="sub-cate"><a href="//san-pham" title="Sản phẩm">Sản phẩm</a></span><span
                     className="sub-cate"><a href="//dien-dan" title="Diễn đàn">Diễn đàn</a></span><span
                     className="sub-cate"><a href="//cto-summit" title="CTO Summit 2021">CTO Summit 2021</a></span>
             </hgroup>
             <div className="width_common section_box_cate flexbox">
                 <div className="col-boxcate colbox-left">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="loi-the-cua-ethereum-truoc-bitcoin-4276303.html" className="thumb thumb-5x3"
                                 title="Lợi thế của Ethereum trước Bitcoin">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="500x300"
                                         alt="Lợi thế của Ethereum trước Bitcoin" className="lazy lazied"
                                         src="https://i1-sohoa.vnecdn.net/2021/05/11/ethereum-1620718330-1585-1620718350.jpg?w=500&amp;h=300&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Dv78IbtEAV2SP7gzwHaOhg"
                                         data-src="https://i1-sohoa.vnecdn.net/2021/05/11/ethereum-1620718330-1585-1620718350.jpg?w=500&amp;h=300&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Dv78IbtEAV2SP7gzwHaOhg">
                                     </img></picture>
                             </a>
                         </div>
                         <div className="wrap-sum-news">
                             <h3 className="title-news"><a href="loi-the-cua-ethereum-truoc-bitcoin-4276303.html"
                                     title="Lợi thế của Ethereum trước Bitcoin">Lợi thế của
                                     Ethereum
                                     trước Bitcoin</a></h3>
                             <p className="description">
                                 <a href="loi-the-cua-ethereum-truoc-bitcoin-4276303.html"
                                     title="Lợi thế của Ethereum trước Bitcoin">
                                     Ether được ví như smartphone với nhiều ứng dụng cho người dùng, trong khi
                                     Bitcoin
                                     được mô tả như máy tính số bỏ túi và không có nhiều tác dụng.
                                 </a>
                                 <span className="meta-news">
                                     <a className="count_cmt" href="loi-the-cua-ethereum-truoc-bitcoin-4276303.html"
                                         style={{display: 'none'}}>
                                         <svg className="ic ic-comment">
                                             <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                     <path
                                                         d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                     </path>
                                                 </svg></use>
                                         </svg>
                                         <span className="font_icon widget-comment-4276303-1">5</span>
                                     </a>
                                 </span>
                             </p>
                         </div>
                     </article>
                 </div>
                 <div className="col-boxcate colbox-center">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="nguoi-trung-quoc-tay-chay-gigabyte-vi-coi-thuong-made-in-china-4276523.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3"
                                 title="Người Trung Quốc tẩy chay Gigabyte vì coi thường 'Made in China'">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="Người Trung Quốc tẩy chay Gigabyte vì coi thường 'Made in China'"
                                         className="lazy lazied"
                                         src="https://i1-sohoa.vnecdn.net/2021/05/11/gigabytechina-1620735907-16207-6496-7679-1620735977.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bt_706x5a-CAssuesR55Yg"
                                         data-src="https://i1-sohoa.vnecdn.net/2021/05/11/gigabytechina-1620735907-16207-6496-7679-1620735977.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bt_706x5a-CAssuesR55Yg">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a
                                 href="nguoi-trung-quoc-tay-chay-gigabyte-vi-coi-thuong-made-in-china-4276523.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Người Trung Quốc tẩy chay Gigabyte vì coi thường 'Made in China'">Người Trung
                                 Quốc tẩy chay Gigabyte vì coi thường 'Made in
                                 China'</a><span className="meta-news">
                                 <a className="count_cmt"
                                     href="nguoi-trung-quoc-tay-chay-gigabyte-vi-coi-thuong-made-in-china-4276523.html"
                                     style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276523-1">77</span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Quạt điều hòa đời cũ giá rẻ như quạt điện">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="380x228"
                                         alt="Quạt điều hòa đời cũ giá rẻ như quạt điện" className="lazy lazied"
                                         src="https://i1-sohoa.vnecdn.net/2021/05/11/20210116145547-1620735637-1795-1620735885.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=-W2k3QzcnTxfwmlNU8lL8Q"
                                         data-src="https://i1-sohoa.vnecdn.net/2021/05/11/20210116145547-1620735637-1795-1620735885.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=-W2k3QzcnTxfwmlNU8lL8Q">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Quạt điều hòa đời cũ giá rẻ như quạt điện">Quạt điều hòa
                                 đời
                                 cũ giá rẻ như quạt điện</a><span className="meta-news">
                                 <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276339-1">28</span>
                                 </a>
                             </span></h3>
                     </article>
                 </div>
                 <div className="col-boxcate colbox-right">
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Người bán hàng online 'khổ' vì iOS 14.5">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="Người bán hàng online 'khổ' vì iOS 14\.5" className="lazy lazied"
                                         src="https://i1-sohoa.vnecdn.net/2021/05/11/facebookio145-1620734673-8139-1620734977.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=WERIXEcc6A92e3VdZthRSA"
                                         data-src="https://i1-sohoa.vnecdn.net/2021/05/11/facebookio145-1620734673-8139-1620734977.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=WERIXEcc6A92e3VdZthRSA">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Người bán hàng online 'khổ' vì iOS 14.5">Người bán hàng
                                 online
                                 'khổ' vì iOS 14.5</a><span className="meta-news">
                                 <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4274844-1">215</span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Smartphone Trung Quốc gặp khó tại Ấn Độ">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="Smartphone Trung Quốc gặp khó tại Ấn Độ" className="lazy lazied"
                                         src="https://i1-sohoa.vnecdn.net/2021/05/12/77e5e860ae6311eb9c9f63ba12e765-3473-7824-1620794017.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=NxL8RtV1yn9apWwS6ECkWg"
                                         data-src="https://i1-sohoa.vnecdn.net/2021/05/12/77e5e860ae6311eb9c9f63ba12e765-3473-7824-1620794017.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=NxL8RtV1yn9apWwS6ECkWg">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a href=""
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Smartphone Trung Quốc gặp khó tại Ấn Độ">Smartphone Trung
                                 Quốc
                                 gặp khó tại Ấn Độ</a><span className="meta-news">
                                 <a className="count_cmt" href="" style={{display: 'none'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276778-1"></span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="tesla-co-the-chap-nhan-thanh-toan-bang-dogecoin-4276710.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3" title="Tesla có thể chấp nhận thanh toán bằng Dogecoin">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="Tesla có thể chấp nhận thanh toán bằng Dogecoin" className="lazy lazied"
                                         src="https://i1-sohoa.vnecdn.net/2021/05/12/bicelonmuskmentiondogecoin1opt-2505-7304-1620788560.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=hUT_fOvfYhBSH91isit7hA"
                                         data-src="https://i1-sohoa.vnecdn.net/2021/05/12/bicelonmuskmentiondogecoin1opt-2505-7304-1620788560.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=hUT_fOvfYhBSH91isit7hA">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a
                                 href="tesla-co-the-chap-nhan-thanh-toan-bang-dogecoin-4276710.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="Tesla có thể chấp nhận thanh toán bằng Dogecoin">Tesla có
                                 thể
                                 chấp nhận thanh toán bằng Dogecoin</a><span className="meta-news">
                                 <a className="count_cmt"
                                     href="tesla-co-the-chap-nhan-thanh-toan-bang-dogecoin-4276710.html"
                                     style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276710-1">10</span>
                                 </a>
                             </span></h3>
                     </article>
                     <article className="item-news full-thumb">
                         <div className="thumb-art">
                             <a href="cha-de-ethereum-co-them-7-ty-usd-nho-tien-so-shiba-4276184.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 className="thumb thumb-5x3"
                                 title="'Cha đẻ' Ethereum có thêm 7 tỷ USD nhờ tiền số Shiba">
                                 <picture>
                                     <img loading="lazy" intrinsicsize="120x72"
                                         alt="'Cha đẻ' Ethereum có thêm 7 tỷ USD nhờ tiền số Shiba"
                                         className="lazy lazied"
                                         src="https://i1-sohoa.vnecdn.net/2021/05/11/vitalikdogecoin-1620705871-9783-1620706114.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=V17lkFfi-Xx-0BumAdiSnQ"
                                         data-src="https://i1-sohoa.vnecdn.net/2021/05/11/vitalikdogecoin-1620705871-9783-1620706114.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=V17lkFfi-Xx-0BumAdiSnQ">
                                     </img></picture>
                             </a>
                         </div>
                         <h3 className="title-news"><a
                                 href="cha-de-ethereum-co-them-7-ty-usd-nho-tien-so-shiba-4276184.html"
                                 data-itm-source="#vn_source=Home&amp;vn_campaign=Box-SoHoa&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1"
                                 title="'Cha đẻ' Ethereum có thêm 7 tỷ USD nhờ tiền số Shiba">'Cha
                                 đẻ'
                                 Ethereum có thêm 7 tỷ USD nhờ tiền số Shiba</a><span className="meta-news">
                                 <a className="count_cmt"
                                     href="cha-de-ethereum-co-them-7-ty-usd-nho-tien-so-shiba-4276184.html"
                                     style={{display: 'inline-block'}}>
                                     <svg className="ic ic-comment">
                                         <use><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                 <path
                                                     d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                 </path>
                                             </svg></use>
                                     </svg>
                                     <span className="font_icon widget-comment-4276184-1">23</span>
                                 </a>
                             </span></h3>
                     </article>
                 </div>
             </div>
         </div>
     </section>
     <div id="_havien_v2" className="lazier hidden"></div>
 </section>




 <section className="section">
        <div className="container has_border">
            <div className="banner-ads" style={{clear: 'both',display: 'flex',justifycontent: 'center'}}>
                <div id="_billboard_3" className="lazier"></div>
            </div>
        </div>
    </section>
    <section className="section section_container">
        <div className="container has_border flexbox">
            <div className="col-left col-770">
                <div className="width_common box-podcast">
                    <div className="width_common inner-podcast flexbox">
                        <div className="left-podcast">
                            <hgroup className="width_common title-box-category">
                                <h2 className="parent-cate"><a href="/podcast" className="inner-title" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Podcast&amp;vn_medium=Title-Podcast&amp;vn_term=Desktop&amp;vn_thumb=0" title="Nghe podcast">Nghe podcast</a></h2>
                            </hgroup>
                            <article className="item-news">
                                <div className="thumb-art">
                                    <a className="thumb thumb-1x1" href="podcast/diem-tin" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Podcast&amp;vn_medium=Show-DiemTin&amp;vn_term=Desktop&amp;vn_thumb=1" title="Điểm tin">
                                        <picture>
                                            <img loading="lazy" alt="Điểm tin" className="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2021/03/29/diem-tin-hom-nay-1617009111.jpg?w=100&amp;h=100&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=c-iccoqfKriMj0DYpjf-Tw" data-src="https://i1-vnexpress.vnecdn.net/2021/03/29/diem-tin-hom-nay-1617009111.jpg?w=100&amp;h=100&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=c-iccoqfKriMj0DYpjf-Tw">
                                        </img> </picture>
                                        <span className="icon_thumb_videophoto"><svg className="ic ic-headset">
                                                <use ></use>
                                            </svg></span>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href="diem-tin-them-82-ca-covid-19-hom-nay-4277114.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Podcast&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=0" title="Điểm tin: Thêm 82 ca Covid-19 hôm nay">Điểm tin: Thêm
                                        82
                                        ca Covid-19 hôm nay</a></h3>
                                <p className="description">
                                    <a href="diem-tin-them-82-ca-covid-19-hom-nay-4277114.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Podcast&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=0" title="Điểm tin: Thêm 82 ca Covid-19 hôm nay">
                                        82 ca Covid-19 trong những khu vực đã cách ly; Hà Nội sẽ giữ nguyên kế hoạch thi
                                        vào
                                        lớp 10; TP HCM vận động bầu cử trực...
                                    </a>
                                    <span className="meta-news cmt-show" cmt-show="1">
                                        <a className="count_cmt" href="diem-tin-them-82-ca-covid-19-hom-nay-4277114.html" style={{ display: 'none'}}>
                                            <svg className="ic ic-comment">
                                                <use ><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                        <path d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                        </path>
                                                    </svg></use>
                                            </svg>
                                            <span className="font_icon widget-comment-4277114-9"></span>
                                        </a>
                                    </span>
                                </p>
                            </article>
                        </div>
                        <div className="right-podcast">
                            <p className="label-ctkhac">Chương trình khác</p>
                            <div className="width_common list-ctkhac flexbox">
                                <div className="thumb-art item-ctkhac"><a href="podcast/vnexpress-hom-nay" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Podcast&amp;vn_medium=Show-VnexpressHomNay&amp;vn_term=Desktop&amp;vn_thumb=1" className="thumb thumb-1x1" title="VnExpress hôm nay">
                                        <picture>
                                            <img loading="lazy" alt="VnExpress hôm nay" className="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2020/10/29/vnexpress-hom-nay-1603944887.jpg?w=100&amp;h=100&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=OcNUUZvGwaWJUQjqYnYW1w" data-src="https://i1-vnexpress.vnecdn.net/2020/10/29/vnexpress-hom-nay-1603944887.jpg?w=100&amp;h=100&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=OcNUUZvGwaWJUQjqYnYW1w">
                                        </img> </picture>
                                    </a></div>
                                <div className="thumb-art item-ctkhac"><a href="podcast/ban-on-khong" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Podcast&amp;vn_medium=Show-BanOnKhong?&amp;vn_term=Desktop&amp;vn_thumb=1" className="thumb thumb-1x1" title="Bạn ổn không?">
                                        <picture>
                                            <img loading="lazy" alt="Bạn ổn không?" className="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2020/10/29/ban-on-khong-1603944908.jpg?w=100&amp;h=100&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=s1hWXGUnCdRgpgYkVpRUNw" data-src="https://i1-vnexpress.vnecdn.net/2020/10/29/ban-on-khong-1603944908.jpg?w=100&amp;h=100&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=s1hWXGUnCdRgpgYkVpRUNw">
                                        </img> </picture>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="_podcast" className="lazier hidden"></div>
                <div className="width_common box-tamsu-home">
                    <hgroup className="width_common title-box-category">
                        <h2 className="parent-cate"><a href="/" className="inner-title" title="Tâm sự">Tâm sự</a></h2><span className="sub-cate"><a href="//chuyen-gia-go-roi" title="Chuyên gia gỡ rối">Chuyên gia gỡ
                                rối</a></span><span className="sub-cate"><a href="//hen-ho" title="Hẹn hò">Hẹn hò</a></span>
                    </hgroup>
                    <div className="width_common list-ts flexbox">
                        <article className="item-news full-thumb">
                            <h3 className="title-news"><a href="cu-ve-nha-la-toi-stress-4276166.html" title="Cứ về nhà là tôi stress">Cứ về nhà là tôi stress</a></h3>
                            <p className="description">
                                <a href="cu-ve-nha-la-toi-stress-4276166.html" title="Cứ về nhà là tôi stress">
                                    Tôi là nữ, 24 tuổi, sinh ra trong gia đình có điều kiện hơn so với bạn bè. Về mặt
                                    tinh
                                    thần tôi cảm thấy bế tắc tột cùng.
                                </a>
                            </p>
                            <p className="description">
                                <a href="cu-ve-nha-la-toi-stress-4276166.html" title="Cứ về nhà là tôi stress">
                                    Bố mẹ tôi được sinh ra trong thời kỳ đất nước còn chiến tranh, nghèo khổ và thiếu
                                    thốn,
                                    từ tay trắng gây dựng tất cả nên chọn nuôi dạy chị em tôi theo cách bao bọc và kiểm
                                    soát
                                    con quá mức, sợ con phải khổ.Đồng thời, bố làm trong ngành mà hàng ngày phải tiếp
                                    xúc
                                    với nhiều loại tội phạm,...
                                </a>
                                <span className="meta-news">
                                    <a className="count_cmt" href="cu-ve-nha-la-toi-stress-4276166.html" style={{ display: 'inline-block'}}>
                                        <svg className="ic ic-comment">
                                            <use ><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276166-1">125</span>
                                    </a>
                                </span>
                            </p>
                        </article>
                        <div className="sub-news-ts">
                            <article className="item-news">
                                <h3 className="title-news"><a href="vo-sap-cuoi-co-thai-voi-dong-nghiep-4276157.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-TamSu&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0">Vợ
                                        sắp cưới có thai với đồng nghiệp</a></h3>
                                <p className="description">
                                    <a href="vo-sap-cuoi-co-thai-voi-dong-nghiep-4276157.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-TamSu&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0" title="Vợ sắp cưới có thai với đồng nghiệp">
                                        Tôi 27 tuổi, em 24 tuổi, quen được 3 năm thì cả hai quyết định đi đến hôn nhân.
                                    </a>
                                    <span className="meta-news">
                                        <a className="count_cmt" href="vo-sap-cuoi-co-thai-voi-dong-nghiep-4276157.html" style={{ display: 'inline-block'}}>
                                            <svg className="ic ic-comment">
                                                <use ><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                        <path d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                        </path>
                                                    </svg></use>
                                            </svg>
                                            <span className="font_icon widget-comment-4276157-1">386</span>
                                        </a>
                                    </span>
                                </p>
                            </article>
                            <article className="item-news">
                                <h3 className="title-news"><a href="" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-TamSu&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=0">Đồng
                                        ý cưới khi chưa nhận được lời cầu hôn từ anh</a></h3>
                                <p className="description">
                                    <a href="" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-TamSu&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=0" title="Đồng ý cưới khi chưa nhận được lời cầu hôn từ anh">
                                        Tôi và anh quen nhau qua mai mối, sau một năm là cưới. Anh là người yêu đầu nên
                                        bao
                                        nhiêu tình cảm tôi dành hết cho anh.
                                    </a>
                                    <span className="meta-news">
                                        <a className="count_cmt" href="" style={{ display: 'inline-block'}}>
                                            <svg className="ic ic-comment">
                                                <use ><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                        <path d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                        </path>
                                                    </svg></use>
                                            </svg>
                                            <span className="font_icon widget-comment-4276150-1">93</span>
                                        </a>
                                    </span>
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
                <div id="_tamsu_v2" className="lazier hidden"></div>
                <div className="width_common cate-vertical-2col has_border">
                    <div className="inner-row-boxcate flexbox">
                        <div className="item-box-cate animated animatedFadeInUp fadeInUp box-last">
                            <div className="box-category box-cate-featured box-cate-featured-vertical">
                                <hgroup className="width_common title-box-category ykien">
                                    <h2 className="parent-cate"><a href="/" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-YKien&amp;vn_medium=Title-YKien&amp;vn_term=Desktop" className="inner-title" title="Ý kiến">Ý kiến</a></h2>
                                </hgroup>
                                <div className="width_common content-box-category">
                                    <article className="item-news full-thumb ">
                                        <div className="thumb-art">
                                            <a href="" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-YKien&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" className="thumb thumb-5x3" title="Bắt chước để thành tỷ phú">
                                                <picture>
                                                    <img loading="lazy" intrinsicsize="380x228" alt="Bắt chước để thành tỷ phú" className="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2021/05/12/bill-1620783779-1620783807-1473-1620783812.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Jts18rnVC8ZuaansMTdwUQ" data-src="https://i1-vnexpress.vnecdn.net/2021/05/12/bill-1620783779-1620783807-1473-1620783812.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Jts18rnVC8ZuaansMTdwUQ">
                                                </img> </picture>
                                            </a>
                                        </div>
                                        <div className="width_common box-info-news">
                                            <h3 className="title-news"><a href="" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-YKien&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" title="Bắt chước để thành tỷ phú">Bắt chước để
                                                    thành
                                                    tỷ phú</a></h3>
                                            <p className="description">
                                                <a href="" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-YKien&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" title="Bắt chước để thành tỷ phú">
                                                    Có một người nổi tiếng bắt chước cách ăn mặc của Steve Jobs, và đang
                                                    bị
                                                    truy tố vì tội lừa đảo.
                                                </a>
                                                <span className="meta-news">
                                                    <a className="count_cmt" href="" style={{ display: 'inline-block'}}>
                                                        <svg className="ic ic-comment">
                                                            <use ></use>
                                                        </svg>
                                                        <span className="font_icon widget-comment-4276649-1">21</span>
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
                                    </article>
                                    <div className="sub-news-cate">
                                        <article className="item-news">
                                            <h3 className="title-news"><a href="phan-ung-phu-khi-thu-thue-cho-thue-nha-chung-cu-4276964.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-YKien&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0" title="'Phản ứng phụ' khi thu thuế cho thuê nhà chung cư">'Phản ứng
                                                    phụ' khi thu thuế cho thuê nhà chung
                                                    cư</a>
                                            </h3>
                                            <p className="description">
                                                <a href="phan-ung-phu-khi-thu-thue-cho-thue-nha-chung-cu-4276964.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-YKien&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0" title="'Phản ứng phụ' khi thu thuế cho thuê nhà chung cư">
                                                    Làm sao để ngăn chủ nhà vin vào cớ tăng thuế để nâng giá cho thuê,
                                                    khiến
                                                    người lao động phải gánh thêm khoản phí đo khi đi thuê nhà?
                                                </a>
                                                <span className="meta-news">
                                                    <a className="count_cmt" href="phan-ung-phu-khi-thu-thue-cho-thue-nha-chung-cu-4276964.html" style={{ display: 'none'}}>
                                                        <svg className="ic ic-comment">
                                                            <use ></use>
                                                        </svg>
                                                        <span className="font_icon widget-comment-4276964-1"></span>
                                                    </a>
                                                </span>
                                            </p>
                                        </article>
                                        <article className="item-news">
                                            <h3 className="title-news"><a href="dua-nhau-vao-dai-hoc-vi-truong-nghe-tac-nghen-4276930.html" title="Đua nhau vào đại học vì trường nghề 'tắc nghẽn'">Đua nhau vào
                                                    đại học vì trường nghề 'tắc
                                                    nghẽn'</a>
                                            </h3>
                                            <p className="description">
                                                <a href="dua-nhau-vao-dai-hoc-vi-truong-nghe-tac-nghen-4276930.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-YKien&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=0" title="Đua nhau vào đại học vì trường nghề 'tắc nghẽn'">
                                                    Học sinh trường nghề đang gặp khó khăn khi muốn hoàn thành việc học
                                                    phổ
                                                    thông.
                                                </a>
                                                <span className="meta-news">
                                                    <a className="count_cmt" href="dua-nhau-vao-dai-hoc-vi-truong-nghe-tac-nghen-4276930.html" style={{ display: 'none'}}>
                                                        <svg className="ic ic-comment">
                                                            <use ></use>
                                                        </svg>
                                                        <span className="font_icon widget-comment-4276930-1">2</span>
                                                    </a>
                                                </span>
                                            </p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-box-cate animated animatedFadeInUp fadeInUp box-last">
                            <div className="box-category box-cate-featured box-cate-featured-vertical">
                                <hgroup className="width_common title-box-category cuoi">
                                    <h2 className="parent-cate"><a href="/hai" className="inner-title" title="Hài">Hài</a></h2>
                                    <span className="sub-cate"><a href="/hai/cuoi" title="Cười">Cười</a></span><span className="sub-cate"><a href="/hai/do-vui" title="Đố vui">Đố vui</a></span><span className="sub-cate"><a href="/hai/chuyen-la" title="Chuyện lạ">Chuyện lạ</a></span>
                                </hgroup>
                                <div className="width_common content-box-category">
                                    <article className="item-news full-thumb ">
                                        <div className="thumb-art">
                                            <a href="" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Hai&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" className="thumb thumb-5x3" title="Nữ tài xế né ôtô xuất thần trên đường cao tốc">
                                                <video loop="" muted="" playsinline="" preload="auto" poster="https://i1-vnexpress.vnecdn.net/2021/05/12/ezgifcomgifmaker99-1620787461-4808-1620787472.gif?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bHPbgW15dUjcPLgG_61X7Q&amp;t=image" className="lazy thumb-gif lazied" src="https://i1-vnexpress.vnecdn.net/2021/05/12/ezgifcomgifmaker99-1620787461-4808-1620787472.gif?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=5q0lBitv5Uzk9naMWd16gw&amp;t=video">
                                                </video>
                                            </a>
                                        </div>
                                        <div className="width_common box-info-news">
                                            <h3 className="title-news"><a href="" title="Nữ tài xế né ôtô xuất thần trên đường cao tốc">Nữ tài xế né
                                                    ôtô xuất thần trên đường cao tốc</a>
                                            </h3>
                                            <p className="description">
                                                <a href="" title="Nữ tài xế né ôtô xuất thần trên đường cao tốc">
                                                    <span className="location-stamp">Trung Quốc</span>Lỡ đi ngược chiều vào
                                                    cao
                                                    tốc, nữ tài xế bình tĩnh áp dụng kỹ năng được học để luồn lách giữa
                                                    dòng
                                                    xe cộ.
                                                </a>
                                                <span className="meta-news">
                                                    <a className="count_cmt" href="" style={{ display: 'none'}}>
                                                        <svg className="ic ic-comment">
                                                            <use ></use>
                                                        </svg>
                                                        <span className="font_icon widget-comment-4276719-1"></span>
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
                                    </article>
                                    <div className="sub-news-cate">
                                        <article className="item-news">
                                            <h3 className="title-news"><a href="" title="Chạy té khói vì mang hổ giả dọa đàn bò">Chạy
                                                    té khói vì mang hổ giả dọa đàn bò</a></h3>
                                            <p className="description">
                                                <a href="" title="Chạy té khói vì mang hổ giả dọa đàn bò">
                                                    Dọa đàn bò, anh chàng bị một con trong đàn đuổi theo, cuối cùng phải
                                                    vứt
                                                    cả hổ giả để chạy thoát thân.
                                                </a>
                                                <span className="meta-news">
                                                    <a className="count_cmt" href="" style={{ display: 'none'}}>
                                                        <svg className="ic ic-comment">
                                                            <use ></use>
                                                        </svg>
                                                        <span className="font_icon widget-comment-4275930-1">4</span>
                                                    </a>
                                                </span>
                                            </p>
                                        </article>
                                        <article className="item-news">
                                            <h3 className="title-news"><a href="" title="Quân lính 'gông cổ' du khách không mang khẩu trang">Quân lính
                                                    'gông cổ' du khách không mang khẩu
                                                    trang</a></h3>
                                            <p className="description">
                                                <a href="" title="Quân lính 'gông cổ' du khách không mang khẩu trang">
                                                    <span className="location-stamp">Trung Quốc</span>Bao đại nhân có lệnh,
                                                    người nào không mang khẩu trang sẽ bị áp giải đi diễu phố để thị
                                                    chúng,
                                                    Ngươi đã biết tội của mình chưa?
                                                </a>
                                                <span className="meta-news">
                                                    <a className="count_cmt" href="" style={{ display: 'none'}}>
                                                        <svg className="ic ic-comment">
                                                            <use ></use>
                                                        </svg>
                                                        <span className="font_icon widget-comment-4276777-1">1</span>
                                                    </a>
                                                </span>
                                            </p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="_havien2_2" className="lazier hidden"></div>
                    </div>
                </div>
            </div>
            <div className="col-right col-300">
                <div className="item-box-cate">
                    <div className="box-category box-shop-sell box-shop-sell-vertical box-wiki-kidlab">
                        <div className="width_common box-ewiki animated animatedFadeInUp fadeInUp">
                            <hgroup className="width_common title-box-category title-box-small">
                                <h4 className="parent-cate"><a title="Rao vặt" rel="nofollow" href="" className="inner-title">Rao vặt</a></h4>
                                <div className="swiper-button-box swiper-button-box-next swiper-button-next-fsell" aria-label="Next slide" aria-disabled="false">
                                    <svg className="ic ic-arrow-right">
                                        <use ></use>
                                    </svg>
                                </div>
                                <div className="swiper-button-box swiper-button-box-prev swiper-button-prev-fsell" aria-label="Previous slide" aria-disabled="false">
                                    <svg className="ic ic-arrow-left">
                                        <use ></use>
                                    </svg>
                                </div>
                            </hgroup>
                            <div className="width_common wrap-slide-business">
                                <div className="swiper-container swiper-container-horizontal swiper-container-multirow" id="js_slider_fsell">
                                    <div className="swiper-wrapper" style={{width: '1292px', transform: 'translate3d(-646px, 0px, 0px)'}}>
                                        <article className="swiper-slide item-news"  style={{order: '0', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="" className="thumb thumb-5x3">

                                                    <picture>
                                                        <img loading="lazy" alt="Thưởng 1 tỷ đồng nếu tìm thấy ghế massage cao cấp hơn 919X" className="lazy lazied" src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=b8Hczp9BcP-INO0k3VISCQ" data-src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=b8Hczp9BcP-INO0k3VISCQ">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="" title="Thưởng 1 tỷ đồng nếu tìm thấy ghế massage cao cấp hơn 919X">Thưởng
                                                    1 tỷ đồng nếu tìm thấy ghế massage cao...</a></h4>
                                            <p className="price_shop">Thỏa thuận</p>
                                        </article>
                                        <article className="swiper-slide item-news swiper-slide-prev"  style={{webkitboxordinalgroup: '4', order: '4', margintop: '15px', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="ngan-hang-thanh-ly-6-lo-goc-30-nen-dat-lien-ke-aeon-mall-binh-tan-2378628.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378628" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Ngân hàng thanh lý 6 lô góc, 30 nền đất liền kề Aeon Mall Bình Tân" className="lazy lazied" src="https://i-raovat.vnecdn.net/2021/05/12/9f221428_1620792661.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=OeB8b6Vb-I2USFx_eqQPiA" data-src="https://i-raovat.vnecdn.net/2021/05/12/9f221428_1620792661.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=OeB8b6Vb-I2USFx_eqQPiA">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="ngan-hang-thanh-ly-6-lo-goc-30-nen-dat-lien-ke-aeon-mall-binh-tan-2378628.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378628" title="Ngân hàng thanh lý 6 lô góc, 30 nền đất liền kề Aeon Mall Bình Tân">Ngân
                                                    hàng thanh lý 6 lô góc, 30 nền đất...</a></h4>
                                            <p className="price_shop">1 tỷ 650 triệu</p>
                                        </article>
                                        <article className="swiper-slide item-news swiper-slide-active"  style={{webkitboxordinalgroup: '8', order: '8', margintop: '15px', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="ban-nha-go-vuon-rau-view-dep-thung-lung-va-tp-bao-loc-2378567.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378567" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Bán nhà gỗ, vườn rau view đẹp thung lũng và TP Bảo Lộc" className="lazy lazied" src="https://i-raovat.vnecdn.net/2021/05/12/19d8ac0b_1620773571.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=FB7mDTR1PYKaIKSha0-DvA" data-src="https://i-raovat.vnecdn.net/2021/05/12/19d8ac0b_1620773571.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=FB7mDTR1PYKaIKSha0-DvA">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="ban-nha-go-vuon-rau-view-dep-thung-lung-va-tp-bao-loc-2378567.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378567" title="Bán nhà gỗ, vườn rau view đẹp thung lũng và TP Bảo Lộc">Bán
                                                    nhà
                                                    gỗ, vườn rau view đẹp thung lũng và...</a></h4>
                                            <p className="price_shop">1 tỷ 550 triệu</p>
                                        </article>
                                        <article className="swiper-slide item-news swiper-slide-next" data-swiper-row="0" style={{webkitboxordinalgroup: '1', order: '1', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="ban-nha-mt-tran-khanh-du-quan-1-dt-4x17-2378656.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378656" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt=" Bán nhà MT Trần Khánh Dư Quận 1 DT 4x17" className="lazy lazied" src="https://i-raovat.vnecdn.net/2021/05/12/da89ee3a_1620806905.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=ZBlJt2skJffQuyQMJtxELQ" data-src="https://i-raovat.vnecdn.net/2021/05/12/da89ee3a_1620806905.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=ZBlJt2skJffQuyQMJtxELQ">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="ban-nha-mt-tran-khanh-du-quan-1-dt-4x17-2378656.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378656" title=" Bán nhà MT Trần Khánh Dư Quận 1 DT 4x17"> Bán nhà MT Trần
                                                    Khánh
                                                    Dư Quận 1 DT...</a></h4>
                                            <p className="price_shop">19 tỷ 980 triệu</p>
                                        </article>
                                        <article className="swiper-slide item-news" style={{webkitboxordinalgroup: '5',order: '5', margintop: '15px', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="ban-nha-phan-dinh-phung-6x10-1t2l-san-thuong-nha-rong-dep-2378633.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378633" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Bán nhà Phan Đình Phùng 6x10 1T2L sân thượng nhà rộng đẹp" className="lazy lazied" src="https://i-raovat.vnecdn.net/2021/05/12/460ea044_1620794873.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=pH7ZXvtLeLGsXOuLJwtvrw" data-src="https://i-raovat.vnecdn.net/2021/05/12/460ea044_1620794873.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=pH7ZXvtLeLGsXOuLJwtvrw">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="ban-nha-phan-dinh-phung-6x10-1t2l-san-thuong-nha-rong-dep-2378633.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378633" title="Bán nhà Phan Đình Phùng 6x10 1T2L sân thượng nhà rộng đẹp">Bán
                                                    nhà Phan Đình Phùng 6x10 1T2L sân thượng nhà...</a></h4>
                                            <p className="price_shop">7 tỷ 900 triệu</p>
                                        </article>
                                        <article className="swiper-slide item-news" style={{webkitboxordinalgroup: '9', order: '9', margintop: '15px', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="ngan-hang-quoc-te-vib-ho-tro-thanh-ly-dat-nen-lien-ke-kdc-ten-lua-2378634.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378634" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Ngân hàng Quốc Tế VIB hỗ trợ thanh lý đất nền liền kề KDC Tên Lửa." className="lazy lazied" src="https://i-raovat.vnecdn.net/2021/05/12/59dd307a_1620794435.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=W5NhD8FvY6QzaWxAaO6Few" data-src="https://i-raovat.vnecdn.net/2021/05/12/59dd307a_1620794435.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=W5NhD8FvY6QzaWxAaO6Few">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="ngan-hang-quoc-te-vib-ho-tro-thanh-ly-dat-nen-lien-ke-kdc-ten-lua-2378634.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378634" title="Ngân hàng Quốc Tế VIB hỗ trợ thanh lý đất nền liền kề KDC Tên Lửa.">Ngân
                                                    hàng Quốc Tế VIB hỗ trợ thanh lý đất...</a></h4>
                                            <p className="price_shop">1 tỷ 600 triệu</p>
                                        </article>
                                        < article className = "swiper-slide item-news"
                                        style = {
                                            {
                                                webkitboxordinalgroup: '2',
                                                order: '2',
                                                width: '308px',
                                                marginright: '15px'
                                            }
                                        }
                                        >
                                            <div className="thumb-art">
                                                <a href="ban-nha-moi-1-tret-4-lau-co-thang-may-hoang-hoa-tham-p5-q-binh-tan-2378637.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378637" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Bán nhà mới 1 trệt 4 lầu có thang máy Hoàng Hoa Thám P5 Q. Bình Tân" className="lazy lazied" src="https://i-raovat.vnecdn.net/2021/05/12/c0774156_1620797095.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=oUXf3EFnrS0cAjhATI2jvg" data-src="https://i-raovat.vnecdn.net/2021/05/12/c0774156_1620797095.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=oUXf3EFnrS0cAjhATI2jvg">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="ban-nha-moi-1-tret-4-lau-co-thang-may-hoang-hoa-tham-p5-q-binh-tan-2378637.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378637" title="Bán nhà mới 1 trệt 4 lầu có thang máy Hoàng Hoa Thám P5 Q. Bình Tân">Bán
                                                    nhà mới 1 trệt 4 lầu có thang máy...</a></h4>
                                            <p className="price_shop">8 tỷ 200 triệu</p>
                                        </article>
                                        < article className = "swiper-slide item-news"
                                        style = {{webkitboxordinalgroup: '6',order: '6',width: '308px',marginright: '15px',marginTop:'15px'}} >
                                            <div className="thumb-art">
                                                <a href="hyundai-santafe-2021-khuyen-mai-lon-cam-ket-gia-tot-he-thong-2074659.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2074659" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Hyundai SantaFe 2021 khuyến mãi lớn cam kết giá tốt hệ thống" className="lazy lazied" src="https://i-raovat.vnecdn.net/2019/06/19/3d6dbbac3eb0b54f2ae04cffa8544cca.jpeg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=e3un-iGaZcq49Yd-P2yD-A" data-src="https://i-raovat.vnecdn.net/2019/06/19/3d6dbbac3eb0b54f2ae04cffa8544cca.jpeg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=e3un-iGaZcq49Yd-P2yD-A">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="hyundai-santafe-2021-khuyen-mai-lon-cam-ket-gia-tot-he-thong-2074659.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2074659" title="Hyundai SantaFe 2021 khuyến mãi lớn cam kết giá tốt hệ thống">Hyundai
                                                    SantaFe 2021 khuyến mãi lớn cam kết giá tốt...</a></h4>
                                            <p className="price_shop">970.000.000 VNĐ</p>
                                        </article>
                                        <article className="swiper-slide item-news" style = {{webkitboxordinalgroup: '10',order: '10',width: '308px',marginright: '15px',marginTop:'15px'}}>
                                            <div className="thumb-art">
                                                <a href="" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Phòng khám Đa khoa Phương Nam Đà Lạt" className="lazy lazied" src="https://i-raovat.vnecdn.net/2021/05/12/e1c6200d_1620806073.png?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=orUwVjocIXBqczjHS4WOFA" data-src="https://i-raovat.vnecdn.net/2021/05/12/e1c6200d_1620806073.png?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=orUwVjocIXBqczjHS4WOFA">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="" title="Phòng khám Đa khoa Phương Nam Đà Lạt">Phòng khám Đa khoa
                                                    Phương
                                                    Nam Đà Lạt</a></h4>
                                            <p className="price_shop">Thỏa thuận</p>
                                        </article>
                                        <article className="swiper-slide item-news" data-swiper-column="3" style = {{webkitboxordinalgroup: '3',order: '3',width: '308px',marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="thu-mua-xe-oto-cu-tinh-binh-duong-2378654.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378654" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Thu mua xe oto cũ tỉnh Bình Dương" className="lazy lazied" src="https://i-raovat.vnecdn.net/2021/05/12/c43ce3ba_1620806519.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=g6pVzOdqrdum5CVRlIvuCQ" data-src="https://i-raovat.vnecdn.net/2021/05/12/c43ce3ba_1620806519.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=g6pVzOdqrdum5CVRlIvuCQ">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="thu-mua-xe-oto-cu-tinh-binh-duong-2378654.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2378654" title="Thu mua xe oto cũ tỉnh Bình Dương">Thu mua xe oto cũ tỉnh
                                                    Bình
                                                    Dương</a></h4>
                                            <p className="price_shop">550.000.000 VNĐ</p>
                                        </article>
                                        < article className = "swiper-slide item-news"
                                        
                                        style = {
                                            {
                                                webkitboxordinalgroup: '7',
                                                order: '7',
                                                width: '308px',
                                                marginright: '15px',
                                                marginTop: '15px'
                                            }
                                        } >
                                            <div className="thumb-art">
                                                <a href="" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Đất mặt tiền đường Huỳnh Tấn Phát, Bến Tre, 495m2, SHR" className="lazy lazied" src="https://i-raovat.vnecdn.net/2021/05/12/7f25d5a2_1620805685.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=gsNtsTPUIsWcRnWw5axflg" data-src="https://i-raovat.vnecdn.net/2021/05/12/7f25d5a2_1620805685.jpg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=gsNtsTPUIsWcRnWw5axflg">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="" title="Đất mặt tiền đường Huỳnh Tấn Phát, Bến Tre, 495m2, SHR">Đất
                                                    mặt
                                                    tiền đường Huỳnh Tấn Phát, Bến Tre, 495m2,...</a></h4>
                                            <p className="price_shop">Thỏa thuận</p>
                                        </article>
                                        <article className="swiper-slide item-news" data-swiper-column="3" style = {{webkitboxordinalgroup: '11',order: '11',width: '308px',marginright: '15px',marginTop:'15px'}}>
                                            <div className="thumb-art">
                                                <a href="hyundai-solati-16-cho-2020-giam-gia-lon-khuyen-mai-hap-dan-2206994.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2206994" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Hyundai Solati 16 chỗ 2020 giảm giá lớn, khuyến mãi hấp dẫn" className="lazy lazied" src="https://i-raovat.vnecdn.net/2020/02/06/430b89488ecf02c9595f484a4060e814.jpeg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=XkxjfIA4tYv65k7alqBaeg" data-src="https://i-raovat.vnecdn.net/2020/02/06/430b89488ecf02c9595f484a4060e814.jpeg?w=268&amp;h=160&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=XkxjfIA4tYv65k7alqBaeg">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="hyundai-solati-16-cho-2020-giam-gia-lon-khuyen-mai-hap-dan-2206994.html?utm_source=&amp;utm_medium=Home&amp;utm_campaign=Quang%20cao%20noi%20bo&amp;utm_content=2206994" title="Hyundai Solati 16 chỗ 2020 giảm giá lớn, khuyến mãi hấp dẫn">Hyundai
                                                    Solati 16 chỗ 2020 giảm giá lớn, khuyến mãi...</a></h4>
                                            <p className="price_shop">905.000.000 VNĐ</p>
                                        </article>
                                    </div>
                                    <span className="swiper-notification" aria-atomic="true"></span>
                                </div>
                            </div>
                        </div>
                        <div id="_fsell_ewiki" className="lazier hidden"></div>
                    </div>
                </div>
                <div className="item-box-cate">
                    <div className="box-category box-shop-sell box-shop-sell-vertical box-wiki-kidlab">
                        <div className="width_common box-ewiki animated animatedFadeInUp fadeInUp">
                            <hgroup className="width_common title-box-category title-box-small">
                                <h4 className="parent-cate"><a href="//ebank" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Ebank&amp;vn_medium=Title-Ebank&amp;vn_term=Desktop" className="inner-title">Ebank</a></h4>
                                <div className="swiper-button-box swiper-button-box-next swiper-button-next-ebank" aria-label="Next slide" aria-disabled="false">
                                    <svg className="ic ic-arrow-right">
                                        <use ></use>
                                    </svg>
                                </div>
                                <div className="swiper-button-box swiper-button-box-prev swiper-button-prev-ebank swiper-button-disabled" aria-label="Previous slide" aria-disabled="true">
                                    <svg className="ic ic-arrow-left">
                                        <use ></use>
                                    </svg>
                                </div>
                            </hgroup>
                            <div className="width_common wrap-slide-business">
                                <div className="swiper-container swiper-container-horizontal swiper-container-multirow" id="js_slider_ebank">
                                    <div className="swiper-wrapper" style={{width: '646px', transform: 'translate3d(0px, 0px, 0px)'}}>
                                        <article className="swiper-slide item-news swiper-slide-active" style={{order: '0', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="kieu-hoi-ve-tp-hcm-nam-nay-du-kien-dat-ky-luc-moi-4276946.html" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" intrinsicsize="120x72" alt="Kiều hối về TP HCM năm nay dự kiến đạt kỷ lục mới" className="lazy lazied" src="" data-src="">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="kieu-hoi-ve-tp-hcm-nam-nay-du-kien-dat-ky-luc-moi-4276946.html" title="Kiều hối về TP HCM năm nay dự kiến đạt kỷ lục mới">Kiều hối
                                                    về TP HCM năm nay dự kiến đạt kỷ lục
                                                    mới</a>
                                            </h4>
                                        </article>
                                        <article className="swiper-slide item-news swiper-slide-next"  style = {{webkitboxordinalgroup: '2',order: '2',width: '308px',marginright: '15px',marginTop:'15px'}}>
                                            <div className="thumb-art">
                                                <a href="hdbank-ho-tro-doanh-nghiep-cung-cap-duoc-thiet-bi-vat-tu-y-te-4276861.html" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" intrinsicsize="120x72" alt="HDBank hỗ trợ doanh nghiệp cung cấp dược, thiết bị vật tư y tế" className="lazy lazied" src="https://i1-kinhdoanh.vnecdn.net/2021/05/12/820-1620790757-3075-1620802922.png?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=cU8B98dWlceXJ6mDT9d-JA" data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/12/820-1620790757-3075-1620802922.png?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=cU8B98dWlceXJ6mDT9d-JA">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="hdbank-ho-tro-doanh-nghiep-cung-cap-duoc-thiet-bi-vat-tu-y-te-4276861.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Ebank&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1" title="HDBank hỗ trợ doanh nghiệp cung cấp dược, thiết bị vật tư y tế">HDBank
                                                    hỗ trợ doanh nghiệp cung cấp dược, thiết
                                                    bị
                                                    vật tư y tế</a></h4>
                                        </article>
                                        <article className="swiper-slide item-news"  style={{webkitboxordinalgroup: '4', order: '4', margintop: '15px', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="agribank-ung-ho-benh-vien-benh-nhiet-doi-trung-uong-1-ty-dong-4276510.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Ebank&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" intrinsicsize="120x72" alt="Agribank ủng hộ Bệnh viện Bệnh Nhiệt đới Trung ương 1 tỷ đồng" className="lazy lazied" src="https://i1-kinhdoanh.vnecdn.net/2021/05/11/agribank-2-1620732759-1193-1620732828.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OFjMAG5wX0epL5-YCbmV_A" data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/11/agribank-2-1620732759-1193-1620732828.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OFjMAG5wX0epL5-YCbmV_A">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="agribank-ung-ho-benh-vien-benh-nhiet-doi-trung-uong-1-ty-dong-4276510.html" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Ebank&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1" title="Agribank ủng hộ Bệnh viện Bệnh Nhiệt đới Trung ương 1 tỷ đồng">Agribank
                                                    ủng hộ Bệnh viện Bệnh Nhiệt đới Trung
                                                    ương 1
                                                    tỷ đồng</a></h4>
                                        </article>
                                        <article className="swiper-slide item-news" data-swiper-row="0" style={{webkitboxordinalgroup: '1', order: '1', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="msb-ung-dung-basel-ii-nang-cao-don-dau-basel-iii-4276213.html" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" intrinsicsize="120x72" alt="MSB ứng dụng Basel II nâng cao, đón đầu Basel III" className="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/11/667-1620703623-3845-1620718434.png?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=MNo-HcxvazZXnpg-MUfOvQ">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="msb-ung-dung-basel-ii-nang-cao-don-dau-basel-iii-4276213.html" title="MSB ứng dụng Basel II nâng cao, đón đầu Basel III">MSB ứng
                                                    dụng Basel II nâng cao, đón đầu Basel
                                                    III</a>
                                            </h4>
                                        </article>
                                        < article className = "swiper-slide item-news"
                                        style = {
                                            {
                                                webkitboxordinalgroup: '3',
                                                order: '3',
                                                width: '308px',
                                                marginright: '15px',
                                                marginTop: '15px'
                                            }
                                        } >
                                            <div className="thumb-art">
                                                <a href="" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" intrinsicsize="120x72" alt="HSBC\: Nợ hộ gia đình ở Việt Nam tăng cao" className="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="" title="HSBC: Nợ hộ gia đình ở Việt Nam tăng cao">HSBC: Nợ hộ gia
                                                    đình ở Việt Nam tăng cao</a></h4>
                                        </article>
                                        <article className="swiper-slide item-news" style={{webkitboxordinalgroup: '5',order: '5', margintop: '15px', width: '308px', marginright: '15px'}}>
                                            <div className="thumb-art">
                                                <a href="" data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Ebank&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=1" className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" intrinsicsize="120x72" alt="'Lót tay' giám đốc ngân hàng 8 tỷ để vay 630 tỷ đồng" className="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/10/scb01161165354956641611653969-4925-5477-1620622509.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Ev5k3rwHGCJRmhjMf2Bong">
                                                    </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a href="" title="'Lót tay' giám đốc ngân hàng 8 tỷ để vay 630 tỷ đồng">'Lót
                                                    tay' giám đốc ngân hàng 8 tỷ để vay 630 tỷ
                                                    đồng</a></h4>
                                        </article>
                                    </div>
                                    <span className="swiper-notification" aria-atomic="true"></span>
                                </div>
                            </div>
                        </div>
                        <div id="_box_ebank" className="lazier hidden"></div>
                    </div>
                </div>
                <div className="item-box-cate">
                    <div className="box-category box-shop-sell box-shop-sell-vertical box-wiki-kidlab">
                        <div className="box-category">
                            <div className="banner-ads">
                                <div id="sis_nativeshop">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="section section_container section_photo">
        <div className="container has_border animated animatedFadeInUp fadeInUp" id="automation_Photo">
            <hgroup className="width_common title-box-category">
                <h2 className="parent-cate">
                    <a href="/anh" className="inner-title" title="Ảnh">Ảnh</a>
                </h2>
            </hgroup>
            <div className="width_common wrap-slide-photo wrap-slide-photo-v2">
                <div className="wrap-thumb width_common">
                    <div className="inner-wrap-thumb width_common">
                        <div className="Thumb-photo swiper-container swiper-container-vertical">
                            <div className="swiper-wrapper" style={{transform: 'translate3d(0px, -2400px, 0px)'}}>
                                <div className="swiper-slide item-news full-thumb swiper-slide-duplicate swiper-slide-duplicate-active"
                                    style={{height: '480px'}}>
                                    <div className="thumb-art">
                                        <a href="" title="9 nàng thơ của Trương Nghệ Mưu" className="thumb thumb-5x3">
                                            <picture>
                                                <img loading="lazy" intrinsicsize="900x540"
                                                    alt="9 nàng thơ của Trương Nghệ Mưu" className="lazy lazied" src="">
                                                </img> </picture>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*
                            <!-- Add Arrows --> */}
                            <div className="swiper-button-vne swiper-button-next-photo" aria-label="Next slide">
                                <svg className="ic ic-arrow-down">
                                    <use class="#Arrow-Right-1"></use>
                                </svg>
                            </div>
                            <div className="swiper-button-vne swiper-button-prev-photo" aria-label="Previous slide">
                                <svg className="ic ic-arrow-up">
                                    <use class="#Arrow-Right-1"></use>
                                </svg>
                            </div>
                            <span className="swiper-notification" aria-atomic="true"></span>
                        </div>
                    </div>
                </div>
                <div className="Title-photo swiper-container swiper-container-vertical swiper-container-thumbs">
                    <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, -1200px, 0px)'}}>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-thumb-active"
                            data-swiper-slide-index="0">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">9 nàng thơ
                                        của
                                        Trương
                                        Nghệ
                                        Mưu</a></h3>
                                <p className="description"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">Lưu Hạo
                                        Tồn,
                                        Đổng
                                        Khiết,
                                        Chu Đông Vũ... thành danh sau khi được Trương Nghệ Mưu chọn đóng phim.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620822600000" timeago-id="1057">2h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002753"
                                        data-itm-source="#vn_source=1002753&amp;vn_campaign=Desktop&amp;vn_medium=Title-GiaiTri&amp;vn_term=Home"
                                        title="Giải trí" href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276742-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-duplicate-next"
                            data-swiper-slide-index="1">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Phong cách
                                        hoa
                                        hậu Thái tại Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Amanda
                                        Obdam -
                                        đại diện Thái Lan tại Miss Universe đang diễn ra tại Mỹ - chuộng váy áo cut-out
                                        phối
                                        túi hàng hiệu.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620828000000" timeago-id="4817">1h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002750" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276314-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="2">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân đọ
                                        sắc cùng thí sinh Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân
                                        tạo dáng bên người đẹp đến từ Brazil, Cộng hòa Dominica và Hoa hậu Hoàn vũ 2019
                                        Zozibini Tunzi trong buổi chụp hình chung.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed" data-category-id="1002726" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276897-1">6</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="3">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Hang động
                                        '99
                                        núi, 99 hồ' giữa rừng Tây Bắc</a></h3>
                                <p className="description"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Động Tiên
                                        Sơn
                                        là một trong những hang đá còn nguyên nét hoang sơ của Tây Bắc, với những thạch
                                        nhũ
                                        đẹp.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed"
                                        data-itm-source="#vn_source=1004088&amp;vn_campaign=Desktop&amp;vn_medium=Title-DuLich&amp;vn_term=Home"
                                        title="Du lịch" href="/">Du lịch</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4275791-3">4</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-prev"
                            data-swiper-slide-index="4">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">'Phố biến
                                        thành sông' sau mưa lớn ở Hà Nội</a></h3>
                                <p className="description"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">Cơn
                                        mưa
                                        lớn
                                        trong hơn một giờ khiến nhiều tuyến phố ở Hà Nội ngập sâu, giao thông ùn tắc,
                                        tối
                                        11/5.</a></p>
                                <p className="meta-news">
                                    <a className="cat hidden c-parsed"></a>
                                    <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276546-3">13</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                            data-swiper-slide-index="0">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">9 nàng thơ
                                        của
                                        Trương
                                        Nghệ
                                        Mưu</a></h3>
                                <p className="description"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">Lưu Hạo
                                        Tồn,
                                        Đổng
                                        Khiết,
                                        Chu Đông Vũ... thành danh sau khi được Trương Nghệ Mưu chọn đóng phim.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620822600000" timeago-id="1059">2h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002753"
                                        data-itm-source="#vn_source=1002753&amp;vn_campaign=Desktop&amp;vn_medium=Title-GiaiTri&amp;vn_term=Home"
                                        title="Giải trí" href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276742-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-next" data-swiper-slide-index="1">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Phong cách
                                        hoa
                                        hậu Thái tại Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Amanda
                                        Obdam -
                                        đại diện Thái Lan tại Miss Universe đang diễn ra tại Mỹ - chuộng váy áo cut-out
                                        phối
                                        túi hàng hiệu.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620828000000" timeago-id="4847">1h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002750" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276314-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news" data-swiper-slide-index="2">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân đọ
                                        sắc cùng thí sinh Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân
                                        tạo dáng bên người đẹp đến từ Brazil, Cộng hòa Dominica và Hoa hậu Hoàn vũ 2019
                                        Zozibini Tunzi trong buổi chụp hình chung.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed" data-category-id="1002726" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276897-1">6</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news" data-swiper-slide-index="3">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Hang động
                                        '99
                                        núi, 99 hồ' giữa rừng Tây Bắc</a></h3>
                                <p className="description"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Động Tiên
                                        Sơn
                                        là một trong những hang đá còn nguyên nét hoang sơ của Tây Bắc, với những thạch
                                        nhũ
                                        đẹp.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed"
                                        data-itm-source="#vn_source=1004088&amp;vn_campaign=Desktop&amp;vn_medium=Title-DuLich&amp;vn_term=Home"
                                        title="Du lịch" href="/">Du lịch</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4275791-3">4</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate-prev" data-swiper-slide-index="4">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">'Phố biến
                                        thành sông' sau mưa lớn ở Hà Nội</a></h3>
                                <p className="description"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">Cơn
                                        mưa
                                        lớn
                                        trong hơn một giờ khiến nhiều tuyến phố ở Hà Nội ngập sâu, giao thông ùn tắc,
                                        tối
                                        11/5.</a></p>
                                <p className="meta-news">
                                    <a className="cat hidden c-parsed"></a>
                                    <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276546-3">13</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-duplicate-active swiper-slide-thumb-active"
                            data-swiper-slide-index="0">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">9 nàng thơ
                                        của
                                        Trương
                                        Nghệ
                                        Mưu</a></h3>
                                <p className="description"><a href="" title="9 nàng thơ của Trương Nghệ Mưu">Lưu Hạo
                                        Tồn,
                                        Đổng
                                        Khiết,
                                        Chu Đông Vũ... thành danh sau khi được Trương Nghệ Mưu chọn đóng phim.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620822600000" timeago-id="1061">2h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002753"
                                        data-itm-source="#vn_source=1002753&amp;vn_campaign=Desktop&amp;vn_medium=Title-GiaiTri&amp;vn_term=Home"
                                        title="Giải trí" href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276742-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate swiper-slide-duplicate-next"
                            data-swiper-slide-index="1">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Phong cách
                                        hoa
                                        hậu Thái tại Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Phong cách hoa hậu Thái tại Miss Universe">Amanda
                                        Obdam -
                                        đại diện Thái Lan tại Miss Universe đang diễn ra tại Mỹ - chuộng váy áo cut-out
                                        phối
                                        túi hàng hiệu.</a></p>
                                <p className="meta-news">
                                    <span className="time-public"><span datetime="1620828000000" timeago-id="4873">1h
                                            trước</span></span>
                                    <a className="cat c-parsed" data-category-id="1002750" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276314-1"></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="2">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân đọ
                                        sắc cùng thí sinh Miss Universe</a></h3>
                                <p className="description"><a href=""
                                        title="Khánh Vân đọ sắc cùng thí sinh Miss Universe">Khánh
                                        Vân
                                        tạo dáng bên người đẹp đến từ Brazil, Cộng hòa Dominica và Hoa hậu Hoàn vũ 2019
                                        Zozibini Tunzi trong buổi chụp hình chung.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed" data-category-id="1002726" title="Giải trí"
                                        href="/giai-tri">Giải trí</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276897-1">6</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="3">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Hang động
                                        '99
                                        núi, 99 hồ' giữa rừng Tây Bắc</a></h3>
                                <p className="description"><a href=""
                                        title="Hang động '99 núi, 99 hồ' giữa rừng Tây Bắc">Động Tiên
                                        Sơn
                                        là một trong những hang đá còn nguyên nét hoang sơ của Tây Bắc, với những thạch
                                        nhũ
                                        đẹp.</a></p>
                                <p className="meta-news">
                                    <a className="cat c-parsed" title="Du lịch" href="/">Du
                                        lịch</a>
                                    <a className="count_cmt" href="" style={{display: 'none'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4275791-3">4</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide item-news swiper-slide-duplicate" data-swiper-slide-index="4">
                            <div className="width_common box-info-news">
                                <h3 className="title-news"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">'Phố biến
                                        thành sông' sau mưa lớn ở Hà Nội</a></h3>
                                <p className="description"><a href=""
                                        title="'Phố biến thành sông' sau mưa lớn ở Hà Nội">Cơn
                                        mưa
                                        lớn
                                        trong hơn một giờ khiến nhiều tuyến phố ở Hà Nội ngập sâu, giao thông ùn tắc,
                                        tối
                                        11/5.</a></p>
                                <p className="meta-news">
                                    <a className="cat hidden c-parsed"></a>
                                    <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                        <svg className="ic ic-comment">
                                            <use class="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                    <path
                                                        d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                    </path>
                                                </svg></use>
                                        </svg>
                                        <span className="font_icon widget-comment-4276546-3">13</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className="swiper-notification" aria-atomic="true"></span>
                </div>
            </div>
        </div>
        <div id="_photos" className="lazier hidden"></div>
    </section>
<section className="section section_container">
    <div className="container has_border flexbox">
        <div className="col-left col-770">
            <div className="box-category has-border box-info animated animatedFadeInUp fadeInUp">
                <hgroup className="width_common title-box-category infographics">
                    <h2 className="parent-cate"><a href="/infographics" className="inner-title"
                            title="Infographics">Infographics</a></h2>
                </hgroup>
                <div className="width_common content-box-category flexbox">
                    <article className="item-news full-thumb">
                        <div className="thumb-art">
                            <a href="" className="thumb thumb-5x3"
                                title="Quá trình mảnh tên lửa Trung Quốc rơi mất kiểm soát">
                                <picture>
                                    <img loading="lazy" intrinsicsize="380x228"
                                        alt="Quá trình mảnh tên lửa Trung Quốc rơi mất kiểm soát"
                                        className="lazy lazied"
                                        src="https://i1-vnexpress.vnecdn.net/2021/05/12/Ten-lua-roi-set.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=aExKojy2I9UoPhr30I9RyA"
                                        data-src="https://i1-vnexpress.vnecdn.net/2021/05/12/Ten-lua-roi-set.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=aExKojy2I9UoPhr30I9RyA">
                                    </img> </picture>
                                <span className="icon_thumb_videophoto"><svg className="ic ic-infographic">
                                        <use f="#Infographic"></use>
                                    </svg></span>
                            </a>
                        </div>
                        <h3 className="title-news">
                            <a title="Quá trình mảnh tên lửa Trung Quốc rơi mất kiểm soát" href="">Quá trình
                                mảnh tên lửa Trung Quốc rơi mất kiểm soát</a>
                            <span className="meta-news">
                                <a className="count_cmt" href="" style={{display: 'none'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                <path
                                                    d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                </path>
                                            </svg></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4276764-4">6</span>
                                </a>
                            </span>
                        </h3>
                    </article>
                    <article className="item-news full-thumb">
                        <div className="thumb-art">
                            <a href="" className="thumb thumb-5x3"
                                title="10 ôtô bán nhiều nhất tháng 4 - Accent vượt Vios">
                                <picture>
                                    <img loading="lazy" intrinsicsize="380x228"
                                        alt="10 ôtô bán nhiều nhất tháng 4 - Accent vượt Vios" className="lazy lazied"
                                        src="https://i1-vnexpress.vnecdn.net/2021/05/12/settop-jpeg.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=IpDp_y1DcUNCbadiy_EJVQ"
                                        data-src="https://i1-vnexpress.vnecdn.net/2021/05/12/settop-jpeg.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=IpDp_y1DcUNCbadiy_EJVQ">
                                    </img> </picture>
                                <span className="icon_thumb_videophoto"><svg className="ic ic-infographic">
                                        <use f="#Infographic"></use>
                                    </svg></span>
                            </a>
                        </div>
                        <h3 className="title-news">
                            <a title="10 ôtô bán nhiều nhất tháng 4 - Accent vượt Vios" href="">10 ôtô bán nhiều
                                nhất tháng 4 - Accent vượt Vios</a>
                            <span className="meta-news">
                                <a className="count_cmt" href="" style={{display: 'inline-block'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"><svg id="Comment-Reg" viewBox="0 0 32 32">
                                                <path
                                                    d="M2 0h28c0.53 0 1.039 0.211 1.414 0.586s0.586 0.884 0.586 1.414v20c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586h-10l-12 8v-8h-6c-0.53 0-1.039-0.211-1.414-0.586s-0.586-0.884-0.586-1.414v-20c0-0.53 0.211-1.039 0.586-1.414s0.884-0.586 1.414-0.586v0z">
                                                </path>
                                            </svg></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4276686-4">262</span>
                                </a>
                            </span>
                        </h3>
                    </article>
                </div>
            </div>
            <div className="lazier hidden"></div>
            <div className="box-category box-ebank-qt">
                <div className="width_common inner-box flexbox">
                    <div className="box-right box-qt animated animatedFadeInUp fadeInUp">
                        <hgroup className="width_common title-box-category title-box-small">
                            <h4 className="parent-cate"><span className="inner-title">Sự kiện</span></h4>
                            <div className="swiper-button-box swiper-button-box-next swiper-button-next-qt"
                                aria-label="Next slide" aria-disabled="false">
                                <svg className="ic ic-arrow-right">
                                    <use f="#Arrow-Right-1"></use>
                                </svg>
                            </div>
                            <div className="swiper-button-box swiper-button-box-prev swiper-button-prev-qt swiper-button-disabled"
                                aria-label="Previous slide" aria-disabled="true">
                                <svg className="ic ic-arrow-left">
                                    <use f="#Arrow-Left-1"></use>
                                </svg>
                            </div>
                        </hgroup>
                        <div className="width_common wrap-slide-bank-qt">
                            <div className="swiper-container swiper-container-horizontal swiper-container-multirow"
                                id="js_slider_quatang">
                                <div className="swiper-wrapper"
                                    style={{width: '1416px', transform: 'translate3d(0px, 0px, 0px)'}}>
                                    <article className="swiper-slide item-news swiper-slide-active"
                                        style={{order: '0', width: '334px', marginright: '20px'}}>
                                        <div className="thumb-art">
                                            <a href="/cto-summit"
                                                title="CTO Summit - Diễn đàn giám đốc công nghệ Việt Nam"
                                                className="thumb thumb-5x3">
                                                <picture>
                                                    <img loading="lazy"
                                                        alt="CTO Summit - Diễn đàn giám đốc công nghệ Việt Nam"
                                                        className="lazy lazied"
                                                        src="https://i1-vnexpress.vnecdn.net/2021/05/10/CTO350x210jpg-1620631038.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Kj_jG-Vubp3EdH8Lp2hL-g"
                                                        data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/CTO350x210jpg-1620631038.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Kj_jG-Vubp3EdH8Lp2hL-g">
                                                    </img> </picture>
                                            </a>
                                        </div>
                                        <h4 className="title-news"><a
                                                title="CTO Summit - Diễn đàn giám đốc công nghệ Việt Nam"
                                                href="/cto-summit">CTO Summit - Diễn đàn giám đốc công nghệ Việt
                                                Nam</a>
                                        </h4>
                                    </article>
                                    <article className="swiper-slide item-news swiper-slide-next" data-swiper-column="0"
                                        style={{webkitboxordinalgroup: '4', order: '4', margintop: '20px', width: '334px', marginright: '20px'}}>
                                        <div className="thumb-art">
                                            <a href="/debater" title="Cuộc thi tranh biện " the="" debate=""
                                                className="thumb thumb-5x3">
                                                <picture>
                                                    <img loading="lazy" alt="Cuộc thi tranh biện " the="" debate=""
                                                        className="lazy lazied"
                                                        src="https://i1-vnexpress.vnecdn.net/2021/05/10/bobannerwebdebate350x210350x210jpg-1620631172.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=biwGNw1zcUld4YgXCJjSiQ"
                                                        data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/bobannerwebdebate350x210350x210jpg-1620631172.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=biwGNw1zcUld4YgXCJjSiQ">
                                                    </img> </picture>
                                            </a>
                                        </div>
                                        <h4 className="title-news"><a title="Cuộc thi tranh biện " the="" debate=""
                                                href="/debater">Cuộc thi tranh biện "The
                                                Debate Challenge"
                                                2021</a>
                                        </h4>
                                    </article>
                                    < article className="swiper-slide item-news" style={ { webkitboxordinalgroup: '1' ,
                                        order: '1' , width: '334px' , marginright: '20px' } }>
                                        <div className="thumb-art">
                                            <a href="https://vm./nha-trang-2021"
                                                title="VnExpress Marathon Marvelous Nha Trang 2021"
                                                className="thumb thumb-5x3">
                                                <picture>
                                                    <img loading="lazy"
                                                        alt="VnExpress Marathon Marvelous Nha Trang 2021"
                                                        className="lazy lazied"
                                                        src="https://i1-vnexpress.vnecdn.net/2021/03/30/NhaTrang1jpg-1617103932.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=72J4mTmPm4XXfjOWvi1hcA"
                                                        data-src="https://i1-vnexpress.vnecdn.net/2021/03/30/NhaTrang1jpg-1617103932.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=72J4mTmPm4XXfjOWvi1hcA">
                                                    </img> </picture>
                                            </a>
                                        </div>
                                        <h4 className="title-news"><a
                                                title="VnExpress Marathon Marvelous Nha Trang 2021"
                                                href="https://vm./nha-trang-2021">VnExpress Marathon Marvelous Nha
                                                Trang 2021</a>
                                        </h4>
                                        </article>
                                        < article className="swiper-slide item-news" style={ {
                                            webkitboxordinalgroup: '5' , order: '5' , margintop: '20px' , width: '334px'
                                            , marginright: '20px' } }>
                                            <div className="thumb-art">
                                                <a href="" title="Giải chạy ảo Run for Pride"
                                                    className="thumb thumb-5x3">
                                                    <picture>
                                                        <img loading="lazy" alt="Giải chạy ảo Run for Pride"
                                                            className="lazy lazied"
                                                            src="https://i1-vnexpress.vnecdn.net/2021/05/10/VraceRunforPride350x210jpg-1620631109.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qEvViCWaXA5jHlSgk7y3ow"
                                                            data-src="https://i1-vnexpress.vnecdn.net/2021/05/10/VraceRunforPride350x210jpg-1620631109.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=qEvViCWaXA5jHlSgk7y3ow">
                                                        </img> </picture>
                                                </a>
                                            </div>
                                            <h4 className="title-news"><a title="Giải chạy ảo Run for Pride"
                                                    href="">Giải
                                                    chạy ảo Run for Pride</a>
                                            </h4>
                                            </article>
                                            < article className="swiper-slide item-news" style={ {
                                                webkitboxordinalgroup: '2' , order: '2' , width: '334px' ,
                                                marginright: '20px' } }>
                                                <div className="thumb-art">
                                                    <a href="https://vm./ha-noi-2021"
                                                        title="VnExpress Marathon Hanoi Midnight 2021"
                                                        className="thumb thumb-5x3">
                                                        <picture>
                                                            <img loading="lazy"
                                                                alt="VnExpress Marathon Hanoi Midnight 2021"
                                                                className="lazy"
                                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                data-src="https://i1-vnexpress.vnecdn.net/2021/02/21/DONG2590jpg-1613878655.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=JCypuHDllRWDmKaRrzTdhA">
                                                            </img> </picture>
                                                    </a>
                                                </div>
                                                <h4 className="title-news"><a
                                                        title="VnExpress Marathon Hanoi Midnight 2021"
                                                        href="https://vm./ha-noi-2021">VnExpress Marathon Hanoi Midnight
                                                        2021</a></h4>
                                                </article>
                                                < article className="swiper-slide item-news" style={ {
                                                    webkitboxordinalgroup: '6' , order: '6' , margintop: '20px' ,
                                                    width: '334px' , marginright: '20px' } }>
                                                    <div className="thumb-art">
                                                        <a href="https://vm./ha-long-2021"
                                                            title="VnExpress Marathon Amazing Halong 2021"
                                                            className="thumb thumb-5x3">
                                                            <picture>
                                                                <img loading="lazy"
                                                                    alt="VnExpress Marathon Amazing Halong 2021"
                                                                    className="lazy"
                                                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                    data-src="https://i1-vnexpress.vnecdn.net/2021/01/25/516105334491200x0jpg-1611537179.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bjqw2eGZQFrfnQw0KK588Q">
                                                                </img> </picture>
                                                        </a>
                                                    </div>
                                                    <h4 className="title-news"><a
                                                            title="VnExpress Marathon Amazing Halong 2021"
                                                            href="https://vm./ha-long-2021"
                                                            data-itm-source="#vn_source=VnExpress&amp;vn_medium=Item-5&amp;vn_campaign=Box-VeSuKien">VnExpress
                                                            Marathon Amazing Halong 2021</a></h4>
                                                    </article>
                                                    < article className="swiper-slide item-news" style={ {
                                                        webkitboxordinalgroup: '3' , order: '3' , width: '334px' ,
                                                        marginright: '20px' } }>
                                                        <div className="thumb-art">
                                                            <a href="https://vm./quy-nhon-2021"
                                                                title="VnExpress Marathon Quy Nhơn 2021"
                                                                className="thumb thumb-5x3">
                                                                <picture>
                                                                    <img loading="lazy"
                                                                        alt="VnExpress Marathon Quy Nhơn 2021"
                                                                        className="lazy"
                                                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                                        data-src="https://i1-vnexpress.vnecdn.net/2020/11/10/278481604915294jpg-1605004576.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=YmhQypNXqmsyfy5pzIIMwA">
                                                                    </img> </picture>
                                                            </a>
                                                        </div>
                                                        <h4 className="title-news"><a
                                                                title="VnExpress Marathon Quy Nhơn 2021"
                                                                href="https://vm./quy-nhon-2021"
                                                                data-itm-source="#vn_source=VnExpress&amp;vn_medium=Item-6&amp;vn_campaign=Box-VeSuKien">VnExpress
                                                                Marathon Quy Nhơn 2021</a></h4>
                                                        </article>
                                </div>
                                <span className="swiper-notification" aria-atomic="true"></span>
                            </div>
                        </div>
                    </div>
                    <div id="_middle_box" className="lazier hidden"></div>
                </div>
            </div>
            <div className="box-category box-xemnhieu">
                <hgroup className="width_common title-box-category">
                    <h2 className="parent-cate active"><a title="Xem nhiều" href="/" className="inner-title">Xem
                            nhiều</a></h2>
                </hgroup>
                <div className="width_common list-top-view">

                    <article className="item-news">
                        <span className="number-top-view">1</span>
                        <h3 className="title-news"><a
                                href="https://vnexpress.net/them-127-ca-covid-19-trong-nuoc-4278757.html"
                                data-itm-source="#vn_source=Home&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=0"
                                title="Thêm 127 ca Covid-19 trong nước">Thêm 127 ca Covid-19 trong
                                nước</a>
                            <span className="meta-news">

                                <a className="count_cmt"
                                    href="https://vnexpress.net/them-127-ca-covid-19-trong-nuoc-4278757.html#box_comment_vne"
                                    style={{display: 'inline-block'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4278757-1">101</span>
                                </a>

                            </span>
                        </h3>
                    </article>

                    <article className="item-news">
                        <span className="number-top-view">2</span>
                        <h3 className="title-news"><a
                                href="https://vnexpress.net/hang-nghin-chung-minh-nhan-dan-bi-rao-ban-tren-mang-4278639.html"
                                data-itm-source="#vn_source=Home&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=0"
                                title="Hàng nghìn chứng minh nhân dân bị rao bán trên mạng">Hàng
                                nghìn chứng minh nhân dân bị rao bán trên mạng</a>
                            <span className="meta-news">

                                <a className="count_cmt"
                                    href="https://vnexpress.net/hang-nghin-chung-minh-nhan-dan-bi-rao-ban-tren-mang-4278639.html#box_comment_vne"
                                    style={{display: 'inline-block'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4278639-1">102</span>
                                </a>

                            </span>
                        </h3>
                    </article>

                    <article className="item-news">
                        <span className="number-top-view">3</span>
                        <h3 className="title-news"><a
                                href="https://vnexpress.net/nhieu-nguoi-o-khu-cach-ly-de-doa-bac-si-4278461.html"
                                data-itm-source="#vn_source=Home&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=0"
                                title="Nhiều người ở khu cách ly đe doạ bác sĩ">Nhiều người ở khu
                                cách ly đe doạ bác sĩ</a>
                            <span className="meta-news">

                                <a className="count_cmt"
                                    href="https://vnexpress.net/nhieu-nguoi-o-khu-cach-ly-de-doa-bac-si-4278461.html#box_comment_vne"
                                    style={{display: 'inline-block'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4278461-1">204</span>
                                </a>

                            </span>
                        </h3>
                    </article>

                    <article className="item-news">
                        <span className="number-top-view">4</span>
                        <h3 className="title-news"><a
                                href="https://vnexpress.net/benh-nhan-covid-19-89-tuoi-tu-vong-4278586.html"
                                data-itm-source="#vn_source=Home&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-4&amp;vn_term=Desktop&amp;vn_thumb=0"
                                title="Bệnh nhân Covid-19 89 tuổi tử vong">Bệnh nhân Covid-19 89
                                tuổi tử vong</a>
                            <span className="meta-news">

                                <a className="count_cmt"
                                    href="https://vnexpress.net/benh-nhan-covid-19-89-tuoi-tu-vong-4278586.html#box_comment_vne"
                                    style={{display: 'inline-block'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4278586-1">43</span>
                                </a>

                            </span>
                        </h3>
                    </article>

                    <article className="item-news">
                        <span className="number-top-view">5</span>
                        <h3 className="title-news"><a
                                href="https://vnexpress.net/cong-nhan-ban-so-bao-hiem-4273744.html"
                                data-itm-source="#vn_source=Home&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-5&amp;vn_term=Desktop&amp;vn_thumb=0"
                                title="Công nhân 'bán' sổ bảo hiểm">Công nhân 'bán' sổ bảo
                                hiểm</a>
                            <span className="meta-news">

                                <a className="count_cmt"
                                    href="https://vnexpress.net/cong-nhan-ban-so-bao-hiem-4273744.html#box_comment_vne"
                                    style={{display: 'inline-block'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4273744-1">154</span>
                                </a>

                            </span>
                        </h3>
                    </article>

                    <article className="item-news">
                        <span className="number-top-view">6</span>
                        <h3 className="title-news"><a
                                href="https://vnexpress.net/nu-dieu-duong-bi-benh-nhan-covid-19-de-doa-bop-co-4278673.html"
                                data-itm-source="#vn_source=Home&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-6&amp;vn_term=Desktop&amp;vn_thumb=0"
                                title="Nữ điều dưỡng bị bệnh nhân Covid-19 đe dọa, bóp cổ">Nữ điều
                                dưỡng bị bệnh nhân Covid-19 đe dọa, bóp cổ</a>
                            <span className="meta-news">

                                <a className="count_cmt"
                                    href="https://vnexpress.net/nu-dieu-duong-bi-benh-nhan-covid-19-de-doa-bop-co-4278673.html#box_comment_vne"
                                    style={{display: 'inline-block'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4278673-1">203</span>
                                </a>

                            </span>
                        </h3>
                    </article>

                    <article className="item-news">
                        <span className="number-top-view">7</span>
                        <h3 className="title-news"><a href="html"
                                data-itm-source="#vn_source=Home&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=0"
                                title="Thêm 20 ca nhiễm trong nước">Thêm 20 ca nhiễm trong
                                nước</a>
                            <span className="meta-news">

                                <a className="count_cmt" href="html#box_comment_vne" style={{display: 'inline-block'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4278378-1">45</span>
                                </a>

                            </span>
                        </h3>
                    </article>

                    <article className="item-news">
                        <span className="number-top-view">8</span>
                        <h3 className="title-news"><a
                                href="https://vnexpress.net/tau-trung-quoc-dap-thanh-cong-xuong-sao-hoa-4278449.html"
                                data-itm-source="#vn_source=Home&amp;vn_campaign=Box-XemNhieuNhat&amp;vn_medium=Item-8&amp;vn_term=Desktop&amp;vn_thumb=0"
                                title="Tàu Trung Quốc đáp thành công xuống sao Hỏa">Tàu Trung Quốc
                                đáp thành công xuống sao Hỏa</a>
                            <span className="meta-news">

                                <a className="count_cmt"
                                    href="https://vnexpress.net/tau-trung-quoc-dap-thanh-cong-xuong-sao-hoa-4278449.html#box_comment_vne"
                                    style={{display: 'inline-block'}}>
                                    <svg className="ic ic-comment">
                                        <use f="#Comment-Reg"></use>
                                    </svg>
                                    <span className="font_icon widget-comment-4278449-1">262</span>
                                </a>

                            </span>
                        </h3>
                    </article>

                </div>
            </div>
            <div id="_xemnhieunhat_v2" className="lazier hidden"></div>
        </div>
        <div class="col-right col-300">
            <div style={{}} class="width_common">
                <div id="vote-32816">
                    <div class="width_common box_category vote_rating_box thamdo box_100 _noresult" id="boxthamdoykien">
                        <div class="width_common title-box-category title-box-small">
                            <h4 class="inner-title">Thăm dò</h4>
                        </div>
                        <div class="content_box_category box_bg_gray width_common">
                            <div class="title_bx width_common">Bạn có nghĩ rằng sau khi được tiêm vắc xin phòng
                                Covid-19, bạn có thể du lịch an toàn không? </div>
                            <div class="item_row_bx width_common" style={{}}>
                                <label for="_i118319" class="label_check">
                                    <input onclick="vneVote.CheckThisVote(this)" id="_i118319" name="answer_32816"
                                        value="118319" type="radio" class="radio_check" />
                                    <span>Có</span>
                                </label>
                            </div>
                            <div class="item_row_bx width_common" style={{}}>
                                <label for="_i118320" class="label_check">
                                    <input onclick="vneVote.CheckThisVote(this)" id="_i118320" name="answer_32816"
                                        value="118320" type="radio" class="radio_check" />
                                    <span>Không</span>
                                </label>
                            </div>
                            <div class="item_row_bx width_common" style={{}}>
                                <label for="_i118321" class="label_check">
                                    <input onclick="vneVote.CheckThisVote(this)" id="_i118321" name="answer_32816"
                                        value="118321" type="radio" class="radio_check" />
                                    <span>Không biết</span>
                                </label>
                            </div>
                            <div class="box_button width_common">


                                <button class="btn_vne btn_normal btn_blue btn_disable btn_vote_rate"
                                    onclick="goUnicep(this)">Tiếp tục</button>
                                <div class="right flexbox"
                                    style={{alignitems: 'center', justifycontent: 'flex-end', height: '40px'}}>
                                    <span style={{fontsize: '13px', lineheight:'150%',color:'#999999'}}>Hợp tác
                                        bởi:</span>
                                    <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v384/graphics/logo-unicef.png"
                                        alt="UNICEP" style={{height: '28px', marginleft: '10px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="siteid" name="siteid" value="1003750" />
                    <input type="hidden" id="obj_vote_id_32816" name="obj_vote_id_32816" value="32816" privacy="1"
                        privacy_time="86400" />
                </div>
            </div>
            <div class="lazier hidden" id="_box_vote"></div>
            <ins class="adsbyeclick"></ins>

            <div id="_box_taitro" class="lazier hidden"></div>
            <div class="box-category">
                <div class="banner-ads">
                    <div id="sis_large3">
                        <script>
                            googTagCode.display.push('sis_large3');
                        </script>
                    </div>
                </div>
            </div>
            <div id="_large_3_ov" class="lazier hidden"></div>
        </div>
    </div>
    <div className="container box-news-other-site">
        <div className="inner-box-other-news flexbox">
            <div className="box-item-other-news news-ngoisao" id="news-ngoisao">
                <div className="swiper-container swiper-container-horizontal">
                    <div className="label-site">
                        <a href=""
                            data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Ngoisao&amp;vn_medium=Title-Ngoisao&amp;vn_term=Desktop"
                            className="link-label-site flexbox">
                            <span className="logo-site"><img
                                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v387/v2_2019/pc/graphics/svg_ngoisao.svg"
                                    alt="" /></span>
                            <span className="name-site">Ngôi Sao<span className="text-sm">Về những người nổi
                                    tiếng</span></span>
                        </a>
                    </div>
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                        <article className="swiper-slide item-news full-thumb swiper-slide-active">
                            <div className="thumb-art">
                                <a href="/"
                                    data-itm-source="#vn_source=Home&amp;vn_campaign=Box-NgoiSao&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                    className="thumb thumb-5x3">
                                    <picture>
                                        <img loading="lazy" intrinsicsize="380x228"
                                            alt="Mối bất hòa đến chết không hàn gắn của Adele với bố đẻ"
                                            className="lazy lazied"
                                            src="https://i1-ngoisao.vnecdn.net/2021/05/12/topm-1620814779-8462-1620815934.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=T182ZfckX7V8RiI8C1eRyQ"
                                            data-src="https://i1-ngoisao.vnecdn.net/2021/05/12/topm-1620814779-8462-1620815934.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=T182ZfckX7V8RiI8C1eRyQ">
                                        </img> </picture>
                                    <h4 className="title-news">Mối bất hòa đến chết không hàn gắn của Adele với bố đẻ
                                    </h4>
                                </a>
                            </div>
                        </article>
                        <article className="swiper-slide item-news full-thumb swiper-slide-next">
                            <div className="thumb-art">
                                <a href="/" className="thumb thumb-5x3">
                                    <picture>
                                        <img loading="lazy" intrinsicsize="380x228"
                                            alt="Ngọc Trinh thử nội y tự thiết kế" className="lazy"
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-src="https://i1-ngoisao.vnecdn.net/2021/05/12/trinh-1.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=PAn7fNqMIK4Lrid9ePjYiA">
                                        </img> </picture>
                                    <h4 className="title-news">Ngọc Trinh thử nội y tự thiết kế</h4>
                                </a>
                            </div>
                        </article>
                        <article className="swiper-slide item-news full-thumb">
                            <div className="thumb-art">
                                <a href="/" className="thumb thumb-5x3">
                                    <picture>
                                        <img loading="lazy" intrinsicsize="380x228"
                                            alt="Vợ tìm thấy chồng mất tích 11 năm nhờ TikTok" className="lazy"
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-src="https://i1-ngoisao.vnecdn.net/2021/05/12/53-1620794000-4138-1620794151.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=AlXgDMKpmgR9b1L1DMWY1A">
                                        </img> </picture>
                                    <h4 className="title-news">Vợ tìm thấy chồng mất tích 11 năm nhờ TikTok</h4>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span
                            className="swiper-pagination-bullet swiper-pagination-bullet-active" a=""></span><span
                            className="swiper-pagination-bullet" a=""></span><span className="swiper-pagination-bullet"
                            aria-label="Go to slide 3"></span></div>
                    <span className="swiper-notification" aria-atomic="true"></span>
                </div>
            </div>
            <div className="lazier hidden" id="_othersite_news_ns"></div>
            <div className="box-item-other-news news-ione" id="news-ione">
                <div className="swiper-container swiper-container-horizontal">
                    <div className="label-site">
                        <a href="" className="link-label-site flexbox">
                            <span className="logo-site"><img
                                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v387/v2_2019/pc/graphics/svg_ione.svg"
                                    alt="" /></span>
                            <span className="name-site">iOne<span className="text-sm">Dành cho giới trẻ</span></span>
                        </a>
                    </div>
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                        <article className="swiper-slide item-news full-thumb swiper-slide-active">
                            <div className="thumb-art">
                                <a href="/" className="thumb thumb-5x3">
                                    <picture>
                                        <img loading="lazy" intrinsicsize="380x228"
                                            alt="Ngọc Trinh là nữ hoàng của những chiếc 'quần què', ít ai dám mặc"
                                            className="lazy lazied"
                                            src="https://i1-ione.vnecdn.net/2021/05/12/top-1620805397-2487-1620805506.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Bkg22y9CRT6rPLNzP731qw"
                                            data-src="https://i1-ione.vnecdn.net/2021/05/12/top-1620805397-2487-1620805506.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Bkg22y9CRT6rPLNzP731qw">
                                        </img> </picture>
                                    <h4 className="title-news">Ngọc Trinh là nữ hoàng của những chiếc 'quần què', ít ai
                                        dám
                                        mặc</h4>
                                </a>
                            </div>
                        </article>
                        <article className="swiper-slide item-news full-thumb swiper-slide-next">
                            <div className="thumb-art">
                                <a href="/"
                                    data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Ione&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                    className="thumb thumb-5x3">
                                    <picture>
                                        <img loading="lazy" intrinsicsize="380x228"
                                            alt="Khánh Vân hổ thẹn khi bị so sánh 'showbiz có Vân this, Vân that'"
                                            className="lazy"
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-src="https://i1-ione.vnecdn.net/2021/05/12/page-1620821413-4427-1620821634.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=0i1atAaM393Am72E_Enlcg">
                                        </img> </picture>
                                    <h4 className="title-news">Khánh Vân hổ thẹn khi bị so sánh 'showbiz có Vân this,
                                        Vân
                                        that'</h4>
                                </a>
                            </div>
                        </article>
                        <article className="swiper-slide item-news full-thumb">
                            <div className="thumb-art">
                                <a href="/"
                                    data-itm-source="#vn_source=Home&amp;vn_campaign=Box-Ione&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1"
                                    className="thumb thumb-5x3">
                                    <video loop="" muted="" playsinline="" preload="none"
                                        poster="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        className="lazy thumb-gif">
                                    </video>
                                    <h4 className="title-news">Dáng ngồi của Tzuyu khiến fan xuýt xoa khen ngợi khí chất
                                        thanh lịch</h4>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span
                            className="swiper-pagination-bullet swiper-pagination-bullet-active" a=""></span><span
                            className="swiper-pagination-bullet" a=""></span><span className="swiper-pagination-bullet"
                            aria-label="Go to slide 3"></span></div>
                    <span className="swiper-notification" aria-atomic="true"></span>
                </div>
            </div>
            <div className="lazier hidden" id="_othersite_news_ione"></div>
            <div className="box-item-other-news news-evne" id="news-evne">
                <div className="swiper-container swiper-container-horizontal">
                    <div className="label-site">
                        <a href="" className="link-label-site flexbox">
                            <span className="logo-site">
                                <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v387/v2_2019/pc/graphics/svg_vne.svg"
                                    alt="" /></span>
                            <span className="name-site">VnExpress International<span className="text-sm">All things
                                    Vietnam
                                    and
                                    beyond</span></span>
                        </a>
                    </div>
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                        <article className="swiper-slide item-news full-thumb swiper-slide-active">
                            <div className="thumb-art">
                                <a href="/"
                                    data-itm-source="#vn_source=Home&amp;vn_campaign=Box-International&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1"
                                    className="thumb thumb-5x3">
                                    <picture>
                                        <img loading="lazy" intrinsicsize="380x228"
                                            alt="Fans happy as rock music gets rocking again" className="lazy lazied"
                                            src="https://i1-english.vnecdn.net/2021/05/12/wvv161-3513-1618719195-1756-16-7947-1457-1620787927.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OIG40uPj1z1MI2mKfS9Tew"
                                            data-src="https://i1-english.vnecdn.net/2021/05/12/wvv161-3513-1618719195-1756-16-7947-1457-1620787927.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OIG40uPj1z1MI2mKfS9Tew">
                                        </img> </picture>
                                    <h4 className="title-news">Fans happy as rock music gets rocking again</h4>
                                </a>
                            </div>
                        </article>
                        <article className="swiper-slide item-news full-thumb swiper-slide-next">
                            <div className="thumb-art">
                                <a href="/"
                                    data-itm-source="#vn_source=Home&amp;vn_campaign=Box-International&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1"
                                    className="thumb thumb-5x3">
                                    <picture>
                                        <img loading="lazy" intrinsicsize="380x228"
                                            alt="'Shark Tank' judges bare sexist fangs on reality show" className="lazy"
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-src="https://i1-english.vnecdn.net/2021/05/12/181653832-899206457322725-2920-7571-1376-1620818145.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=PvVOxF26vm571Eotgj_ZQA">
                                        </img> </picture>
                                    <h4 className="title-news">'Shark Tank' judges bare sexist fangs on reality show
                                    </h4>
                                </a>
                            </div>
                        </article>
                        <article className="swiper-slide item-news full-thumb">
                            <div className="thumb-art">
                                <a href="/" className="thumb thumb-5x3">
                                    <picture>
                                        <img loading="lazy" intrinsicsize="380x228"
                                            alt="Invest and take the lead in business, Vietnamese women advised"
                                            className="lazy"
                                            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                            data-src="https://i1-english.vnecdn.net/2021/05/12/WEBshutterstock692207527-16208-7952-6154-1620819016.png?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=9fhzj70Olg_lkUg6zqsr7w">
                                        </img> </picture>
                                    <h4 className="title-news">Invest and take the lead in business, Vietnamese women
                                        advised</h4>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span
                            className="swiper-pagination-bullet swiper-pagination-bullet-active" a=""></span><span
                            className="swiper-pagination-bullet" a=""></span><span className="swiper-pagination-bullet"
                            aria-label="Go to slide 3"></span></div>
                    <span className="swiper-notification" aria-atomic="true"></span>
                </div>
            </div>
            <div className="lazier hidden" id="_othersite_news_evne"></div>
        </div>
    </div>
    <div className="container wrap-box-business fs_parent_box">
        <div className="width_common inner-box-business">
            <div className="box-category box-info-company box-last animated animatedFadeInUp fadeInUp">
                <hgroup className="width_common title-box-category title-box-small">
                    <h2 className="parent-cate">
                        <div className="inner-title">Thông tin doanh nghiệp</div>
                    </h2>
                    <div className="swiper-button-box swiper-button-box-next swiper-button-next-dn"
                        aria-disabled="false">
                        <svg className="ic ic-arrow-right">
                            <use f="#Arrow-Right-1"></use>
                        </svg>
                    </div>
                    <div className="swiper-button-box swiper-button-box-prev swiper-button-prev-dn swiper-button-disabled"
                        aria-label="Previous slide" aria-disabled="true">
                        <svg className="ic ic-arrow-left">
                            <use f="#Arrow-Left-1"></use>
                        </svg>
                    </div>
                </hgroup>
                <div className="width_common wrap-slide-business">
                    <div className="swiper-container width_common swiper-container-horizontal" id="js_slider_company">
                        <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                            <article className="swiper-slide item-news full-thumb swiper-slide-active"
                                style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="Jio Health giúp nhà thuốc đối tác nâng cao hoạt động kinh doanh">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Jio Health giúp nhà thuốc đối tác nâng cao hoạt động kinh doanh"
                                                className="lazy lazied"
                                                src="https://i1-kinhdoanh.vnecdn.net/2021/05/12/502-1620700473-3845-1620802754.png?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=FBEUCSL5OUjXCgHkNF2ZaA"
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/12/502-1620700473-3845-1620802754.png?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=FBEUCSL5OUjXCgHkNF2ZaA">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a
                                        href="jio-health-giup-nha-thuoc-doi-tac-nang-cao-hoat-dong--4276176.html"
                                        title="Jio Health giúp nhà thuốc đối tác nâng cao hoạt động kinh doanh">Jio
                                        Health giúp nhà thuốc đối tác nâng cao hoạt động kinh
                                        doanh</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb swiper-slide-next"
                                style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="thiet-bi-bep-eurogold-tro-thu-dac-luc-cho-cong-viec-noi-tro-4275695.html"
                                        className="thumb thumb-5x3"
                                        title="Thiết bị bếp Eurogold - trợ thủ đắc lực cho công việc nội trợ">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Thiết bị bếp Eurogold - trợ thủ đắc lực cho công việc nội trợ"
                                                className="lazy lazied"
                                                src="https://i1-kinhdoanh.vnecdn.net/2021/05/12/1-1620815723-3271-1620815781.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=jwqTac8Xlet0Va1TEF21iA">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        title="Thiết bị bếp Eurogold - trợ thủ đắc lực cho công việc nội trợ">Thiết
                                        bị bếp Eurogold - trợ thủ đắc lực cho công việc nội
                                        trợ</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="Việt Chào giảm 15% giá bán thang máy Mitsubishi Thượng Hải">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Việt Chào giảm 15% giá bán thang máy Mitsubishi Thượng Hải"
                                                className="lazy lazied"
                                                src="https://i1-kinhdoanh.vnecdn.net/2021/05/12/image003-1620805788-9363-1620805810.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=MV9rD8sedd-N93bbGEGK_Q"
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/12/image003-1620805788-9363-1620805810.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=MV9rD8sedd-N93bbGEGK_Q">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        title="Việt Chào giảm 15% giá bán thang máy Mitsubishi Thượng Hải">Việt Chào
                                        giảm 15% giá bán thang máy Mitsubishi Thượng
                                        Hải</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="Cải thiện tình trạng mất ngủ với An thần đan">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Cải thiện tình trạng mất ngủ với An thần đan"
                                                className="lazy lazied"
                                                src="https://i1-kinhdoanh.vnecdn.net/2021/05/12/screenshot20210512at21409pm-16-9134-2988-1620803722.png?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=m0mZXixr7nqX7FeGbWQ7lA"
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/12/screenshot20210512at21409pm-16-9134-2988-1620803722.png?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=m0mZXixr7nqX7FeGbWQ7lA">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        title="Cải thiện tình trạng mất ngủ với An thần đan">Cải
                                        thiện tình trạng mất ngủ với An thần đan</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="Loạt đồ gia dụng tăng tiện nghi cho nhà bếp">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Loạt đồ gia dụng tăng tiện nghi cho nhà bếp" className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-giadinh.vnecdn.net/2021/05/09/1-1620524662-4841-1620531448-1-1745-7269-1620534061.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=5JnxZceFuOLlwP7UZ6iySQ">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        title="Loạt đồ gia dụng tăng tiện nghi cho nhà bếp">Loạt
                                        đồ
                                        gia dụng tăng tiện nghi cho nhà bếp</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="Nước hoa hàng hiệu cho nam giảm đến nửa giá">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Nước hoa hàng hiệu cho nam giảm đến nửa giá" className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-giadinh.vnecdn.net/2021/05/06/5e481006b7fac-20180904-135511-6224-5661-1620272115.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ty4RZJsCieDWr3M9h-lC5Q">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        title="Nước hoa hàng hiệu cho nam giảm đến nửa giá">Nước
                                        hoa
                                        hàng hiệu cho nam giảm đến nửa giá</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3" title="Loạt thiết bị tiện ích cho mọi nhà">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Loạt thiết bị tiện ích cho mọi nhà" className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-giadinh.vnecdn.net/2021/05/07/5da7c5ca0bcf7-bo-sung-cu-16203-9409-7130-1620370640.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Vowwkmjvyxv5O_HZqBaRIw">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        data-itm-source="#vn_source=Home&amp;vn_campaign=Box-ThongTinDoanhNghiep&amp;vn_medium=Item-7&amp;vn_term=Desktop&amp;vn_thumb=1"
                                        title="Loạt thiết bị tiện ích cho mọi nhà">Loạt thiết bị
                                        tiện
                                        ích cho mọi nhà</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3" title="Ảnh hưởng của độ ẩm đến sức khỏe">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Ảnh hưởng của độ ẩm đến sức khỏe" className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-giadinh.vnecdn.net/2021/04/26/1-1-1619431023-1619431380-4963-1619431420.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=dbf-_QtJLz_uF4rakUlAxQ">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href="" title="Ảnh hưởng của độ ẩm đến sức khỏe">Ảnh hưởng
                                        của độ
                                        ẩm
                                        đến sức khỏe</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="Cozy đạt 'Thương hiệu tiêu biểu châu Á- Thái Bình Dương'">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Cozy đạt 'Thương hiệu tiêu biểu châu Á- Thái Bình Dương'"
                                                className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/10/image002-1620629512-4912-1620633546.png?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=4fiPDGkr8sqlt8w3vZE5iw">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        data-itm-source="#vn_source=Home&amp;vn_campaign=Box-ThongTinDoanhNghiep&amp;vn_medium=Item-9&amp;vn_term=Desktop&amp;vn_thumb=1"
                                        title="Cozy đạt 'Thương hiệu tiêu biểu châu Á- Thái Bình Dương'">Cozy đạt
                                        'Thương hiệu tiêu biểu châu Á- Thái Bình
                                        Dương'</a>
                                </h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="Trải nghiệm 'du lịch tại chỗ' tại căn hộ cao cấp D-Homme">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Trải nghiệm 'du lịch tại chỗ' tại căn hộ cao cấp D-Homme"
                                                className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/10/hinh-1-4-1620629030-6341-1620629064.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=NC4uRgv96E8tb9l3spijNw">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        data-itm-source="#vn_source=Home&amp;vn_campaign=Box-ThongTinDoanhNghiep&amp;vn_medium=Item-10&amp;vn_term=Desktop&amp;vn_thumb=1"
                                        title="Trải nghiệm 'du lịch tại chỗ' tại căn hộ cao cấp D-Homme">Trải nghiệm
                                        'du lịch tại chỗ' tại căn hộ cao cấp
                                        D-Homme</a>
                                </h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href=""
                                        data-itm-source="#vn_source=Home&amp;vn_campaign=Box-ThongTinDoanhNghiep&amp;vn_medium=Item-11&amp;vn_term=Desktop&amp;vn_thumb=1"
                                        className="thumb thumb-5x3" title="Thách thức chuyển đổi số trong doanh nghiệp">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Thách thức chuyển đổi số trong doanh nghiệp" className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/08/thumbnail-1-1620446280-1970-1620447046.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=AdKqUPxVZu9L2xDl0T65-g">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        data-itm-source="#vn_source=Home&amp;vn_campaign=Box-ThongTinDoanhNghiep&amp;vn_medium=Item-11&amp;vn_term=Desktop&amp;vn_thumb=1"
                                        title="Thách thức chuyển đổi số trong doanh nghiệp">Thách
                                        thức chuyển đổi số trong doanh nghiệp</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="tnr-stars-kien-tuong-lay-y-tuong-van-hoa-ban-dia-4274381.html"
                                        className="thumb thumb-5x3"
                                        title="TNR Stars Kiến Tường lấy ý tưởng văn hóa bản địa">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="TNR Stars Kiến Tường lấy ý tưởng văn hóa bản địa" className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/10/cong-vien-lik-1620379140-7275-1620615834.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=HuKOoKnA37sl0ZWp2FVK6w">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a
                                        href="tnr-stars-kien-tuong-lay-y-tuong-van-hoa-ban-dia-4274381.html"
                                        title="TNR Stars Kiến Tường lấy ý tưởng văn hóa bản địa">TNR
                                        Stars Kiến Tường lấy ý tưởng văn hóa bản địa</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="TNR Amaluna tạo không gian sống xanh tại TP Trà Vinh">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="TNR Amaluna tạo không gian sống xanh tại TP Trà Vinh"
                                                className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/10/tnr1-1620614697-5380-1620614703.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=T1i6pG7m8S0htiV-ZEqpjg">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        title="TNR Amaluna tạo không gian sống xanh tại TP Trà Vinh">TNR Amaluna tạo
                                        không gian sống xanh tại TP Trà Vinh</a>
                                </h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="giai-phap-chieu-sang-thong-minh-danh-cho-ham-xe-4273764.html"
                                        className="thumb thumb-5x3"
                                        title="Giải pháp chiếu sáng thông minh dành cho hầm xe">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Giải pháp chiếu sáng thông minh dành cho hầm xe" className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/10/xe-2-1620613642-6447-1620613708.png?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=tIgzE-ZdTrFjVZqvuxz7Mg">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a
                                        href="giai-phap-chieu-sang-thong-minh-danh-cho-ham-xe-4273764.html"
                                        title="Giải pháp chiếu sáng thông minh dành cho hầm xe">Giải
                                        pháp chiếu sáng thông minh dành cho hầm xe</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="lf-logistics-viet-nam-tap-trung-phat-trien-phuc-vu-thuong-mai-dien-tu-4262753.html"
                                        className="thumb thumb-5x3"
                                        title="LF Logistics Việt Nam tập trung phát triển phục vụ thương mại điện tử">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="LF Logistics Việt Nam tập trung phát triển phục vụ thương mại điện tử"
                                                className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a
                                        href="lf-logistics-viet-nam-tap-trung-phat-trien-phuc-vu-thuong-mai-dien-tu-4262753.html"
                                        title="LF Logistics Việt Nam tập trung phát triển phục vụ thương mại điện tử">LF
                                        Logistics Việt Nam tập trung phát triển phục vụ thương
                                        mại
                                        điện tử</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="Ưu thế của ứng dụng công nghệ trong bất động sản">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Ưu thế của ứng dụng công nghệ trong bất động sản" className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/06/746-1620202531-4693-1620296034.png?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=ehv3vNuYZNsNpSDPA1jc4g">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        title="Ưu thế của ứng dụng công nghệ trong bất động sản">Ưu
                                        thế của ứng dụng công nghệ trong bất động sản</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="softline-nang-tam-voi-thanh-cong-dai-hoi-co-dong-truc-tuyen-sacombank-4269948.html"
                                        className="thumb thumb-5x3"
                                        title="Softline nâng tầm với thành công đại hội cổ đông trực tuyến Sacombank">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Softline nâng tầm với thành công đại hội cổ đông trực tuyến Sacombank"
                                                className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/06/nangtam-1620181550-1620181563-8901-1620265212.png?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=YN0oTk7qx-fkj0FjL9IaFw">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a
                                        href="softline-nang-tam-voi-thanh-cong-dai-hoi-co-dong-truc-tuyen-sacombank-4269948.html"
                                        data-itm-source="#vn_source=Home&amp;vn_campaign=Box-ThongTinDoanhNghiep&amp;vn_medium=Item-17&amp;vn_term=Desktop&amp;vn_thumb=1"
                                        title="Softline nâng tầm với thành công đại hội cổ đông trực tuyến Sacombank">Softline
                                        nâng tầm với thành công đại hội cổ đông trực
                                        tuyến
                                        Sacombank</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="moneygram-mo-rong-dich-vu-chuyen-tien-thoi-gian-thuc-tai-viet-nam-4274712.html"
                                        className="thumb thumb-5x3"
                                        title="MoneyGram mở rộng dịch vụ chuyển tiền thời gian thực tại Việt Nam">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="MoneyGram mở rộng dịch vụ chuyển tiền thời gian thực tại Việt Nam"
                                                className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/08/image-jpeg-1620439332-9303-1620439341.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=dbp_QAGKnBWSRTgOCE3HbA">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a
                                        href="moneygram-mo-rong-dich-vu-chuyen-tien-thoi-gian-thuc-tai-viet-nam-4274712.html"
                                        title="MoneyGram mở rộng dịch vụ chuyển tiền thời gian thực tại Việt Nam">MoneyGram
                                        mở rộng dịch vụ chuyển tiền thời gian thực tại
                                        Việt
                                        Nam</a></h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="" className="thumb thumb-5x3"
                                        title="Siêu thị online thiết bị vệ sinh và nhà bếp Khali Nguyễn">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Siêu thị online thiết bị vệ sinh và nhà bếp Khali Nguyễn"
                                                className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/06/z2469715312056-d1e4beec97ec5f8-7715-4737-1620290856.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=6GPjZ_dFfrJz-buTD53UsQ">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a href=""
                                        title="Siêu thị online thiết bị vệ sinh và nhà bếp Khali Nguyễn">Siêu thị
                                        online thiết bị vệ sinh và nhà bếp Khali
                                        Nguyễn</a>
                                </h3>
                            </article>
                            <article className="swiper-slide item-news full-thumb" style={{marginright: '20px'}}>
                                <div className="thumb-art">
                                    <a href="tranfa-nha-phan-phoi-thiet-bi-tham-my-da-lieu-tu-chau-au-4270506.html"
                                        className="thumb thumb-5x3"
                                        title="Tranfa - nhà phân phối thiết bị thẩm mỹ, da liễu từ châu Âu">
                                        <picture>
                                            <img loading="lazy" intrinsicsize="300x180"
                                                alt="Tranfa - nhà phân phối thiết bị thẩm mỹ, da liễu từ châu Âu"
                                                className="lazy"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                                data-src="https://i1-kinhdoanh.vnecdn.net/2021/05/07/img-9686-1620352586-5482-1620352640.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=HJUGo_Z8maAXdCl9My551g">
                                            </img> </picture>
                                    </a>
                                </div>
                                <h3 className="title-news"><a
                                        href="tranfa-nha-phan-phoi-thiet-bi-tham-my-da-lieu-tu-chau-au-4270506.html"
                                        title="Tranfa - nhà phân phối thiết bị thẩm mỹ, da liễu từ châu Âu">Tranfa -
                                        nhà phân phối thiết bị thẩm mỹ, da liễu từ châu
                                        Âu</a></h3>
                            </article>
                        </div>
                        <span className="swiper-notification" aria-atomic="true"></span>
                    </div>
                </div>
            </div>
            <div id="_thongtindoanhnghiep" className="lazier hidden"></div>
            <div className="width_common container fs_box" style={{clear: 'both'}}>
                <div>
                    <div className="box-category">
                        <div id="sis_footershop">
                            <script>
                                googTagCode.display.push('sis_footershop');
                            </script>
                        </div>
                    </div>
                    <div id="_ads_box_business" className="lazier hidden"></div>
                </div>
            </div>
        </div>
    </div>
    <div id="rich-media-banner-ads">
        <div id="sis_richmedia">
            <script>
                googTagCode.display.push('sis_richmedia');
            </script>
        </div>
    </div>
    <div id="OverLapHiden"
        style={{width:'100%', height:'100%', left:'0px', top:'0px', position:'fixed', display:'none', backgroundcolor:'rgb(0, 0, 0)', opacity:'0.6 z-index:5000001'}}>
    </div>
    <div id="sis_balloonads">

    </div>
    <div id="_footer_ads" className="lazier hidden"></div>
</section>
<footer className="footer">
    <div className="inner-footer">
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Trang chủ" f=""
                    onclick="trackingLogoHome('logo-footer-menu', this.href)">Trang chủ</a></li>
            <li className="item-menu"><a href="https://video." title="Video">Video</a></li>
            <li className="item-menu"><a href="infographics" title="Infographics">Infographics</a>
            </li>
            <li className="item-menu border-top" style={{paddingtop: '15px',bordertop: '1px solid #e5e5e5'}}><a href=""
                    title="Mới nhất">Mới nhất</a></li>
            <li className="item-menu"><a href="" title="Xem nhiều">Xem nhiều</a></li>
            <li className="item-menu"><a href="anh">Ảnh</a></li>
            <li className="item-menu"><a href="tin-nong" title="Tin nóng">Tin nóng</a></li>
        </ul>
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Thời sự">Thời sự</a></li>
            <li className="item-menu"><a href="" title="Góc nhìn">Góc nhìn</a></li>
            <li className="item-menu"><a href="" title="Thế giới">Thế giới</a></li>
            <li className="item-menu"><a href="" title="Kinh doanh">Kinh doanh</a></li>
            <li className="item-menu"><a href="giai-tri" title="Giải trí">Giải trí</a></li>
        </ul>
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Thể thao">Thể thao</a></li>
            <li className="item-menu"><a href="" title="Pháp luật">Pháp luật</a></li>
            <li className="item-menu"><a href="" title="Giáo dục">Giáo dục</a></li>
            <li className="item-menu"><a href="" title="Sức khỏe">Sức khỏe</a></li>
            <li className="item-menu"><a href="" title="Đời sống">Đời sống</a></li>
            <li className="item-menu"><a href="" title="Du lịch">Du lịch</a></li>
        </ul>
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Khoa học">Khoa học</a></li>
            <li className="item-menu"><a href="" title="Số hóa">Số
                    hóa</a></li>
            <li className="item-menu"><a href="" title="Xe">Xe</a>
            </li>
            <li className="item-menu"><a href="" title="Ý kiến">Ý
                    kiến</a></li>
            <li className="item-menu"><a href="" title="Tâm sự">Tâm
                    sự</a></li>
            <li className="item-menu"><a href="hai" title="Hài">Hài</a>
            </li>
        </ul>
        <ul className="list-menu-footer">
            <li className="item-menu"><a href="" title="Rao vặt">Rao vặt</a></li>
            <li className="item-menu"><a href="" title="Shop VnExpress">Shop VnExpress</a></li>
            <li className="item-menu"><a href="" title="Startup">Startup</a></li>
            <li className="item-menu"><a href="" title="Pay VnExpress">Pay
                    VnExpress</a></li>
            <li className="item-menu"><a href="" title="Kid-lab">Kid-lab</a></li>
            <li className="item-menu"><a href="" title="Mua ảnh VnExpress">Mua ảnh VnExpress</a></li>
            <li className="item-menu"><a href="" title="Vhome">Vhome</a></li>
        </ul>
        <div className="wrap-contact">
            <div className="contact downloadapp">
                <p>Tải ứng dụng</p>
                <a href="" className="app_vne open-popup-link" title="VnExpress"><svg className="ic ic-vne">
                        <use class="#letter-E"></use>
                    </svg>VnExpress</a>
                <a href="" className="app_evne open-popup-link" title="International"><svg className="ic ic-evne">
                        <use class="#letter-E-grey">
                            <svg id="letter-E-grey" viewBox="0 0 32 32">
                                <path fill="#757575" style={{fill: 'var(--color3, #757575)'}}
                                    d="M10.783 7.812h15.652v-4.226h-20.87v24.83h20.87v-4.226h-15.652v-5.811h7.304v-4.755h-7.304v-5.811z">
                                </path>
                                <path fill="#757575" style={{fill: 'var(--color3, #757575)'}}
                                    d="M28.5 32.001c0.828 0 1.5-0.682 1.5-1.524v-28.952c0-0.842-0.672-1.524-1.5-1.524h-25c-0.829 0-1.5 0.682-1.5 1.524v28.952c0 0.842 0.671 1.524 1.5 1.524h25zM26.586 9.397h-14.238v2.642h5.89c0.864 0 1.414 0.765 1.414 1.64v4.755c0 0.875-0.55 1.529-1.414 1.529h-5.89v2.641h14.238c0.864 0 1.414 0.766 1.414 1.64v4.226c0 0.875-0.55 1.529-1.414 1.529h-20.869c-0.865 0-1.717-0.655-1.717-1.529v-24.83c0-0.875 0.852-1.64 1.717-1.64h20.869c0.864 0 1.414 0.766 1.414 1.64v4.226c0 0.875-0.55 1.529-1.414 1.529z">
                                </path>
                                <path fill="#fff" style={{fill: 'var(--color2, #fff)'}}
                                    d="M28 28.471v-4.226c0-0.875-0.55-1.64-1.414-1.64h-14.238v-2.642h5.89c0.864 0 1.414-0.655 1.414-1.529v-4.755c0-0.875-0.55-1.64-1.414-1.64h-5.89v-2.642h14.238c0.864 0 1.414-0.655 1.414-1.529v-4.226c0-0.875-0.55-1.64-1.414-1.64h-20.869c-0.865 0-1.717 0.766-1.717 1.64v24.83c0 0.875 0.852 1.529 1.717 1.529h20.869c0.864 0 1.414-0.655 1.414-1.529zM26.435 7.812h-15.652v5.811h7.304v4.755h-7.304v5.811h15.652v4.226h-20.87v-24.83h20.87v4.226z">
                                </path>
                            </svg>
                        </use>
                    </svg>International</a>
            </div>
            <div className="contact">
                <p>Liên hệ</p>
                <a data-medium="Menu-LienHeToaSoan" title="Liên hệ tòa soạn" href="" className="mail"><svg
                        className="ic ic-mail">
                        <use class="#Mail">
                            <svg id="Mail" viewBox="0 0 32 32">
                                <path
                                    d="M17.416 18.606c-0.436 0.257-0.922 0.392-1.416 0.392s-0.981-0.135-1.416-0.392l-14.559-8.605c-0.005 0.045-0.024 0.086-0.024 0.132v18.764c0 0.293 0.105 0.573 0.293 0.78s0.442 0.323 0.707 0.323h30c0.265 0 0.52-0.116 0.707-0.323s0.293-0.488 0.293-0.78v-18.764c0-0.046-0.019-0.086-0.024-0.131l-14.56 8.604z">
                                </path>
                                <path
                                    d="M31 4.001h-30c-0.265 0-0.52 0.123-0.707 0.341s-0.293 0.514-0.293 0.823v2.327c-0 0.211 0.049 0.417 0.142 0.598s0.226 0.329 0.386 0.428l15 9.345c0.145 0.091 0.307 0.138 0.472 0.138s0.327-0.047 0.472-0.138l15-9.345c0.16-0.099 0.293-0.247 0.386-0.428s0.142-0.387 0.142-0.598v-2.327c0-0.309-0.105-0.605-0.293-0.823s-0.442-0.341-0.707-0.341z">
                                </path>
                            </svg>
                        </use>
                    </svg>Tòa soạn</a>
                <a title="Liên hệ quảng cáo"
                    href="https://eclick.vn/lien-he/?utm_source=VNE&amp;utm_medium=CPC_BOX&amp;utm_campaign=LienHeQuangCao"
                    className="ads"><svg className="ic ic-ads">
                        <use class="#QuangCao"></use>
                    </svg>Quảng cáo</a>
            </div>
            <div className="hotline">
                <p>Đường dây nóng</p>
                <div className="left">
                    <strong>083.888.0123</strong>
                    <p>(Hà Nội)</p>
                </div>
                <div className="right">
                    <strong>082.233.3555</strong>
                    <p>(TP. Hồ Chí Minh)</p>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright width_common">
        <p><a title="VnExpress - Báo tiếng Việt nhiều người xem nhất" href=""><img
                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v388/v2_2019/pc/graphics/logo.svg"
                    alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" /></a></p>
        <div className="right flexbox">
            <a href="/rss" title="RSS">RSS</a>
            <span className="txt-follow">Theo dõi VnExpress trên</span>
            <a href="https://www.facebook.com/congdongvnexpress/" className="social_ft face_ft" title="Facebook"><svg
                    className="ic ic-facebook">
                    <use class="#Facebook">
                        <svg id="Facebook" viewBox="0 0 32 32">
                            <path
                                d="M22.912 10.485l-0.582 5.515h-4.409v16h-6.622v-16h-3.3v-5.515h3.3v-3.32c0-4.486 1.865-7.164 7.168-7.164h4.407v5.515h-2.758c-2.058 0-2.195 0.777-2.195 2.214v2.756h4.99z">
                            </path>
                        </svg>
                    </use>
                </svg></a>
            <a href="https://twitter.com/VnEnews" className="social_ft twitter_ft" title="Twitter"><svg
                    className="ic ic-twitter">
                    <use class="#Twitter">
                        <svg id="Twitter" viewBox="0 0 32 32">
                            <path
                                d="M32 6.001c-1.2 0.6-2.4 0.8-3.8 1 1.4-0.8 2.4-2 2.8-3.6-1.2 0.8-2.6 1.2-4.2 1.6-1.2-1.2-3-2-4.8-2-3.4 0-6.4 3-6.4 6.6 0 0.6 0 1 0.2 1.4-5.4-0.2-10.4-2.8-13.6-6.8-0.6 1-0.8 2-0.8 3.4 0 2.2 1.2 4.2 3 5.4-1 0-2-0.4-3-0.8 0 3.2 2.2 5.8 5.2 6.4-0.6 0.2-1.2 0.2-1.8 0.2-0.4 0-0.8 0-1.2-0.2 0.8 2.6 3.2 4.6 6.2 4.6-2.2 1.8-5 2.8-8.2 2.8h-1.6c3 1.8 6.4 3 10 3 12 0 18.6-10 18.6-18.6v-0.8c1.4-1 2.6-2.2 3.4-3.6z">
                            </path>
                        </svg>
                    </use>
                </svg></a>
            <a href="https://www.youtube.com/channel/UCVRqZH5QnrnbMWhElPBD-MQ?sub_confirmation=1"
                className="social_ft youtube_ft" title="Youtube"><svg className="ic ic-youtube">
                    <use class="#Youtube">
                        <svg id="Youtube" viewBox="0 0 32 32">
                            <path
                                d="M31.331 7.521c-0.368-1.386-1.452-2.477-2.829-2.847-2.496-0.673-12.502-0.673-12.502-0.673s-10.007 0-12.502 0.673c-1.377 0.37-2.461 1.462-2.829 2.847-0.669 2.512-0.669 7.752-0.669 7.752s0 5.241 0.669 7.752c0.368 1.386 1.452 2.432 2.829 2.802 2.496 0.673 12.502 0.673 12.502 0.673s10.007 0 12.502-0.673c1.377-0.37 2.461-1.416 2.829-2.802 0.669-2.512 0.669-7.752 0.669-7.752s0-5.24-0.669-7.752zM12.727 20.032v-9.516l8.364 4.758-8.364 4.758z">
                            </path>
                        </svg>
                    </use>
                </svg></a>
        </div>
    </div>
    <div className="copyright-footer mt10 mb20 flexbox width_common">
        <p>
            <strong>Báo tiếng Việt nhiều người xem nhất</strong><br />Thuộc Bộ Khoa học Công nghệ<br />Số giấy phép:
            06/GP-BTTTT
            ngày 03/01/2014
        </p>
        <p>
            Tổng biên tập: Phạm Hiếu<br />Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội<br />Điện
            thoại: 024
            7300 8899 - máy lẻ 4500
        </p>
        <p style={{textalign: 'right'}}>© 1997-2021. Toàn bộ bản quyền thuộc VnExpress</p>
    </div>
</footer>


   
       
     </body>
  );
}

export default App;