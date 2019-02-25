import React, { Component } from 'react';
import s from './ThirdBlock.module.scss';
import Scroll from '../Scroll/Scroll';

class ThirdBlock extends Component {
  render() {
    return (
      <section id="third" className={s.thirdWrapper}>
        <div className={s.thirdBlock}>
        <a href="https://www.jino.ru/" className={s.logo}>
            <img src="/assets/logo.svg" alt="logo" />
            <span className={s.addLogo}>
 домены
            </span>
          </a>
          <div className={s.titleWrapper}>
                <h2 className={s.title}>
Почему стоит выбрать «Джино»?
              </h2>
              <div className={s.subtitleWrapper}>
              <h3 className={s.subtitle}>
              «Джино» более 18 лет на рынке, имеет 270 000 довольных клиентов,
собственную панель управления
и&nbsp;многое другое.
              </h3>
              </div>
              </div>
              <div className={s.createButtonWrapper}>
            <a href="https://auth.jino.ru/registration/?next=https%3A%2F%2Fcp-domains.jino.ru" className={s.createButton}>
        Создать аккаунт
              </a>
            </div>
            <div className={s.plusWrapper}>
            <p className={s.plusDescription}>
            Вы получите <b>1000 баллов</b> в системе лояльности <a href="https://www.jino.ru/pluses/">Джино.Плюсы</a>, зарегистрировавшись в течении <b>24 часов</b> после посещения данной страницы.
            </p>
            <a href="https://www.jino.ru/pluses/" className={s.plusLink}>
            <span className={s.plus}>
            <span className={s.plusText}>
            1000
            </span>
            <img src="/assets/plus-bold.svg" alt="plus" />

            </span>
            </a>
            </div>
            <div className={s.copyrightWrapper}>
            <span className={s.copyright}>
            © <a href="https://www.jino.ru/">«Джино»</a>, 2003–2019. «Джино» является зарегистрированным товарным знаком. Лицензия на телематические услуги связи № 97495 от 09.03.2012. 
            <a href="https://jino.ru/about/legal/">Правовая информация.</a>
            </span>
            </div>
        </div>
        <Scroll item="3" />
      </section>
    );
  }
}

export default ThirdBlock;
