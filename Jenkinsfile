pipeline {
    agent {
        label 'master' // Explicitly specify agent label
    }

    tools {
        nodejs 'NodeJS' // Must match Jenkins Node.js installation
    }

    environment {
        VERCEL_TOKEN = credentials('qTRC5jxwgNP3xrilCLc0VUpd')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'npm install -g vercel@latest'
                    sh 'vercel deploy --prod --token=$VERCEL_TOKEN --confirm'
                }
            }
        }
    }

    post {
        always {
            node('master') { // Provide explicit node context
                echo "Cleaning workspace: ${env.WORKSPACE}"
                cleanWs() // Now has proper context
                echo 'Workspace cleanup complete'
            }
        }
    }
}

//qTRC5jxwgNP3xrilCLc0VUpd