import { Button, Result, Spin } from 'antd';
import PropTypes from 'prop-types';

const Ret = (
  {
    result,
    block = true,
    children,
  }
) => {
  for (const item of (Array.isArray(result) ? result : [result])) {
    if (item.isLoading) {
      return (
        <Spin>
          {!block && children}
        </Spin>
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
  block: PropTypes.bool,
  children: PropTypes.node,
};

export default Ret;