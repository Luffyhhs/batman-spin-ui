import { Suspense } from "react";

import { Spin } from "antd";

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Spin spinning={true} />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
