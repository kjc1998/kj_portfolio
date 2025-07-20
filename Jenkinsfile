pipeline {
    agent {
        docker {
            label 'docker'
            image 'docker.io/node:22-bookworm'
        }
    }
    stages {
        stage('Build') {
            environment {
                HOME = '.'
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
