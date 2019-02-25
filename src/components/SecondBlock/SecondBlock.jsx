import React, { Component } from 'react';
import cn from 'classnames';
import s from './SecondBlock.module.scss';
import Scroll from '../Scroll/Scroll';

class SecondBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDescription: '',
      show: false,
    };
  }

    handleClick = (e) => {
      const item = e.currentTarget.dataset.id;
      this.setState(prevState => ({
        currentDescription: item,
        show: prevState.currentDescription === item ? !prevState.show : (prevState.show === false ? !prevState.show : prevState.show) ,
      }));
    }

    render() {
      return (
        <section id="second" className={s.secondWrapper}>
          <div className={s.secondBlock}>
            <a href="https://www.jino.ru/" className={s.logo}>
              <img src="/assets/logoRed.svg" alt="logo" />
              <span className={s.addLogo}>
 домены
              </span>
            </a>
            <div className={s.featuresWrapper}>
              <div className={s.titleWrapper}>
                <h2 className={s.title}>
        Зарегистрировав у нас домен, вы получите
              </h2>
              </div>
              <div className={s.listWrapper}>
                <div className={s.list}>
                <div className={cn(s.item, this.state.show && s.itemAdd)} onClick={this.handleClick} data-id="1">
                  <div className={s.itemLogo}>
                    <img src="/assets/features/businesscard.svg" alt="logo" className={s.imgFeatures}/>
                  </div>
                  <span className={s.itemTitle}>
 Cайт-визитка
                  </span>
                  <div className={cn(s.descriptionWrapper, (this.state.currentDescription === "1" && this.state.show) && s.firstItem)}>
                Для любого вашего домена, зарегистрированного на «Джино», вы можете в несколько кликов создать простую страницу-визитку. Это удобно, если ваш основной сайт еще не готов, или если домен вам нужен только для почты.
<br /> 
Вы можете разместить здесь краткую информацию о себе или вашем бизнесе, ссылки на аккаунты в соцсетях и любые другие сайты. Создание и поддержка базового варианта сайта-визитки абсолютно бесплатны.
                </div>
                </div>

                <div className={s.item} onClick={this.handleClick} data-id="2">
                  <div className={s.itemLogo}>
                    <img src="/assets/features/dns.svg" alt="logo"  className={s.imgFeatures} />
                  </div>
                  <span className={s.itemTitle}>
 Поддержка DNS
                  </span>
                  <div className={cn(s.descriptionWrapper, (this.state.currentDescription === "2" && this.state.show) && s.secondItem)}>
                  Зарегистрировав домен через «Джино», вы бесплатно получаете постоянную возможность изменения NS-записей и направления домена туда, куда вам хочется.
                  <br />
У вас несколько доменов? Мы предоставляем бесплатную поддержку DNS для всех доменов, зарегистрированных и поддерживаемых «Джино».
                </div>
                </div>
                <div className={cn(s.item, this.state.show && s.itemAdd)} onClick={this.handleClick} data-id="3">
                  <div className={s.itemLogo}>
                    <img src="/assets/features/certificate.svg" alt="logo" className={s.imgFeatures} />
                  </div>
                  <span className={s.itemTitle}>
Сертификат о владении доменом
                  </span>
                  <div className={cn(s.descriptionWrapper, (this.state.currentDescription === "3" && this.state.show) && s.thirdItem)}>
                  Подтвердите владение доменным именем с помощью официального сертификата «Джино». Вам достаточно распечатать документ в формате PDF, который будет доступен в панели управления сразу же после делегирования домена.
                </div>
                </div>
                <div className={cn(s.item, this.state.show && s.itemAdd)} onClick={this.handleClick} data-id="4">
                  <div className={s.itemLogo}>
                    <img src="/assets/features/autorenewal.svg" alt="logo" className={s.imgFeatures} />
                  </div>
                  <span className={s.itemTitle}>
Автопродление
                  </span>
                  <div className={cn(s.descriptionWrapper, (this.state.currentDescription === "4" && this.state.show) && s.fourthItem)}>
                  С помощью функции «Автопродление» больше не нужно беспокоиться о том, что ваш домен внезапно перестанет работать. «Джино» заблаговременно продлит регистрацию на следующий период и вышлет вам уведомление об этом.                
                  </div>
                </div>
                <div className={cn(s.item, this.state.show && s.itemAdd)} onClick={this.handleClick} data-id="5">
                  <div className={s.itemLogo}>
                    <img src="/assets/features/cloud.svg" alt="logo" className={s.imgFeatures} />
                  </div>
                  <span className={s.itemTitle}>
 Облачное хранилище на 20 ГБ
                  </span>
                  <div className={cn(s.descriptionWrapper, (this.state.currentDescription === "5" && this.state.show) && s.firstItem)}>
                  Специально для своих клиентов «Джино» предлагает абсолютно бесплатный сервис — «Джино.Облако». Это надежное место для хранения файлов — здесь точно поместится всё. Вы получите постоянный доступ к своей музыке, фотографиям и документам и сможете без труда делиться данными с кем угодно.                  
                  </div>
                </div>
                <div className={cn(s.item, this.state.show && s.itemAdd)} onClick={this.handleClick} data-id="6">
                  <div className={s.itemLogo}>
                    <img src="/assets/features/freessl.svg" alt="logo" className={s.imgFeatures} />
                  </div>
                  <span className={s.itemTitle}>
 Бесплатный SSL-сертификат
                  </span>
                  <div className={cn(s.descriptionWrapper, (this.state.currentDescription === "6" && this.state.show) && s.secondItem)}>

Будучи клиентом «Джино», вы можете бесплатно получить SSL-сертификат от удостоверяющего центра Let’s Encrypt. Данный сертификат позволит вашим сайтам работать по безопасному протоколу HTTPS и избежать предупреждений браузера о том, что на сайте используется незашифрованное соединение.
<br />
Вы можете легко обзавестись сертификатом: в разделе «Домены» вашего аккаунта выберите нужный домен и на странице его настроек перейдите во вкладку «SSL». Сертификат выдаётся по нажатию одной кнопки и продлевается автоматически.
                  </div>
                </div>
                <div className={cn(s.item, this.state.show && s.itemAdd)} onClick={this.handleClick} data-id="7">
                  <div className={s.itemLogo}>
                    <img src="/assets/features/dnssec.svg" alt="logo" className={s.imgFeatures} />
                  </div>
                  <span className={s.itemTitle}>
        DNSSEC в один клик
                  </span>
                  <div className={cn(s.descriptionWrapper, (this.state.currentDescription === "7" && this.state.show) && s.thirdItem)}>
С помощью технологии цифрового подписывания ответа DNS-сервера вы можете застраховаться от возможной его подмены и быть уверенными в том, что посетители вашего сайта не попали на замаскированный сайт злоумышленников.
<br />
Для подключения DNSSEC необходимо перейти в соответствующую вкладку в настройках вашего домена и нажать кнопку «Включить».          
</div>
                </div>
                <div className={cn(s.item, this.state.show && s.itemAdd)} onClick={this.handleClick} data-id="8">
                  <div className={s.itemLogo}>
                    <img src="/assets/features/redirect.svg" alt="logo" className={s.imgFeatures} />
                  </div>
                  <span className={s.itemTitle}>
Перенаправление
                  </span>
                  <div className={cn(s.descriptionWrapper, (this.state.currentDescription === "8" && this.state.show) && s.fourthItem)}>
                  Зарегистрировав домен на «Джино», вы сможете в любой момент просто и бесплатно перенаправить его на любую страницу любого сайта.
                  <br />
У вас есть своя группа в социальной сети? Дайте ей персональный домен и она сможет стать полноценным сайтом, а не только страницей соцсети! Персонифицирование при помощи перенаправления доменного имени от «Джино» — это дополнительный инструмент в продвижении и идентификации вашей деятельности. 
</div>
                </div>
              </div>

              </div>
            </div>
            <div className={cn(s.createButtonWrapper, !this.state.show && s.createButtonWrapperAdd)}>
            <a href="https://auth.jino.ru/registration/?next=https%3A%2F%2Fcp-domains.jino.ru" className={s.createButton}>
        Создать аккаунт
              </a>
            </div>
          </div>
          <Scroll item="2" />
        </section>
      );
    }
}

export default SecondBlock;
