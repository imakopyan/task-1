import React, { Component } from 'react';
import cn from 'classnames';
import s from './Scroll.module.scss';

class Scroll extends Component {
 render () {
     return (
        <ul className={s.scroll}>
                <a href="#first">
        <li  className={cn(s.control, this.props.item === "1" && s.controlActive)} >
        </li>
        </a>
        <a href="#second">
        <li  className={cn(s.control, this.props.item === "2" && s.controlActive)} >
        </li>
        </a>
        <a href="#third">
        <li  className={cn(s.control, this.props.item === "3" && s.controlActive)} >
        </li>
        </a>
        </ul>
     );
 }
}

export default Scroll;
