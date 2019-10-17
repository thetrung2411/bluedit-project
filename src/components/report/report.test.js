import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ReportPage as TestClass } from "./ReportPage";
import SearchReport from "./SearchReport";
import ReportTable from "./ReportTable";
import ReportDialog from "./ReportDialog";
import ReportTableHead from "./ReportTableHead";

configure({ adapter: new Adapter() });

describe("<ReportTable />", () => {
  it("should find report table", () => {
    const wrapper = shallow(<ReportTable reports={[]} />);
    expect(wrapper.find(ReportTableHead)).toHaveLength(1);
  });

  it("should find report dialog", () => {
    const wrapper = mount(<ReportTable reports={[]} />);
    expect(wrapper.contains(ReportDialog)).toEqual(true);
  });
});

describe("<ReportPage />", () => {
  it("should find report table", () => {
    const wrapper = shallow(<TestClass />);
    wrapper.setState({ reports: [] });
    expect(wrapper.find(ReportTable)).toHaveLength(1);
  });

  it("should find search report", () => {
    const wrapper = shallow(<TestClass />);
    wrapper.setState({ reports: [] });
    expect(wrapper.find(SearchReport)).toHaveLength(1);
  });
});
