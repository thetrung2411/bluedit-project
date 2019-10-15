import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { AdsPage as TestClass } from "./AdsPage";
import AdDialog from "./AdDialog";
import AdsTable from "./AdsTable";
import AdUi from "./AdUi";
import NewButton from "./NewButton";
import Button from "@material-ui/core/Button";

configure({ adapter: new Adapter() });

describe("<AdsPage />", () => {
  it("should find advertisement table", () => {
    const wrapper = shallow(<TestClass />);
    wrapper.setState({ ads: [] });
    expect(wrapper.find(AdsTable)).toHaveLength(1);
  });

  it("should find 'New' button", () => {
    const wrapper = shallow(<TestClass />);
    wrapper.setState({ ads: [] });
    expect(wrapper.find(NewButton)).toHaveLength(1);
  });
});

describe("<AdsTable />", () => {
  it("should find ad dialog", () => {
    const wrapper = mount(<AdsTable ads={[]} />);
    expect(wrapper.contains(AdDialog)).toEqual(true);
  });

  it("should find delete button", () => {
    const wrapper = mount(<AdsTable ads={[]} />);
    expect(wrapper.contains(Button)).toEqual(true);
  });
});

describe("<AdDialog />", () => {
  it("should render properly", () => {
    const component = mount(<AdDialog ad={[]} />);
    expect(component.find(AdDialog).length).toBe(1);
  });
});

describe("<AdUi />", () => {
  it("should render properly", () => {
    const component = mount(<AdUi />);
    expect(component.find(AdUi).length).toBe(1);
  });
});

describe("<NewButton />", () => {
  it("should render properly", () => {
    const component = mount(<NewButton />);
    expect(component.find(NewButton).length).toBe(1);
  });
});
