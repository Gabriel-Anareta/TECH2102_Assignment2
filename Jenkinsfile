pipeline {
	agent any

	stage('Build') {
        agent {
            docker {
                image 'node:20-alpine'
                reuseNode true
            }
        }
	}
}