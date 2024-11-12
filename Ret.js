import { Button, Result, Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const Ret = (
  {
    result,
    children,
  }
) => {
  for (const item of (Array.isArray(result) ? result : [result])) {
    if (item.isLoading) {
      return (
        <Spin/>
      );
    }

    if (item.error) {
      return (
        <Result
          status="error"
          title="出错了"
          subTitle={item.error.message}
          extra={
            <Button type="primary" onClick={() => item.mutate()}>重试</Button>
          }
        />
      );
    }
  }

  return children;
};

Ret.propTypes = {
  result: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  children: PropTypes.node,
};

export default Ret;