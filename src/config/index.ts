type ENV = 'dev' | 'stg' | 'prd'

// let env: ENV = 'dev'

// if(location.host.indexOf('localhost') > -1) {
//   env = 'dev'
// } else if(location.host === 'driver-stg.marsview.cc') {
//   env = 'stg'
// } else {
//   env = 'prd'
// }

const env = document.documentElement.dataset.env as ENV || 'stg'

const config = {
  dev: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    cdn: 'http://cdn-dev.marsview.cc',
    mock: false,
    mockApi: 'http://localhost:3000'
  },
  stg: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-stg.marsview.cc',
    cdn: 'http://cdn-dev.marsview.cc',
    mock: true,
    mockApi: 'http://localhost:3000'
  },
  prd: {
    baseApi: '/api',
    uploadApi: 'http://api-driver.marsview.cc',
    cdn: 'http://cdn-dev.marsview.cc',
    mock: false,
    mockApi: 'http://localhost:3000'
  }
}

export default {
  env,
  ...config[env]
}
