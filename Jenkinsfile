pipeline {
	agent any
	
    stages {
	
        stage('Build') {
            agent{
				docker {
					image 'node:20-alpine'
					reuseNode true
        	    }
        	}
			steps {
				sh '''
					node --version
					npm --version
					npm install
					npm run build
					ls -la
				'''
			}
		}
	}
}