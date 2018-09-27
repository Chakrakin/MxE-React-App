import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import PeopleList from './people-list/people-list.component.js'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: PeopleList,
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
]

export const mount = [
  reactLifecycles.mount,
]

export const unmount = [
  reactLifecycles.unmount,
]

export const unload = [
  reactLifecycles.unload,
]

function domElementGetter() {
  let el = document.getElementById("people");
  if (!el) {
    el = document.createElement('div');
    el.id = 'people';
    document.body.appendChild(el);
  }

  return el;
}
