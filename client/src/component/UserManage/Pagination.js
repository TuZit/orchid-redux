import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { Autoplay, Pagination, Navigation, Thumbs, FreeMode } from 'swiper';

import './Pagi.scss';
import '../Shop/shop.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../ProductContext.js';

function Pagi() {
  const productItems = useContext(ProductsContext);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = currentPage * usersPerPage;

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (data) {
    var pageCount = parseInt(Math.ceil(data.length / usersPerPage));
  }

  return (
    <>
      <div>
        <h2>Pagiantion</h2>

        {data &&
          data
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((item, i) => (
              <div key={i} style={{ fontSize: '18px', padding: '20px' }}>
                <p>{item.id}</p>
                <p>{item.title}</p>
              </div>
            ))}

        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>

      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode, Thumbs]}
          loop={true}
          className='mySwiper'
        >
          {productItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className='shop-inner-products__items'>
                <div className='inner-img-wrap'>
                  <div className='inner-options'>
                    <button to='#' className='inner-options__details'>
                      <i className='ti-eye' />
                    </button>
                    <button
                      className='inner-options__add-cart'
                      // onClick={handleAddProduct}
                    >
                      <i className='ti-shopping-cart' />
                    </button>
                  </div>
                  <img src={item.thumbnailUrl} alt={item.name} />
                </div>
                <div className='inner-desc-text'>
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {productItems.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={item.thumbnailUrl} alt={item.name} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </>
  );
}

export default Pagi;
