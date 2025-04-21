pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Must match exactly what you configured in Jenkins
    }
    
    environment {
        VERCEL_TOKEN = credentials('qTRC5jxwgNP3xrilCLc0VUpd') // Ensure this credential exists
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm // Explicit checkout step
            }
        }
        
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
                withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                    sh 'npm install -g vercel@latest'
                    sh 'vercel deploy --prod --token=$VERCEL_TOKEN --confirm'
                }
            }
        }
    }
    
    post {
        always {
            script {
                try {
                    echo "Cleaning workspace"
                    cleanWs() // Now has proper context
                } catch(e) {
                    echo "Workspace cleanup failed: ${e.message}"
                }
            }
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}


//qTRC5jxwgNP3xrilCLc0VUpd