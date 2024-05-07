## 类型声明declare 使用
#### 全局性声明：给没有类型定义的模块、变量添加声明类型，一般使用xxx.d.ts定义文件，建议在src下面创建声明文件

- 给window对象扩展字段
- 声明全局方法和变量
- 给axios模块扩展属性
```typescript
  import axios from "axios";

    declare module 'axios' {
        interface AxiosRequestConfig {
            showLoading?: boolean;
            showError?: boolean;
        }
    }
```
