pipeline {
    agent {
        docker {
            label 'docker'
            image 'docker.io/node:22-bookworm'
        }
    }
    options {
        // only keeps last 10 builds
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '10', daysToKeepStr: '', numToKeepStr: '10')
    }
    stages {
        stage('Validate') {
            steps {
                script {
                    def targetBranches = ['main']
                    def target = env.CHANGE_TARGET

                    if (target != null && !targetBranches.contains(target)) {
                        currentBuild.result = 'ABORTED'
                        error('Abort Build')
                    }
                }
            }
        }
        stage('Build') {
            environment { HOME = '.' }
            steps { sh 'npm install' }
        }
        stage('Test') {
            steps { sh 'npm test' }
        }
    }
}
