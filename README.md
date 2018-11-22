# mui-create

mui-create是一款配合react-mobile-ui的脚手架， 功能及实现都比较简单，主要用于生产react-mobile-ui的lib模板，包含目录结构及基础代码(以mui-create lib button)为例

### 目录
```
├── button
│   ├── Button.jsx
│   ├── index.js
│   ├── index.less
│   └── index.md
```
### Button.jsx

```js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';
import './index.less';

class Button extends React.PureComponent {
  state = {
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

Button.propTypes = {

};

Button.defaultProps = {
 
};

export default Button;

```

### index.md


```js
  ## Radio

标签

## code

// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { } from 'react-mobile-ui';

class RadioDemo extends React.PureComponent {

  render() {
    return (
      <div>
      </div>
    );
  }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 类型，可选值为`primary`/`normal`/`warning`/`defalut`  |   string| `normal`|

```

详情请看[这里](https://github.com/shengKevin/react-mobile-ui)

## install 

```js
  npm install mui-create
```

## use

```js
  mui-create lib xxx
```


