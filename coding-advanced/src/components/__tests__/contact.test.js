import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("haa bhai contact page", ()=>{
  render(<Contact />)

  const contactText = screen.getByText("Contact")

  expect(contactText).toBeInTheDocument();
})

test("haa bhai button dund raha hnn  page me", ()=>{
  render(<Contact />)

  const paragraph = screen.getByRole("paragraph")

  expect(paragraph).toBeInTheDocument();
})