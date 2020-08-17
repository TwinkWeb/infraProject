<template>
  <div class="container">
    <header class="header">
      <Logo class="hidden" />
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__backgro">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <Logo />

            <li class="navigation__item">
              <a href class="navigation__link">О компании</a>
            </li>
            <li class="navigation__item">
              <a href class="navigation__link">Услуги</a>
            </li>
            <li class="navigation__item">
              <a href class="navigation__link">Команда</a>
            </li>
            <li class="navigation__item">
              <a href class="navigation__link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <transition name="slide-fade">
        <div class="header__header--fixed" v-show="showFixedHeader">
          <div class="header__logo">
            <Logo />
          </div>

          <nav class="header__navigation">
            <ul class="header__list">
              <li class="header__item">
                <nuxt-link active-class="active" to="/" class="header__link">О компании</nuxt-link>
              </li>
              <li class="header__item">
                <nuxt-link active-class="active" to="/activity" class="header__link">Услуги</nuxt-link>
              </li>
              <li class="header__item">
                <nuxt-link active-class="active" to="/activity" class="header__link">Команда</nuxt-link>
              </li>
              <li class="header__item">
                <nuxt-link active-class="active" to="/activity" class="header__link">Контакты</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </transition>

      <div class="header__header" v-observe-visibility="visibilityChanged">
        <div class="header__logo">
          <Logo />
        </div>

        <nav class="header__navigation">
          <ul class="header__list">
            <li class="header__item">
              <nuxt-link active-class="active" to="/" class="header__link">О компании</nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link active-class="active" to="/activity" class="header__link">Услуги</nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link active-class="active" to="/activity" class="header__link">Команда</nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link active-class="active" to="/activity" class="header__link">Контакты</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <swiper
        class="swiper"
        ref="mySwiper"
        :options="swiperOption"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        @slideChangeTransitionEnd="setActiveSwiperIndex"
      >
        <swiper-slide
          v-for="slide in slides"
          :key="slide.id"
          :value="slide.id"
          v-model="slideNumber"
          :class="'slide-' + slide.id"
        >
          <div class="swiper__textBox">
            <p class="swiper__text">{{ slide.text }}</p>
          </div>
        </swiper-slide>
      </swiper>

      <div class="header__btnNav">
        <p>{{ activeSwiperIndex }} / {{ slidesLength }}</p>
        <div>
          <div class="header__wrapper">
            <svg class="header__arrow" slot="button-prev">
              <use xlink:href="~assets/sprite.svg#icon-arrow" />
            </svg>
            <svg class="header__arrow--reverse" slot="button-next">
              <use xlink:href="~assets/sprite.svg#icon-arrow" />
            </svg>
          </div>
        </div>
      </div>
      <div class="header__btnSup">
        Помощь и поддержка
        <svg class="header__arr">
          <use xlink:href="~assets/sprite.svg#icon-arr" />
        </svg>
      </div>
      <div class="header__btnProCreateProject">
        Сланировать
        <br />проект
        <svg class="header__arr">
          <use xlink:href="~assets/sprite.svg#icon-arr" />
        </svg>
      </div>
    </header>
    <section class="news">
      <h1 class="news__heading">Главные новости</h1>
      <div class="news__wrapper">
        <div class="news__only" v-for="theOnlyNew in news" :key="theOnlyNew.id">
          <p class="news__data mb-sm">
            <span>0:53</span>/
            <span>6 февраля</span>
          </p>
          <p class="news__text mb-md">{{ theOnlyNew.body }}</p>
        </div>
      </div>
    </section>
    <section class="about-company">
      <div class="about-company__description">
        <h1 class="about-company__heading mb-md" data-aos="fade">О компании</h1>
        <p class="about-company__text" data-aos="fade-up">
          «Инфра Проекты» (IPJ) – проектная компания, сфокусированная на
          консалтинге, инжиниринге и управлении проектами в области
          мультимодальной логистики, транспортной инфраструктуры и эффективной
          коммерциализации прилегающих территорий.
        </p>
        <span data-aos="fade-up">
          <p class="about-company__advantage mt-md">1000+</p>
          <p class="about-company__text">Транспортны узлов в нашей аналитической базе</p>
        </span>
        <span data-aos="fade-up">
          <p class="about-company__advantage mt-md">50 крупных компаний</p>
          <p class="about-company__text">Доверяют нам свои проекты</p>
        </span>
        <span data-aos="fade-up">
          <p class="about-company__advantage mt-md">20 лет</p>
          <p class="about-company__text">На рынке российской логистики</p>
        </span>
      </div>
      <div class="about-company__description">
        <h1 class="about-company__heading mb-md" data-aos="fade">Комплексный подход</h1>
        <ul type="square" class="about-company__lists" data-aos="fade-up">
          <li class="about-company__item">
            <span>Маркетинг рынка интермодальных перевозо</span>
          </li>
          <li class="about-company__item">
            <span>Построение бизнес-моделей проектов</span>
          </li>
          <li class="about-company__item">
            <span>Технологические решения</span>
          </li>
        </ul>
        <img
          class="about-company__image"
          src="~assets/images/about-company/image.png"
          data-aos="zoom-in-down"
        />
      </div>
    </section>
    <div class="activities">
      <h1
        class="activities__heading mb-sm"
        data-aos="fade-down"
        data-aos-duration="1000"
      >Направления деятельности</h1>
      <p class="activities__text" data-aos="fade-down" data-aos-duration="1000">
        Особенностью наших сервисов является комплексный подход, объединяющий
        компетенции в маркетинге рынка интермодальных перевозок, построении
        бизнес-моделей проектов, технологических решениях.
      </p>
      <div class="activities-company">
        <div class="activity" data-aos="zoom-out-left">
          <img src="~assets/images/activities/ship.png" alt />
          <p class="activity__text">Морские / речные порты</p>
        </div>
        <div class="activity" data-aos="zoom-out-left" data-aos-duration="500">
          <img src="~assets/images/activities/car.png" alt />
          <p class="activity__text">Транспортные коридоры</p>
        </div>
        <div class="activity" data-aos="zoom-out-left" data-aos-duration="1000">
          <img src="~assets/images/activities/plane.png" alt />
          <p class="activity__text">
            Пограничные пункты
            <br />пропуска
          </p>
        </div>
        <div class="activity" data-aos="zoom-out-left" data-aos-duration="1500">
          <img src="~assets/images/activities/parks.png" alt />
          <p class="activity__text">Индустриальные парки</p>
        </div>
        <div class="activity" data-aos="zoom-out-left" data-aos-duration="2000">
          <img src="~assets/images/activities/carbs.png" alt />
          <p class="activity__text">Грузопотоки</p>
        </div>
        <div class="activity" data-aos="zoom-out-left" data-aos-duration="2500">
          <img src="~assets/images/activities/process.png" alt />
          <p class="activity__text">Процессы</p>
        </div>
      </div>
    </div>
    <section class="services">
      <div class="services__expert" data-aos="flip-right" data-aos-duration="2000">
        <h1 class="services__heading">Экспертные услуги</h1>
        <img class="services__image" src="~assets/images/services/sevicesImage1.png" />
        <p class="services__text">Технологическая и маркетинговая экспертиза концепции</p>
      </div>
      <div class="services__consulting" data-aos="flip-left" data-aos-duration="2000">
        <h1 class="services__heading">Консалтинг</h1>
        <img class="services__image" src="~assets/images/services/sevicesImage2.png" />
        <p class="services__text">Разработка технологической и коммерческой концепции проекта</p>
      </div>
    </section>
    <section class="brands">
      <h1 class="brands__heading mb-sm" data-aos="fade-down" data-aos-duration="1000">Нам доверяют</h1>
      <p class="brands__text" data-aos="fade-down" data-aos-duration="1000">
        ИнфраПроекты работает в тесной кооперации с Ассоциацией грузовых деревни
        Германии. Целью DGG является развитие и внедрение положительных
        эффектов, которые генерируют грузовые деревни на местном, региональном,
        национальном и европейском уровнях.
      </p>
      <div class="brands__names">
        <div class="brand__name" data-aos="zoom-in">
          <a href="#">
            <img class="brands__icon" src="~assets/images/brands/euroSib.png" alt />
          </a>
        </div>
        <div class="brand__name" data-aos="zoom-in">
          <a href="#">
            <img class="brands__icon" src="~assets/images/brands/accenture.png" alt />
          </a>
        </div>
        <div class="brand__name" data-aos="zoom-in">
          <a href="#">
            <img class="brands__icon" src="~assets/images/brands/voshod.png" alt />
          </a>
        </div>
        <div class="brand__name" data-aos="zoom-in">
          <a href="#">
            <img class="brands__icon" src="~assets/images/brands/logoprom.png" alt />
          </a>
        </div>
        <div class="brand__name" data-aos="zoom-in">
          <a href="#">
            <img class="brands__icon" src="~assets/images/brands/ruscon.png" alt />
          </a>
        </div>
        <div class="brand__name" data-aos="zoom-in">
          <a href="#">
            <img class="brands__icon" src="~assets/images/brands/global.png" alt />
          </a>
        </div>
      </div>
    </section>
    <div class="portfolio__pictures">
      <div class="portfolio__background"></div>
      <div class="portfolio__img--1" data-aos="zoom-in-down" data-aos-duration="1000">
        <img class="portfolio__logo" src="~assets/images/logoRed.png" alt />
      </div>
      <div class="portfolio__img--2" data-aos="zoom-in-down" data-aos-duration="1000">
        <img class="portfolio__logo" src="~assets/images/logoGreen.png" alt />
      </div>
    </div>
    <div class="portfolio__content" data-aos="fade-down" data-aos-duration="1000">
      <h1 class="mb-sm">Другие наши проекты</h1>

      <p class="portfolio__text mb-sm">
        Накопленная экспертиза позволяет давать оценку как технологическим
        решениям с точки зрения прогнозируемых покзателей , так и напротив
        -подбирать оптимальные технологические решения под прогнозируемые
        показатели рынка
      </p>

      <p class="portfolio__text">
        За 20 лет сформирована крупнейшая в России, постоянно обновляемая база
        знаний о российской логистике , включая грузопотоки ,участников рынка и
        заинтересованные стороны
      </p>
    </div>
    <section class="suggest">
      <div class="suggest__wrapper" data-aos="fade-up" data-aos-duration="1000">
        <p class="suggest__heading mb-sm">Готовы начать сотрудничество?</p>
        <p class="suggest__text">Оставьте свои контакты и мы свяжемся с вами</p>
      </div>
      <form class="form" action="#" data-aos="fade-up" data-aos-duration="2000">
        <div class="form__group">
          <input type="text" placeholder="Имя" class="form__input" id="name" required />
          <label for="name" class="form__label">Имя</label>
        </div>

        <div class="form__group">
          <input type="text" placeholder="Номер телефона" class="form__input" id="email" required />
          <label for="email" class="form__label">Номер телефона</label>
        </div>
        <div class="form-group">
          <button class="btn btn--blue">Отправить</button>
        </div>
      </form>
      <img
        src="~assets/images/suggest/image.jpg"
        class="suggest__image"
        data-aos="fade-up"
        data-aos-duration="2000"
        alt
      />
    </section>
    <footer class="footer">
      <div class="nav">
        <div class="footer__information">
          <p class="footer__text">
            Адрес: 123557, г. Москва, Б. Тишинский пер. д.26, корп. 13-14, этаж
            1, пом.XII, офис 3/1Е
          </p>
          <p class="footer__text">
            Фактический адрес: Бизнес Центр Шухова Плаза Улица Шухова 14 Офис
            208
          </p>
          <p class="footer__copy">Copyright @ 2020 tollway.ru Все права защищены</p>
        </div>

        <ul class="nav__contacts">
          <li class="nav__item">
            <a href="#" class="nav__link">
              <svg class="nav__icon">
                <use xlink:href="~assets/sprite.svg#icon-email" />
              </svg>press@tollway.ru
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              <svg class="nav__icon">
                <use xlink:href="~assets/sprite.svg#icon-phone" />
              </svg>+7 (495) 252-00-71
            </a>
          </li>
        </ul>
        <ul class="nav__contacts">
          <li class="nav__item">
            <a href="#" class="nav__link">
              <svg class="nav__icon">
                <use xlink:href="~assets/sprite.svg#icon-facebook" />
              </svg>Facebook
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              <svg class="nav__icon">
                <use xlink:href="~assets/sprite.svg#icon-twitter" />
              </svg>Twitter
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              <svg class="nav__icon">
                <use xlink:href="~assets/sprite.svg#icon-instagram" />
              </svg>Instagram
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">
              <svg class="nav__icon">
                <use xlink:href="~assets/sprite.svg#icon-vk" />
              </svg>Vkontakte
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  async fetch({ store }) {
    if (store.getters["news/news"].length === 0) {
      await store.dispatch("news/fetch");
    }
  },

  data() {
    return {
      slideNumber: 0,
      showFixedHeader: false,
      activeSwiperIndex: 1,
      slides: [
        {
          id: 1,
          text: "Инфраструктурные проекты любого масштаба и уровня сложности",
        },
        {
          id: 2,
          text: "Инфраструктурные другой текст",
        },
        {
          id: 3,
          text: "Another text",
        },
      ],

      swiperOption: {
        effect: "slide",
        onSlideChangeEnd: () => {
          this.onSwipe();
        },
        loop: true,
        autoplay: {
          delay: 3000,
        },
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".header__arrow--reverse",
          prevEl: ".header__arrow",
        },
      },
      swiperReady: false,
    };
  },
  methods: {
    setActiveSwiperIndex() {
      this.activeSwiperIndex = this.swiper.realIndex + 1;
    },
    visibilityChanged(isVisible, entry) {
      this.showFixedHeader = !isVisible;
    },
  },
  computed: {
    news() {
      return this.$store.getters["news/news"];
    },
    slidesLength() {
      return this.slides.length;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiperReady = true;
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
$bp-largest: 75em; //1200
$bp-large: 62em; //1000
$bp-medium: 50em; //800
$bp-small: 37.5em;
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  user-select: none;

  @media only screen and (max-width: $bp-largest) {
    font-size: 50%;
  }

  @media only screen and (max-width: $bp-medium) {
    font-size: 40%;
  }
}

.container {
  display: grid;
  grid-template-rows: 100vh 100vh min-content min-content min-content 40vw repeat(
      2,
      min-content
    );
  grid-template-columns:
    [full] minmax(0, 1fr) [full-start] minmax(3rem, 25rem) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end] minmax(3rem, 25rem) [full-end] minmax(0, 1fr) [end];

  @media only screen and (max-width: $bp-large) {
    grid-template-columns:
      [full-start] minmax(3rem, 1fr) [center-start] repeat(
        8,
        [col-start] minmax(min-content, 14rem) [col-end]
      )
      [center-end] minmax(3rem, 1fr) [full-end];

    grid-template-rows: 100vh 50vh min-content min-content min-content min-content repeat(
        2,
        min-content
      );
  }
}

.mb-sm {
  margin-bottom: 2rem;
}
.mb-md {
  margin-bottom: 4.5rem;
}

.mt-md {
  margin-top: 5rem;
}

.hidden {
  opacity: 0;
}
</style>
