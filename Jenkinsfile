pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/gidias1/teste-e2e-ebac.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }

        stage('Executar testes Cypress') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}

