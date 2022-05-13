// Write your tests here

import React from "react";
import {render, screen } from '@testing-library/react'
import AppFunctional from "./AppFunctional";



test('sanity', () => {
  expect(true).toBe(true)
})

test('renders app without errors', () =>{
  render(<AppFunctional/>)
})


test('renders moves to the page', ()=>{
  render(<AppFunctional/>)
  const moves = screen.getByText(/you moved/i)
  expect(moves).toBeTruthy();
})

test('renders coordinates to the page', ()=>{
  render(<AppFunctional/>)
  const coordinates = screen.getByText(/coordinates/i)
  expect(coordinates).toBeTruthy();
})

test('email renders in the DOM', ()=>{
  render(<AppFunctional/>)
  const email = document.querySelector('#email')
  expect(email).toBeTruthy();
})
