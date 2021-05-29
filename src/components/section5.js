import '../App.css';
import React, { useEffect, useState } from "react";
import db from '../firebase.config';
export function Section5(){
    return(
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
    )
}