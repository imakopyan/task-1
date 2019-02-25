import React, { Component } from 'react';
import cn from 'classnames';
import s from './FirstBlock.module.scss';
import Scroll from '../Scroll/Scroll';

class FirstBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      showResult: false,
      checkDomain: '',
    };
  }

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  onSubmit = (e) => {
    this.setState({
      showResult: true,
      checkDomain: this.state.inputValue,
    });
    e.preventDefault();
    return false;
  }

  render() {
    return (
      <section id="first" className={s.firstWrapper}>
        <div className={s.firstBlock}>
          <a href="https://www.jino.ru/" className={s.logo}>
            <img src="/assets/logo.svg" alt="logo" />
            <span className={s.addLogo}>
 домены
            </span>
          </a>
          <span className={s.date}>
        Только до 31 января
          </span>
          <h1 className={s.title}>
          Честная цена
            <br />
          за домен .RU — 39₽
          </h1>
          <div className={s.submitFormWrapper}>
            <form className={s.submitForm} onSubmit={this.onSubmit}>
              <input className={s.submitInput} value={this.state.inputValue} onChange={this.updateInputValue} placeholder="Введите домен" />
              <div className={s.submitButton} onClick={this.onSubmit} onKeyPress={this.onSubmit} type="button" role="button" tabIndex="0">
            Проверить
              </div>
              <div className={s.submitButtonSearch} onClick={this.onSubmit} onKeyPress={this.onSubmit} type="button" role="button" tabIndex="0">
              </div>
              <div className={cn(s.result, this.state.showResult && s.show)}>
                <span className={s.resultMessage}>
          Домен
                  {' '}
                  {' '}
                  {this.state.checkDomain}
                  {' '}
                  {' — '}
свободен.&nbsp;
                </span>
                <a href="https://auth.jino.ru/registration/?next=https%3A%2F%2Fcp-domains.jino.ru" className={s.resultLink}>
          Зарегистрировать за 39₽
                </a>
              </div>
            </form>
          </div>
          <div className={s.createButtonWrapper}>
            <a href="https://auth.jino.ru/registration/?next=https%3A%2F%2Fcp-domains.jino.ru" className={s.createButton}>
        Создать аккаунт
            </a>
          </div>
          <a href="#second" className={s.nextButton} />
        </div>
        <Scroll item="1" />
      </section>
    );
  }
}

export default FirstBlock;
