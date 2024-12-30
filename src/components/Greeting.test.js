import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders Hello World, as a txt", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders greeting-msg if btn was not clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const greetingMsgElement = screen.getByText("Great to see ya!");
    expect(greetingMsgElement).toBeInTheDocument();
  });
  test("renders Changed! if the btn was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    //Assert
    const changedMsgElement = screen.getByText("Changed!");
    expect(changedMsgElement).toBeInTheDocument();
  });
  test("hiding paragraph if changedTxt was false", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    //Assert
    const paragraphElement = screen.queryByText("Great to see ya!",{exact:false});
    expect(paragraphElement).not.toBeInTheDocument();
  });
});
