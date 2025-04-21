pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' // Must match Jenkins Node.js installation name
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
            environment {
                VERCEL_TOKEN = credentials('qTRC5jxwgNP3xrilCLc0VUpd') // Matches the credential ID you created
            }
            steps {
                sh 'npm install -g vercel'
                sh 'vercel --prod --token=$VERCEL_TOKEN'
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

