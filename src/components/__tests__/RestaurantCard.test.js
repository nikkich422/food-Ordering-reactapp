import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../MockData/RestaurantCard.json";
import "@testing-library/jest-dom";

it("should render RestrauntCard component with props data", () => {
  render(<RestaurantCard data={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});
