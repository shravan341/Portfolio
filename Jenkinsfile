pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Ensure this matches your Jenkins Node.js installation name
    }

    environment {
        VERCEL_TOKEN = credentials('qTRC5jxwgNP3xrilCLc0VUpd')
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                script {
                    sh 'npm install -g vercel@latest'
                    sh 'vercel deploy --prod --token=$VERCEL_TOKEN --confirm --yes'
                }
            }
        }
    }

    post {
        always {
            script {
                // Check if the workspace context is available before attempting to clean
                if (getContext(hudson.FilePath)) {
                    cleanWs()
                } else {
                    echo 'Workspace context is not available. Skipping workspace cleanup.'
                }
            }
        }
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Pipeline failed! Check logs for details.'
        }
    }
}


