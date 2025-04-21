pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Must match your Jenkins Node.js installation name
    }
    
    environment {
        VERCEL_TOKEN = credentials('qTRC5jxwgNP3xrilCLc0VUpd') // Make sure this credential exists in Jenkins
    }
    
    stages {
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
                    // Install Vercel CLI if not already present
                    sh 'npm install -g vercel@latest'
                    
                    // Deploy to Vercel
                    sh """
                        vercel --prod --token=$VERCEL_TOKEN \
                        --yes \
                        --confirm
                    """
                }
            }
        }
    }
    
    post {
        failure {
            echo 'Build failed! Check the console output for details.'
            // Optional: Add email notification
            // emailext body: 'Build failed! Check ${BUILD_URL}',
            //     subject: 'Jenkins Build Failed',
            //     to: 'your@email.com'
        }
        success {
            echo 'Build and deployment completed successfully!'
        }
    }
}


