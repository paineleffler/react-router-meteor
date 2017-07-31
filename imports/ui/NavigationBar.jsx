import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <NavLink className='nav-link' activeClassName='active' to='/foo'>Foo</NavLink>
        <NavLink className='nav-link' activeClassName='active' to='/bar'>Bar</NavLink>
        <NavLink className='nav-link' exact activeClassName='active' to='/'>Home</NavLink>
      </div>
    )
  }
}
