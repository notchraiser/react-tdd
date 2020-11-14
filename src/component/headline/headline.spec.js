import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { FindByTestAttr } from "../../../utils/index";

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("Headline component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = FindByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it('should render h1', () => {
        const h1 = FindByTestAttr(wrapper,"header");
        expect(h1.length).toBe(1);
    });

    it('should render h1', () => {
        const desc = FindByTestAttr(wrapper,"desc");
        expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", ()=>{
        const component = FindByTestAttr(wrapper, "HeadlineComponent");
        expect(component.length).toBe(0);
    })
  });
});
