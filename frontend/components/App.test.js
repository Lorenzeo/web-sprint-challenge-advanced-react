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
  const welcome = screen.getByText(/you moved/i)
  expect(welcome).toBeTruthy();
})

test('renders coordinates to the page', ()=>{
  render(<AppFunctional/>)
  const welcome = screen.getByText(/ coordinates /i)
  expect(welcome).toBeTruthy();
})

test('',()=>{
  render(<)
})

