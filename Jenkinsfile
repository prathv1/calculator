pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        sh 'npm run build'
        echo 'build step done'
      }
    }
    stage("deploy") {
      steps {
        sh 'cd ./dist'
        echo "ready for deploy"
        echo "deployment should be done here"
      }
    }
  }
}
