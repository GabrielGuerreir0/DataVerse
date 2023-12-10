// Importa o React e os componentes Swiper e SwiperSlide de 'swiper/react'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Importa os estilos CSS do Swiper e os efeitos coverflow e pagination
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Importa o arquivo Carousel.css que contém estilos adicionais
import './carousel.css';

// Importa os módulos EffectCoverflow e Pagination de 'swiper/modules'
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Declaração do componente App
export default function App() {
  return (
    <>
      {/* Título da equipe */}
      <div className="team-title" id="equipe">
        <h2>Nossa Equipe</h2>
      </div>

      {/* Componente Swiper para criar o carrossel */}
      <Swiper
        effect={'coverflow'} // Define o efeito de coverflow para o Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false} // Desativa a paginação do Swiper
        modules={[EffectCoverflow, Pagination]} // Adiciona os módulos de efeito e paginação
        initialSlide={2} // Define o slide inicial
        className="mySwiper" // Classe para estilização específica
      >
        {/* Slide 1 */}
        <SwiperSlide>
          {/* Conteúdo do slide 1 */}
          <div className="slide-container">
            <a href="https://github.com/GeanFilho">
              <img
                className="rounded-image"
                src="https://avatars.githubusercontent.com/u/98719228?v=4"
                alt="integrante 1"
              />
            </a>
            <p className="slide-description hidden">Gean Filho</p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          {/* Conteúdo do slide 2 */}
          <div className="slide-container">
            <a href="https://github.com/SofiahRodrigues">
              <img
                className="rounded-image"
                src="https://avatars.githubusercontent.com/u/129235589?v=4"
                alt="integrante 2"
              />
            </a>
            <p className="slide-description hidden">Sofia Rodrigues</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          {/* Conteúdo do slide 3 */}
          <div className="slide-container">
            <a href="https://github.com/GabrielGuerreir0">
              <img
                className="rounded-image"
                src="https://avatars.githubusercontent.com/u/136819754?v=4"
                alt="integrante 3"
              />
            </a>
            <p className="slide-description hidden">Gabriel Guerreiro</p>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          {/* Conteúdo do slide 4 */}
          <div className="slide-container">
            <a href="https://github.com/Yann-Uchoa5">
              <img
                className="rounded-image"
                src="https://avatars.githubusercontent.com/u/128929472?v=4"
                alt="integrante 4"
              />
            </a>
            <p className="slide-description hidden">Yan Uchôa</p>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          {/* Conteúdo do slide 5 */}
          <div className="slide-container">
            <a href="https://github.com/GuilhermeCarllos">
              <img
                className="rounded-image"
                src="https://avatars.githubusercontent.com/u/137465581?v=4"
                alt="integrante 5"
              />
            </a>
            <p className="slide-description hidden">Guilherme Carlos</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
