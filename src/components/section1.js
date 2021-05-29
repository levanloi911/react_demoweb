import '../App.css';

 export default function Section1(props) {
  
return(
    <div>
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
    </div>
)
}
