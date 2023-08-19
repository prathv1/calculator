import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add this to the very top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
  serviceName: 'calcapp',
  secretToken: 'lewRDJHAU992euVwEe',
  serverUrl: 'https://8857736879824736b6660a48a854c4dd.apm.us-central1.gcp.cloud.es.io:443',
  environment: 'my-environment'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
