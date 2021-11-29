import React from "react";
import Paginator from './Paginator';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';


describe("Paginator component", () => {
  test('Paginator should be displayed with button "Next" button "Preview" should be hidden', () => {
    render( < Paginator  totalCount={300}/> );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.queryByText('Preview')).toBeNull();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('Checkout next protion pages, button "Preview" should be displayed', () => {
    render( < Paginator  totalCount={300}/> );
    expect(screen.getByText('1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Preview')).toBeInTheDocument();
  });
});