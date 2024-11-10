import { Button, Result, Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const Ret = (
  {
    result,
    children,
  }
) => {
  if (!result) {
    return children;
  }

  if (result.loading) {
    return (
      <Spin/>
    )
  }

  if (result.error) {
    return (
      <Result
        status="error"
        title="出错了"
        subTitle={result.error.message}
        extra={
          <Button type="primary" onClick={() => request.refresh()}>重试</Button>
        }
      />
    );
  }

  return children;
};

Ret.propTypes = {
  result: PropTypes.object,
  children: PropTypes.node,
};

export default Ret;