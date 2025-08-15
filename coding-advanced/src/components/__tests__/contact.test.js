import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("haa bhai contact page", ()=>{
  render(<Contact />)

  const contactText = screen.getByText("Contact")

  expect(contactText).toBeInTheDocument();
})



describe("group multiple test case", ()=>{
  it("haa bhai button dund raha hnn  page me", ()=>{
  render(<Contact />)

  const paragraph = screen.getByRole("paragraph")

  expect(paragraph).toBeInTheDocument();
})

it("Sab heading ko dundte hai ", ()=>{
  render(<Contact />)

  const heading = screen.getAllByRole("heading")

  expect(heading.length).toBeTruthy()
})
})