pipeline {
    agent {
        docker {
            label 'docker'
            image 'docker.io/node:22-bookworm'
        }
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                    npm cache clean --force
                    npm install
                '''
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
