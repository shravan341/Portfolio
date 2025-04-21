pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Must match your Jenkins Node.js installation name
    }
    
    environment {
        VERCEL_TOKEN = credentials('qTRC5jxwgNP3xrilCLc0VUpd') // Make sure this credential exists
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
                    // Install Vercel CLI globally
                    sh 'npm install -g vercel@latest'
                    
                    // Deploy with explicit flags
                    sh """
                        vercel deploy --prod \
                        --token=$VERCEL_TOKEN \
                        --confirm \
                        --yes
                    """
                }
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed - cleaning workspace'
            cleanWs() // Clean up workspace
        }
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Pipeline failed! Check logs for details.'
            // Optional email notification:
            // emailext body: 'Build failed: ${BUILD_URL}',
            //     subject: 'Jenkins Build Failed',
            //     to: 'your@email.com'
        }
    }
}



//qTRC5jxwgNP3xrilCLc0VUpd
