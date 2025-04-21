pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Must match exactly your Jenkins Node.js installation
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
            script {
                // Safe workspace cleanup with proper context
                node('built-in') {
                    cleanWs()
                    echo 'Workspace cleaned successfully'
                }
            }
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed! Check logs for details.'
        }
    }
}


//qTRC5jxwgNP3xrilCLc0VUpd