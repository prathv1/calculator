pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        echo 'build step done'
      }
    }
    stage("run") {
      steps {
        node test.js
      }
    }
  }
}
